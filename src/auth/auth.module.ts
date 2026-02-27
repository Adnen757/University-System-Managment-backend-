import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
<<<<<<< HEAD
import { AccessTokenStrategy } from './strategies/accessToken.strategy';
import { refreshTokenStrategy } from './strategies/refreshToken.strategy';
=======
import { AccessTokenStrategy } from 'src/auth/stratigies/accessToken.stratigy';
import { refreshTokenStrategy } from 'src/auth/stratigies/refreshToken.stratigy';
>>>>>>> hamed/feature-auth-hamed
import { UserModule } from 'src/user/user.module';
import { JwtModule } from '@nestjs/jwt';

@Module({
<<<<<<< HEAD
  imports:[UserModule,JwtModule.register({})],
  controllers: [AuthController],
  providers: [AuthService, AccessTokenStrategy, refreshTokenStrategy],
=======
  imports: [UserModule,JwtModule.register({})],
  controllers: [AuthController],
  providers: [AuthService,AccessTokenStrategy,refreshTokenStrategy],
  
>>>>>>> hamed/feature-auth-hamed
})
export class AuthModule {}
