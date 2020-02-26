import { Injectable } from '@nestjs/common';

import { User as UserEntity } from '@app-be/entities';

@Injectable()
export class UserSerializatorService {
  public serializeUser(user: UserEntity) {
    const { id, firstName, lastName, email } = user;

    return {
      id,
      firstName,
      lastName,
      email,
    };
  }
}
