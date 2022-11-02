import { Controller, Request, Post, UseGuards } from '@nestjs/common';
import { ApiBody, ApiOperation, ApiTags } from '@nestjs/swagger';
import { LoginUserDto } from '@root/models/dtos/login-user.dto';
import { LocalGuard } from './guards/local.guard';

@ApiTags('Auth')
@Controller('api/auth')
export class AuthController {
  @ApiOperation({ summary: 'Login using email and password' })
  @ApiBody({ type: LoginUserDto })
  @UseGuards(LocalGuard)
  @Post('login')
  async login(@Request() req) {
    return req.user;
  }
}
