import type {User} from '../../models';

export type UserService = {
  get: (id: User['id']) => Promise<User>;
  list: () => Promise<User[]>;
  create: (user: User) => Promise<User>;
  update: (user: User) => Promise<User>;
  delete: (id: User['id']) => Promise<void>;
};
