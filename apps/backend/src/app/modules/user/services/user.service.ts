import { Injectable } from '@nestjs/common';
import { getRepository, Connection } from 'typeorm';

import { User as UserEntity } from '@app-be/entities';
import { UserSerializatorService } from '@app-be/serializators/user/userSerializator.service';

@Injectable()
export class UserService {
  private userRepo = getRepository(UserEntity);

  constructor(private connection: Connection, private userSerializator: UserSerializatorService) {}

  public async getUserByEmail(email: string) {
    const user = await this.userRepo.findOne({ email });

    return user;
  }

  public async getUserSerializedByEmail(email) {
    const user = await this.getUserByEmail(email);

    return this.userSerializator.serializeUser(user);
  }
}
