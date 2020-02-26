import { PipeTransform, HttpStatus, Injectable } from '@nestjs/common';
import { plainToClass } from 'class-transformer';
import { validate } from 'class-validator';
import { isEmpty } from 'lodash';
import { appErrors } from '@family-dashboard/app-errors';

import { throwError } from '../helpers/errors';

@Injectable()
export class BodyValidatorPipe<B, E, V> implements PipeTransform {
  async transform(reqBody: B) {
    return reqBody;
  }

  protected validateBody(reqBody?: B) {
    if (isEmpty(reqBody)) {
      throwError(HttpStatus.BAD_REQUEST, { body: appErrors.base.required });
    }
  }

  protected async validateFields(reqBody: B, validatorSchema: V): Promise<void> {
    const payloadClass = plainToClass(validatorSchema as any, reqBody);
    const validationErrors = await validate(payloadClass);

    const errors = {} as E;

    validationErrors.forEach(error => {
      errors[error.property] = Object.values(error.constraints);
    });

    if (!isEmpty(errors)) {
      throwError(HttpStatus.BAD_REQUEST, errors);
    }
  }
}
