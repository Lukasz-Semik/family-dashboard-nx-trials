import { Injectable } from '@nestjs/common';
import { getRepository, Connection } from 'typeorm';
import { Gender } from '@family-dashboard/app-constants';

import { User as UserEntity } from '@app-be/entities';

@Injectable()
export class UserService {
  private user = getRepository(UserEntity);

  constructor(private connection: Connection) {}

  public get repo() {
    return this.user;
  }

  public createNewEntity() {
    return new UserEntity();
  }

  public async getUserByEmail(email: string) {
    const user = await this.repo.findOne({ email });

    return user;
  }

  public async getUserSerializedByEmail(email) {
    const user = await this.getUserByEmail(email);

    return this.serializeUser(user);
  }

  public serializeUser(user: UserEntity) {
    const { id, firstName, lastName, email, isVerified, gender, birthDate } = user;
    const genderParsed = gender as Gender;

    return {
      id,
      firstName,
      lastName,
      fullName: `${firstName} ${lastName}`,
      email,
      gender: genderParsed,
      birthDate,
      isVerified,
    };
  }
}
