import { Injectable, HttpStatus, Post } from '@nestjs/common';
import { getRepository, Connection } from 'typeorm';
import { isEmpty } from 'lodash';
import { FamilyCreatePostOptions, FamilyData } from '@family-dashboard/app-types';
import { appErrors } from '@family-dashboard/app-errors';

import { Family as FamilyEntity } from '@app-be/entities';
import { UserService } from '@app-be/modules/user/services/user.service';
import { ItemService } from '@app-be/types/item-service.type';
import { throwError } from '@app-be/helpers/errors';

@Injectable()
export class FamilyService implements ItemService<FamilyEntity, FamilyData> {
  private family = getRepository(FamilyEntity);

  constructor(private connection: Connection, private userService: UserService) {}

  public get repo() {
    return this.family;
  }

  public createNewEntity() {
    return new FamilyEntity();
  }

  public async createItem(body: FamilyCreatePostOptions, email) {
    try {
      const { name } = body;

      const user = await this.userService.getByEmail(email);

      if (!isEmpty(user.family)) {
        return throwError(HttpStatus.CONFLICT, { user: appErrors.user.alreadyHasFamily });
      }

      const newFamily = this.createNewEntity();

      const updatedUser = await this.userService.repo.save({
        ...user,
        isFamilyHead: true,
      });

      const createdFamily = await this.repo.save({
        ...newFamily,
        users: [updatedUser],
        name,
      });

      return this.serialize(createdFamily);
    } catch (err) {
      throwError(HttpStatus.INTERNAL_SERVER_ERROR, err);
    }
  }

  public async getItem(id: string) {
    try {
      const family = await this.repo.findOne({ id }, { relations: ['users'] });

      return this.serialize(family);
    } catch (err) {
      throwError(HttpStatus.INTERNAL_SERVER_ERROR, err);
    }
  }

  public serialize(family: FamilyEntity) {
    return {
      ...family,
      users: family.users.map(item => this.userService.serialize(item)),
    };
  }
}
