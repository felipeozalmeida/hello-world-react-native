import type {User, UserWithoutId} from '../../../models';

export type UserService = {
  list: () => Promise<User[]>;
  get: (id: User['id']) => Promise<User>;
  create: (user: UserWithoutId) => Promise<User>;
  update: (user: User) => Promise<User>;
  delete: (id: User['id']) => Promise<void>;
};
