import { UserData } from '../user';

export interface FamilyData {
  id: string;
  name: string;
  createdAt: string;
  updatedAt: string;
  users: UserData[];
}

export interface FamilyCreatePostOptions {
  name: string;
}
