import { Gender } from '@family-dashboard/app-constants';

export interface UserData {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  fullName: string;
  birthDate: string;
  gender: Gender;
  isVerified: boolean;
  isFamilyHead: boolean;
  familyId: string;
}

export interface UserSignUpPostOptions {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  birthDate: string;
  gender: Gender;
}

export interface UserConfirmPatchOptions {
  token: string;
}

export interface UserSignInPostOptions {
  // as local strategy is used (pssport), we pass email as username
  username: string;
  password: string;
}
