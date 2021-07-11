export type UserWithoutId = {
  email: string;
  password: string;
  type: string;
  status: string;
  person: string;
};

export type User = UserWithoutId & {id: string};

export const canCreateUser = (user: UserWithoutId): boolean => {
  return Boolean(
    user.email && user.password && user.type && user.status && user.person,
  );
};

export const canUpdateUser = (user: User): boolean => {
  return Boolean(
    user.id &&
      user.email &&
      user.password &&
      user.type &&
      user.status &&
      user.person,
  );
};
