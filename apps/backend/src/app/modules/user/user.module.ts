import { Module } from '@nestjs/common';

import { UserSerializatorService } from '@app-be/serializators/user/userSerializator.service';

import { UserController } from './user.controller';
import { RegistratorService } from './services/registrator.service';
import { UserService } from './services/user.service';
import { AuthService } from '../auth/auth.service';

@Module({
  controllers: [UserController],
  providers: [UserSerializatorService, RegistratorService, UserService, AuthService],
})
export class UserModule {}
