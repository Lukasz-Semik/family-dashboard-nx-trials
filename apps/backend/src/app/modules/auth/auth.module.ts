import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';

import { AuthService } from './auth.service';
import { LocalStrategy } from './local.strategy';
import { UserService } from '../user/services/user.service';
import { jwtConstants } from './constants';

@Module({
  imports: [
    PassportModule,
    // JwtModule.register({
    //   secret: jwtConstants.secret,
    //   signOptions: { expiresIn: '60s' },
    // }),
  ],
  providers: [AuthService, LocalStrategy, UserService],
})
export class AuthModule {}
