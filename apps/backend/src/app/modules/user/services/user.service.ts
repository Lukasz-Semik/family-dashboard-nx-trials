import { Injectable } from '@nestjs/common';
import { getRepository, Connection } from 'typeorm';
import { omit } from 'lodash';
import { Gender } from '@family-dashboard/app-constants';
import { UserData } from '@family-dashboard/app-types';

import { User as UserEntity } from '@app-be/entities';
import { ItemService } from '@app-be/types/item-service.type';

@Injectable()
export class UserService implements ItemService<UserEntity, UserData> {
  protected repository = getRepository(UserEntity);

  constructor(private connection: Connection) {}

  public get repo() {
    return this.repository;
  }

  public createNewEntity() {
    return new UserEntity();
  }

  public async getByEmail(email: string) {
    const user = await this.repo.findOne({ email });

    return user;
  }

  public async getSerializedByEmail(email) {
    const user = await this.getByEmail(email);

    return this.serialize(user);
  }

  public serialize(user: UserEntity) {
    const { firstName, lastName, gender } = user;
    const genderParsed = gender as Gender;

    return {
      ...omit(user, ['gender', 'password']),
      fullName: `${firstName} ${lastName}`,
      gender: genderParsed,
    };
  }
}
