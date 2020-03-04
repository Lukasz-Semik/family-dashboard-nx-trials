import { IsEmail, IsNotEmpty, Matches } from 'class-validator';
import { appErrors } from '@family-dashboard/app-errors';
import { Gender } from '@family-dashboard/app-constants';

export class CreateUserValidator {
  @IsNotEmpty({
    message: appErrors.base.required,
  })
  @IsEmail(undefined, {
    message: appErrors.email.wrongFormat,
  })
  public readonly email: string;

  @IsNotEmpty({
    message: appErrors.base.required,
  })
  @Matches(new RegExp('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[.!@#$%^&*])(?=.{8,})'), {
    message: appErrors.password.wrongFormat,
  })
  public readonly password: string;

  @IsNotEmpty({
    message: appErrors.base.required,
  })
  public readonly firstName: string;

  @IsNotEmpty({
    message: appErrors.base.required,
  })
  public readonly lastName: string;

  @IsNotEmpty({
    message: appErrors.base.required,
  })
  public readonly gender: Gender;

  @IsNotEmpty({
    message: appErrors.base.required,
  })
  public readonly birthDate: Date;
}
