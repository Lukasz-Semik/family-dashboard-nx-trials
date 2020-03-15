import { UserData } from '@family-dashboard/app-types';
import { Gender } from '@family-dashboard/app-constants';

import { User as UserEntity } from '@app-be/entities';

export const serializeUser = (user: UserEntity): UserData => {
  const { id, firstName, lastName, email, isVerified, gender, birthDate } = user;
  const genderParsed = gender as Gender;

  return {
    id,
    firstName,
    lastName,
    fullName: `${firstName} ${lastName}`,
    email,
    gender: genderParsed,
    birthDate,
    isVerified,
  };
};
