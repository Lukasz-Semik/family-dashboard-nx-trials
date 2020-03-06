import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';

import { EnvService } from '@app-be/modules-global/env/env.service';
import { UserSerializatorService } from '@app-be/serializators/user/userSerializator.service';

import { AuthService } from './auth.service';
import { LocalStrategy } from './local.strategy';
import { UserService } from '../user/services/user.service';
import { JwtStrategy } from './jwt.strategy';

@Module({
  imports: [
    PassportModule,
    JwtModule.registerAsync({
      useFactory: async (envService: EnvService) => ({
        secret: envService.get('JWT_TOKEN') as string,
        signOptions: { expiresIn: '180s' },
      }),
      inject: [EnvService],
    }),
  ],
  providers: [AuthService, LocalStrategy, JwtStrategy, UserService, UserSerializatorService],
  exports: [JwtModule],
})
export class AuthModule {}
