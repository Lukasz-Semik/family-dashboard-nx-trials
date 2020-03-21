import { Routes } from '../routes';

export class FamilyRoutes extends Routes {
  item = new Routes(':familyId', this.name);
}
