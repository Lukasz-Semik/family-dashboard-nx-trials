import { Injectable } from '@nestjs/common';
import { getRepository, Connection } from 'typeorm';
import { UserSignUpPostOptions } from '@family-dashboard/app-types';

import { User as UserEntity } from '@app-be/entities';
import { UserSerializatorService } from '@app-be/serializators/user/userSerializator.service';

@Injectable()
export class UserCreatorService {
  private userRepo = getRepository(UserEntity);

  constructor(private connection: Connection, private userSerializator: UserSerializatorService) {}

  public async createUser(userData: UserSignUpPostOptions) {
    const { firstName, lastName, email, password } = userData;

    try {
      const newUser = new UserEntity();

      const createdUser = await this.userRepo.save({
        ...newUser,
        password,
        email,
        firstName,
        lastName,
        isVerified: false,
      });

      return this.userSerializator.serializeUser(createdUser);
    } catch (err) {
      console.log(err);
    }
  }
}
