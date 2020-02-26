import { UserSignUpPostOptions } from '@family-dashboard/app-types';

import { BodyValidatorPipe } from '@app-be/pipes/body-validator.pipe';

import { ConfirmUserValidator } from './confirm-user.validator';

interface ConfirmUserErrors {
  requestBody?: string[];
  token?: string[];
  email?: string[];
}

export class ConfirmUserValidatorPipe extends BodyValidatorPipe<
  UserSignUpPostOptions,
  ConfirmUserErrors,
  typeof ConfirmUserValidator
> {
  async transform(reqBody: UserSignUpPostOptions) {
    await this.validateBody(reqBody);

    await this.validateFields(reqBody, ConfirmUserValidator);

    return reqBody;
  }
}
