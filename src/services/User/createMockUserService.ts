import {NetworkSpeed} from '../../utils';
import type {User} from '../../models';
import type {UserService} from './UserService';

export const createMockUserService = (): UserService => {
  let autoIncrement = 3;
  let items: User[] = [
    {id: 1, email: 'test@gmail.com', password: '1234', type: 1, status: 1},
    {id: 2, email: 'test@outlook.com', password: '1234', type: 2, status: 2},
  ];

  return {
    async get(id: User['id']): Promise<User> {
      return new Promise((resolve) => {
        setTimeout(
          () => resolve(items.filter((i) => i.id === id)[0]),
          NetworkSpeed.Fast,
        );
      });
    },
    async list(): Promise<User[]> {
      return new Promise((resolve) => {
        setTimeout(() => resolve(items), NetworkSpeed.Fast);
      });
    },
    async create(user: User): Promise<User> {
      return new Promise((resolve) => {
        setTimeout(() => {
          user.id = autoIncrement;
          items.push(user);
          autoIncrement++;
          resolve(user);
        }, NetworkSpeed.Fast);
      });
    },
    async update(user: User): Promise<User> {
      return new Promise((resolve) => {
        setTimeout(() => {
          items = items.map<User>((item) => {
            if (item.id === user.id) {
              return user;
            }
            return item;
          });
          resolve(user);
        }, NetworkSpeed.Fast);
      });
    },
  };
};
