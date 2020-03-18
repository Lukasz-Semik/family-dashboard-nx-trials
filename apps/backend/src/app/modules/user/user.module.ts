import { Module } from '@nestjs/common';

import { UserController } from './user.controller';
import { RegistrationService } from './services/registration.service';
import { UserService } from './services/user.service';
import { AuthService } from '../auth/auth.service';
import { AuthModule } from '../auth/auth.module';

@Module({
  imports: [AuthModule],
  controllers: [UserController],
  providers: [RegistrationService, UserService, AuthService],
})
export class UserModule {}
