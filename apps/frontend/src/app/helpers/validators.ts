import { ValidatorFn, AbstractControl } from '@angular/forms';
import { isEmpty } from 'lodash';

export function requiredValidator(): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    const isRequired = isEmpty(control.value);

    return isRequired ? { message: 'errors.required' } : null;
  };
}
