import { Injectable, HttpStatus } from '@nestjs/common';
import { getRepository, Connection } from 'typeorm';
import { hash } from 'bcryptjs';
import { isEmpty } from 'lodash';
import { UserSignUpPostOptions } from '@family-dashboard/app-types';

import { User as UserEntity } from '@app-be/entities';
import { UserSerializatorService } from '@app-be/serializators/user/userSerializator.service';
import { throwError } from '@app-be/helpers/errors';
import { TokenService } from '@app-be/modules-global/token/token.service';
import { MailsService } from '@app-be/modules-global/mails/mails.service';
import { TokenExpiration } from '@app-be/modules-global/token/token.constants';

@Injectable()
export class RegistratorService {
  private userRepo = getRepository(UserEntity);

  constructor(
    private connection: Connection,
    private mailsService: MailsService,
    private tokenService: TokenService,
    private userSerializator: UserSerializatorService
  ) {}

  public async createUser(userData: UserSignUpPostOptions) {
    const { firstName, lastName, email, password } = userData;

    try {
      const newUser = new UserEntity();

      const hashedPassword = await hash(password, 10);

      const createdUser = await this.userRepo.save({
        ...newUser,
        email,
        firstName,
        lastName,
        password: hashedPassword,
        isVerified: false,
      });

      const token = this.tokenService.create(
        {
          email: createdUser.email,
          id: createdUser.id,
        },
        TokenExpiration.ExpireWeeks2
      );

      if (!isEmpty(createdUser)) {
        this.mailsService.sendAccountConfirmationEmail(
          createdUser.email,
          createdUser.firstName,
          token
        );
      }

      return this.userSerializator.serializeUser(createdUser);
    } catch (err) {
      throwError(HttpStatus.INTERNAL_SERVER_ERROR, err);
    }
  }
}
