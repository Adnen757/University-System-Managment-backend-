import { Controller, Get, Post, Body, Patch, Param, Delete, Req, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateAuthDto } from './dto/create-auth.dto';
import { UpdateAuthDto } from './dto/update-auth.dto';
import { AuthDto } from './dto/auth.dto';
<<<<<<< HEAD
import { RefreshTokenGuard } from 'src/common/guards/refreshtoken.guard';
=======
import { RefreshTokenGuard } from 'src/common/guards/refreshToken.guard';
import { CLIENT_RENEG_LIMIT } from 'tls';
>>>>>>> hamed/feature-auth-hamed


interface UserPayload {
  sub: number;
  username: string;
<<<<<<< HEAD
  role:string
=======
  role: string;
>>>>>>> hamed/feature-auth-hamed
}
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}
@Post('signin')
signin(@Body() data:AuthDto) {
<<<<<<< HEAD
  return this.authService.signIn(data);}
=======
  return this.authService.Signin(data);}
>>>>>>> hamed/feature-auth-hamed
  @UseGuards(RefreshTokenGuard)
  @Get('logout')
  logout(@Req() req:Request & { user: UserPayload }) {
    this.authService.logout(req.user.sub);}

<<<<<<< HEAD


=======
>>>>>>> hamed/feature-auth-hamed
    @UseGuards(RefreshTokenGuard)
  @Get('refresh')
  refreshTokens(@Req() req: Request & { user: UserPayload }) {
    const userId= req.user.sub;
    const refreshToken = req.user["refreshToken"];
<<<<<<< HEAD
     return this.authService.refreshToken(userId, refreshToken);
  }








=======
  
     return this.authService.refreshToken(userId, refreshToken);
  }

>>>>>>> hamed/feature-auth-hamed
  @Post("/forgetpassword")
  forgetPassword(@Body() data: AuthDto) {
    return this.authService.forgotPassword(data.email);
  }

<<<<<<< HEAD







=======
>>>>>>> hamed/feature-auth-hamed
  @Post("/reset/:token")
  resetPassword(@Body() data: AuthDto, @Param("token") token: string) {
    return this.authService.resetPassword(token, data.password);
  }
}