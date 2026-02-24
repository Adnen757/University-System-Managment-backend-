import { ForbiddenException, Injectable } from '@nestjs/common';
import { CreateAuthDto } from './dto/create-auth.dto';
import { UpdateAuthDto } from './dto/update-auth.dto';
import { UserService } from 'src/user/user.service';
import { AuthDto } from './dto/auth.dto';
import * as argon2 from 'argon2';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
import * as bcrypt from 'bcrypt';


@Injectable()
export class AuthService {
 constructor(private userService: UserService , private jwtService: JwtService, private configService: ConfigService) {}

 async Signin(data: AuthDto) {
  const user = await this.userService.findByEmail(data.email);
  if (!user) {
    throw new Error("User not found");
  }
  const matchingPassword = await argon2.verify(user.password, data.password);
  if (!matchingPassword) {
    throw new Error("Invalid password");
  }
  const Tokens = await this.getTokens(user.id, user.email, user.role);
  await this.updateRefreshToken(user.id, Tokens.refreshToken);
  return { user, Tokens }
 }
async logout(userId: number) {
    return this.userService.update(userId, {
      refreshToken: null,
    });
  }

  async hashData(data: string) {
  const saltRounds = 10;
  return bcrypt.hash(data, saltRounds);
}

async updateRefreshToken(userId: number, refreshToken: string) {
    const hashedRefreshToken = await this.hashData(refreshToken);
    await this.userService.update(userId, {
      refreshToken: hashedRefreshToken,
    });
  }

  async getTokens(userId: number, email: string , role:string) {
    const [accessToken, refreshToken] = await Promise.all([
      this.jwtService.signAsync(
        {
          sub: userId,
          email,
          role
        },
        {
          secret: this.configService.get<string>('JWT_ACCESS_SECRET'),
          expiresIn: '15m',
        },
      ),
      this.jwtService.signAsync(
        {
          sub: userId,
          email,
role
        },
        {
          secret: this.configService.get<string>('JWT_REFRESH_SECRET'),
          expiresIn: '7d',
        },
      ),
    ]);

    return {
      accessToken,
      refreshToken,
    };
  }


  async refreshToken(userId: number, refreshToken: string) {
    const user= await this.userService.findOne(userId);
    console.log("refresh token matches:",  await bcrypt.compare(
      user.refreshToken,
      refreshToken,
    ));
        console.log("user :", user);

    if (!user|| !user.refreshToken)
      throw new ForbiddenException('Access Denied');

    const refreshTokenMatches = await bcrypt.compare(
      refreshToken,
      user.refreshToken,
    );
    if (!refreshTokenMatches) throw new ForbiddenException('Access Denied');
    const tokens = await this.getTokens(user.id, user.email , user.role);
    await this.updateRefreshToken(user.id, tokens.refreshToken);
    return tokens;
  }


}