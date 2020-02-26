import { IsNotEmpty } from 'class-validator';
import { appErrors } from '@family-dashboard/app-errors';

export class ConfirmUserValidator {
  @IsNotEmpty({
    message: appErrors.base.required,
  })
  public readonly token: string;
}
