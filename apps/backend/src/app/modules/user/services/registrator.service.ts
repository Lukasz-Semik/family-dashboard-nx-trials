import { Injectable, HttpStatus } from '@nestjs/common';
import { hash } from 'bcryptjs';
import { isEmpty } from 'lodash';
import { UserSignUpPostOptions, UserConfirmPatchOptions } from '@family-dashboard/app-types';
import { appErrors } from '@family-dashboard/app-errors';

import { throwError } from '@app-be/helpers/errors';
import { TokenService } from '@app-be/modules-global/token/token.service';
import { MailsService } from '@app-be/modules-global/mails/mails.service';
import { TokenExpiration } from '@app-be/modules-global/token/token.constants';

import { UserService } from './user.service';

@Injectable()
export class RegistratorService {
  constructor(
    private mailsService: MailsService,
    private tokenService: TokenService,
    private userService: UserService
  ) {}

  public async createUser(userData: UserSignUpPostOptions) {
    const { firstName, lastName, email, password, birthDate, gender } = userData;

    try {
      const newUser = this.userService.createNewEntity();

      const hashedPassword = await hash(password, 10);

      const createdUser = await this.userService.repo.save({
        ...newUser,
        email,
        firstName,
        lastName,
        birthDate,
        gender,
        password: hashedPassword,
        isVerified: false,
        isFamilyHead: false,
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

      return this.userService.serialize(createdUser);
    } catch (err) {
      throwError(HttpStatus.INTERNAL_SERVER_ERROR, err);
    }
  }

  public async confirmUser(body: UserConfirmPatchOptions) {
    try {
      const { email } = await this.tokenService.decode(body.token);

      const existingUser = await this.userService.repo.findOne({ email });

      if (isEmpty(existingUser)) {
        throwError(HttpStatus.NOT_FOUND, { email: [appErrors.email.notExist] });
      }

      if (existingUser.isVerified) {
        throwError(HttpStatus.CONFLICT, { email: [appErrors.email.alreadyVerified] });
      }

      const confirmedUser = await this.userService.repo.save({
        ...existingUser,
        isVerified: true,
      });

      return this.userService.serialize(confirmedUser);
    } catch (err) {
      throwError(HttpStatus.INTERNAL_SERVER_ERROR, err);
    }
  }
}
