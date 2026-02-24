import { Controller, Get, Post, Body, Patch, Param, Delete, Req, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateAuthDto } from './dto/create-auth.dto';
import { UpdateAuthDto } from './dto/update-auth.dto';
import { AuthDto } from './dto/auth.dto';
import { RefreshTokenGuard } from 'src/common/guards/refreshToken.guard';
import { CLIENT_RENEG_LIMIT } from 'tls';


interface UserPayload {
  sub: number;
  username: string;
  role: string;
}
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}
@Post('signin')
signin(@Body() data:AuthDto) {
  return this.authService.Signin(data);}
  @UseGuards(RefreshTokenGuard)
  @Get('logout')
  logout(@Req() req:Request & { user: UserPayload }) {
    this.authService.logout(req.user.sub);}

    @UseGuards(RefreshTokenGuard)
  @Get('refresh')
  refreshTokens(@Req() req: Request & { user: UserPayload }) {
    const userId= req.user.sub;
    const refreshToken = req.user["refreshToken"];
  
     return this.authService.refreshToken(userId, refreshToken);
  }
}