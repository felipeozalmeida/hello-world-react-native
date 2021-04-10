import {NetworkSpeed} from '../../utils';
import type {User, UserWithoutId} from '../../models';
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
    async create(user: UserWithoutId): Promise<User> {
      return new Promise((resolve) => {
        setTimeout(() => {
          const newUser: User = {...user, id: autoIncrement};
          items.push(newUser);
          autoIncrement++;
          resolve(newUser);
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
    async delete(id: User['id']): Promise<void> {
      return new Promise((resolve) => {
        setTimeout(() => {
          items = items.filter((item) => item.id !== id);
          resolve();
        }, NetworkSpeed.Fast);
      });
    },
  };
};
