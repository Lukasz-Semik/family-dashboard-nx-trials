import { Injectable } from '@nestjs/common';
import { UserData } from '@family-dashboard/app-types';

import { User as UserEntity } from '@app-be/entities';

@Injectable()
export class UserSerializatorService {
  public serializeUser(user: UserEntity): UserData {
    const { id, firstName, lastName, email, isVerified } = user;

    return {
      id,
      firstName,
      lastName,
      fullName: `${firstName} ${lastName}`,
      email,
      isVerified,
    };
  }
}
