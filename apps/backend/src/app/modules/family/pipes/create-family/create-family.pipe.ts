import { UserSignUpPostOptions } from '@family-dashboard/app-types';

import { BodyValidatorPipe } from '@app-be/pipes/body-validator.pipe';

import { CreateFamilyValidator } from './create-family.validator';

interface CreateFamiliyErrors {
  requestBody?: string[];
  name?: string[];
}

export class CreateFamilyValidatorPipe extends BodyValidatorPipe<
  UserSignUpPostOptions,
  CreateFamiliyErrors,
  typeof CreateFamilyValidator
> {
  async transform(reqBody: UserSignUpPostOptions) {
    await this.validateBody(reqBody);

    await this.validateFields(reqBody, CreateFamilyValidator);

    return reqBody;
  }
}
