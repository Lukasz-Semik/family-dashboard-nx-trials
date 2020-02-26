export interface UserData {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  fullName: string;
  isVerified: boolean;
}

export interface UserSignUpPostOptions {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
}

export interface UserConfirmPatchOptions {
  token: string;
}
