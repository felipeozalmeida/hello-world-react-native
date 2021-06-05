import type {Person, PersonWithoutId} from '../../../models';

export type PersonService = {
  list: () => Promise<Person[]>;
  get: (id: Person['id']) => Promise<Person>;
  create: (user: PersonWithoutId) => Promise<Person>;
  update: (user: Person) => Promise<Person>;
  delete: (id: Person['id']) => Promise<void>;
};
