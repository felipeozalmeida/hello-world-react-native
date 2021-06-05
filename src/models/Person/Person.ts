export type PersonWithoutId = {
  name: string;
  birthday: string;
};

export type Person = PersonWithoutId & {id: string};

export const canCreatePerson = (person: PersonWithoutId): boolean => {
  return Boolean(person.name && person.birthday);
};

export const canUpdatePerson = (person: Person): boolean => {
  return Boolean(person.id && person.name && person.birthday);
};
