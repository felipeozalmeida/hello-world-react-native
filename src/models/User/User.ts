export type UserWithoutId = {
  email: string;
  password: string;
  type: number;
  status: number;
};

export type User = UserWithoutId & {id: number};

export const canCreateUser = (user: User): boolean => {
  return Boolean(user.email && user.password && user.type && user.status);
};

export const canUpdateUser = (user: User): boolean => {
  return Boolean(
    user.id && user.email && user.password && user.type && user.status,
  );
};
