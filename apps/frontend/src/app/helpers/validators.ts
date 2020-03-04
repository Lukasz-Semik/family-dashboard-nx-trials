import { ValidatorFn, AbstractControl } from '@angular/forms';
import { isEmpty } from 'lodash';
import isEmail from 'is-email';
import * as moment from 'moment';

export const composeValidators = (...validators: ValidatorFn[]): ValidatorFn => (...args) => {
  for (let index = 0; index < validators.length; index += 1) {
    const validator = validators[index];
    const result = validator(...args);

    if (result) {
      return result;
    }
  }

  return undefined;
};

export function requiredValidator(): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    const isValid = !isEmpty(control.value);

    return isValid ? null : { message: 'errors.required' };
  };
}

export function emailValidator(): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    const isValid = isEmail(control.value);

    return isValid ? null : { message: 'errors.emailWrongFormat' };
  };
}

export function minLengthValidator(min: number): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    const isValid = control.value.length >= min;

    return isValid ? null : { message: 'errors.minLength', value: min };
  };
}

export function maxLengthValidator(max: number): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    const isValid = control.value.length <= max;

    return isValid ? null : { message: 'errors.maxLength', value: max };
  };
}

export function smallLetterIncludedValidator(): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    const isValid = /[a-z]/.test(control.value);

    return isValid ? null : { message: 'errors.smallLetterRequired' };
  };
}

export function capitalLetterIncludedValidator(): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    const isValid = /[A-Z]/.test(control.value);

    return isValid ? null : { message: 'errors.capitalLetterRequired' };
  };
}

export function numberIncludedValidator(): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    const isValid = /[0-9]/.test(control.value);

    return isValid ? null : { message: 'errors.numberRequired' };
  };
}

export function specialCharacterIncludedValidator(): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    const isValid = /[-!$%^°&§@*()_+#|~=`{}[\]:";'<>?,./]/.test(control.value);

    return isValid ? null : { message: 'errors.specialCharacterRequired' };
  };
}

export function pastValidator(): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    const isValid = !moment(control.value).isSameOrAfter();

    return isValid ? null : { message: 'errors.mustBeInThePast' };
  };
}

export const passwordValidators = [
  minLengthValidator(9),
  maxLengthValidator(32),
  smallLetterIncludedValidator(),
  capitalLetterIncludedValidator(),
  numberIncludedValidator(),
  specialCharacterIncludedValidator(),
];
