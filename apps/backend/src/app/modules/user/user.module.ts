import { Module } from '@nestjs/common';

import { UserController } from './user.controller';
import { UserSerializatorService } from '@app-be/serializators/user/userSerializator.service';
import { UserCreatorService } from './services/user-creator.service';

@Module({
  controllers: [UserController],
  providers: [UserSerializatorService, UserCreatorService],
})
export class UserModule {}
