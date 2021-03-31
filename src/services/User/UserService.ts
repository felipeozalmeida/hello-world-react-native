import {NetworkSpeed} from '../../utils';
import type {User} from '../../models';
import type {IUserService} from './IUserService';

export class UserService implements IUserService {
  private items: User[] = [
    {id: 1, email: 'test@gmail.com', password: '1234', type: 1, status: 1},
    {id: 2, email: 'test@outlook.com', password: '1234', type: 2, status: 2},
  ];

  async get(id: number): Promise<User> {
    return new Promise((resolve) => {
      setTimeout(
        () => resolve(this.items.filter((i) => i.id === id)[0]),
        NetworkSpeed.Fast,
      );
    });
  }

  async list(): Promise<User[]> {
    return new Promise((resolve) => {
      setTimeout(() => resolve(this.items), NetworkSpeed.Fast);
    });
  }
}
