import {NetworkSpeed} from '../../../utils';
import type {Person, PersonWithoutId} from '../../../models';
import type {PersonService} from '../typings';

export const createMockPersonService = (): PersonService => {
  let autoIncrement = 3;
  let items: Person[] = [
    {
      id: '1',
      name: 'Jhon',
      birthday: '1980-06-30',
    },
    {
      id: '2',
      name: 'Maria',
      birthday: '1983-11-07',
    },
  ];

  return {
    async get(id: Person['id']): Promise<Person> {
      return new Promise((resolve) => {
        setTimeout(
          () => resolve(items.filter((i) => i.id === id)[0]),
          NetworkSpeed.Fast,
        );
      });
    },
    async list(): Promise<Person[]> {
      return new Promise((resolve) => {
        setTimeout(() => resolve(items), NetworkSpeed.Fast);
      });
    },
    async create(person: PersonWithoutId): Promise<Person> {
      return new Promise((resolve) => {
        setTimeout(() => {
          const newPerson: Person = {...person, id: String(autoIncrement)};
          items.push(newPerson);
          autoIncrement++;
          resolve(newPerson);
        }, NetworkSpeed.Fast);
      });
    },
    async update(person: Person): Promise<Person> {
      return new Promise((resolve) => {
        setTimeout(() => {
          items = items.map<Person>((item) => {
            if (item.id === person.id) {
              return person;
            }
            return item;
          });
          resolve(person);
        }, NetworkSpeed.Fast);
      });
    },
    async delete(id: Person['id']): Promise<void> {
      return new Promise((resolve) => {
        setTimeout(() => {
          items = items.filter((item) => item.id !== id);
          resolve();
        }, NetworkSpeed.Fast);
      });
    },
  };
};
