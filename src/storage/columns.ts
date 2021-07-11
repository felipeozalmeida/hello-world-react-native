import {columnName} from '@nozbe/watermelondb';

export const columns = {
  status: {
    name: columnName('name'),
    createdAt: columnName('created_at'),
    updatedAt: columnName('updated_at'),
  },
  type: {
    name: columnName('name'),
    createdAt: columnName('created_at'),
    updatedAt: columnName('updated_at'),
  },
  user: {
    email: columnName('email'),
    password: columnName('password'),
    typeId: columnName('type_id'),
    statusId: columnName('status_id'),
    personId: columnName('person_id'),
    createdAt: columnName('created_at'),
    updatedAt: columnName('updated_at'),
  },
  person: {
    name: columnName('name'),
    birthday: columnName('birthday'),
    createdAt: columnName('created_at'),
    updatedAt: columnName('updated_at'),
  },
};
