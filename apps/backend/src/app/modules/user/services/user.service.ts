import { Injectable } from '@nestjs/common';
import { getRepository, Connection } from 'typeorm';

import { User as UserEntity } from '@app-be/entities';

@Injectable()
export class UserService {
  private userRepo = getRepository(UserEntity);

  constructor(private connection: Connection) {}

  public async getUserByEmail(email: string) {
    const user = await this.userRepo.findOne({ email });
    console.log('userService', { user });
    return user;
  }
}
