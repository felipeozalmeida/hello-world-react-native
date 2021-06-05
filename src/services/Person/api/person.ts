import type {Person, PersonWithoutId} from '../../../models';
import type {PersonService} from '../typings';
import type {Person as PersonDB} from '../../../storage';
import {database, tables} from '../../../storage';

export const createPersonService = (): PersonService => ({
  async list(): Promise<Person[]> {
    const entries = await database.get<PersonDB>(tables.person).query().fetch();
    if (entries.length) {
      return entries.map<Person>((entry) => ({
        id: entry.id,
        name: entry.name,
        birthday: entry.birthday,
      }));
    }
    return [];
  },
  async get(id: Person['id']): Promise<Person> {
    const entry = await database.get<PersonDB>(tables.person).find(String(id));
    const formattedEntry: Person = {
      id: entry.id,
      name: entry.name,
      birthday: entry.birthday,
    };
    return formattedEntry;
  },
  async create(person: PersonWithoutId): Promise<Person> {
    let entry = {} as PersonDB;
    await database.action(async () => {
      entry = await database.get<PersonDB>(tables.person).create((newEntry) => {
        newEntry.name = person.name;
        newEntry.birthday = person.birthday;
      });
    });
    const formattedEntry: Person = {
      id: entry.id,
      name: entry.name,
      birthday: entry.birthday,
    };
    return formattedEntry;
  },
  async update(person: Person): Promise<Person> {
    let entry = {} as PersonDB;
    await database.action(async () => {
      entry = await database
        .get<PersonDB>(tables.person)
        .find(String(person.id));
      await entry.update((updatedEntry) => {
        updatedEntry.name = person.name;
        updatedEntry.birthday = person.birthday;
      });
    });
    const formattedEntry: Person = {
      id: entry.id,
      name: entry.name,
      birthday: entry.birthday,
    };
    return formattedEntry;
  },
  async delete(id: Person['id']): Promise<void> {
    await database.action(async () => {
      const entry = await database
        .get<PersonDB>(tables.person)
        .find(String(id));
      await entry.destroyPermanently();
    });
  },
});
