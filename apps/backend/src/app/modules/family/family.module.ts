import { Module } from '@nestjs/common';

import { UserService } from '@app-be/modules/user/services/user.service';

@Module({
  imports: [],
  controllers: [],
  providers: [UserService],
})
export class UserModule {}
