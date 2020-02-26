import { Module } from '@nestjs/common';

import { UserController } from './user.controller';
import { UserSerializatorService } from '@app-be/serializators/user/userSerializator.service';
import { RegistratorService } from './services/registrator.service';

@Module({
  controllers: [UserController],
  providers: [UserSerializatorService, RegistratorService],
})
export class UserModule {}
