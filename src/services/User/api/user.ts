import type {User, UserWithoutId} from '../../../models';
import type {UserService} from '../typings';
import type {User as UserDB} from '../../../storage';
import {database, tables} from '../../../storage';

export const createUserService = (): UserService => ({
  async list(): Promise<User[]> {
    const entries = await database.get<UserDB>(tables.user).query().fetch();
    if (entries.length) {
      return entries.map<User>((entry) => ({
        id: entry.id,
        email: entry.email,
        password: entry.password,
        type: String(entry.type.id),
        status: String(entry.status.id),
        person: String(entry.person.id),
      }));
    }
    return [];
  },
  async get(id: User['id']): Promise<User> {
    const entry = await database.get<UserDB>(tables.user).find(String(id));
    const formattedEntry: User = {
      id: entry.id,
      email: entry.email,
      password: entry.password,
      type: String(entry.type.id),
      status: String(entry.status.id),
      person: String(entry.person.id),
    };
    return formattedEntry;
  },
  async create(user: UserWithoutId): Promise<User> {
    let entry = {} as UserDB;
    await database.action(async () => {
      entry = await database.get<UserDB>(tables.user).create((newEntry) => {
        newEntry.email = user.email;
        newEntry.password = user.password;
        newEntry.type.id = String(user.type);
        newEntry.status.id = String(user.status);
        newEntry.person.id = String(user.person);
      });
    });
    const formattedEntry: User = {
      id: entry.id,
      email: entry.email,
      password: entry.password,
      type: String(entry.type.id),
      status: String(entry.status.id),
      person: String(entry.person.id),
    };
    return formattedEntry;
  },
  async update(user: User): Promise<User> {
    let entry = {} as UserDB;
    await database.action(async () => {
      entry = await database.get<UserDB>(tables.user).find(String(user.id));
      await entry.update((updatedEntry) => {
        updatedEntry.email = user.email;
        updatedEntry.password = user.password;
        updatedEntry.type.id = String(user.type);
        updatedEntry.status.id = String(user.status);
        updatedEntry.person.id = String(user.person);
      });
    });
    const formattedEntry: User = {
      id: entry.id,
      email: entry.email,
      password: entry.password,
      type: String(entry.type.id),
      status: String(entry.status.id),
      person: String(entry.person.id),
    };
    return formattedEntry;
  },
  async delete(id: User['id']): Promise<void> {
    await database.action(async () => {
      const entry = await database.get<UserDB>(tables.user).find(String(id));
      await entry.destroyPermanently();
    });
  },
});
