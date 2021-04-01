export type User = {
  id?: number;
  email: string;
  password: string;
  type: number;
  status: number;
};

export const canCreateUser = (user: User): boolean => {
  return Boolean(user.email && user.password && user.type && user.status);
};

export const canUpdateUser = (user: User): boolean => {
  return Boolean(
    user.id && user.email && user.password && user.type && user.status,
  );
};
