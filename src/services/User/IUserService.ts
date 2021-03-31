import type {User} from '../../models';

export interface IUserService {
  get: (id: number) => Promise<User>;
  list: () => Promise<User[]>;
}