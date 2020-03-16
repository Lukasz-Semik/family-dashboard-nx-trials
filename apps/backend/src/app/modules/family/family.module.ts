import { Module } from '@nestjs/common';

import { UserService } from '@app-be/modules/user/services/user.service';

import { FamilyController } from './family.controler';
import { FamilyService } from './services/family.service';

@Module({
  imports: [],
  controllers: [FamilyController],
  providers: [UserService, FamilyService],
})
export class FamilyModule {}
