import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { AccessTokenStrategy } from 'src/auth/stratigies/accessToken.stratigy';
import { refreshTokenStrategy } from 'src/auth/stratigies/refreshToken.stratigy';
import { UserModule } from 'src/user/user.module';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [UserModule,JwtModule.register({})],
  controllers: [AuthController],
  providers: [AuthService,AccessTokenStrategy,refreshTokenStrategy],
  
})
export class AuthModule {}
