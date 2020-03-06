import { Routes } from '../routes';

export class UserRoutes extends Routes {
  public signUp = new Routes('sign-up', this.name);
  public confirm = new Routes('confirm', this.name);
  public signIn = new Routes('sign-in', this.name);
  public me = new Routes('me', this.name);
}
