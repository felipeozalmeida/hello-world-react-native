import {NetworkSpeed} from '../../utils';
import type {User} from '../../models';
import type {IUserService} from './IUserService';

export class MockUserService implements IUserService {
  private autoIncrement = 3;
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

  async create(user: User): Promise<User> {
    return new Promise((resolve) => {
      setTimeout(() => {
        user.id = this.autoIncrement;
        this.items.push(user);
        this.autoIncrement++;
        resolve(user);
      }, NetworkSpeed.Fast);
    });
  }

  async update(user: User): Promise<User> {
    return new Promise((resolve) => {
      setTimeout(() => {
        this.items = this.items.map<User>((item) => {
          if (item.id === user.id) {
            return user;
          }
          return item;
        });
        resolve(user);
      }, NetworkSpeed.Fast);
    });
  }
}
