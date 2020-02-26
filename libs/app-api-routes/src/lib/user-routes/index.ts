import { Routes } from '../routes';

export class UserRoutes extends Routes {
  public signUp = new Routes('sign-up', this.name);
  public confirm = new Routes('confirm', this.name);
}
