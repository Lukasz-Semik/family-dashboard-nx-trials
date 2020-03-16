import { IsNotEmpty } from 'class-validator';
import { appErrors } from '@family-dashboard/app-errors';

export class CreateFamilyValidator {
  @IsNotEmpty({
    message: appErrors.base.required,
  })
  public readonly name: string;
}
