import {appSchema, tableSchema} from '@nozbe/watermelondb';
import {tableName, columnName} from '@nozbe/watermelondb/Schema';
import type {Status} from './User/Status';
import type {Type} from './User/Type';
import type {User} from './User/User';

export const Tables = {
  Status: tableName<Status>('statuses'),
  Type: tableName<Type>('types'),
  User: tableName<User>('users'),
};

export const Columns = {
  Status: {
    name: columnName('name'),
    createdAt: columnName('created_at'),
    updatedAt: columnName('updated_at'),
  },
  Type: {
    name: columnName('name'),
    createdAt: columnName('created_at'),
    updatedAt: columnName('updated_at'),
  },
  User: {
    email: columnName('email'),
    password: columnName('password'),
    typeId: columnName('type_id'),
    statusId: columnName('status_id'),
    createdAt: columnName('created_at'),
    updatedAt: columnName('updated_at'),
  },
};

export const schema = appSchema({
  version: 1,
  tables: [
    // tableSchemas go here...
    tableSchema({
      name: 'statuses',
      columns: [
        {name: Columns.Status.name, type: 'string'},
        {name: Columns.Status.createdAt, type: 'number'},
        {name: Columns.Status.updatedAt, type: 'number'},
      ],
    }),
    tableSchema({
      name: 'types',
      columns: [
        {name: Columns.Type.name, type: 'string'},
        {name: Columns.Type.createdAt, type: 'number'},
        {name: Columns.Type.updatedAt, type: 'number'},
      ],
    }),
    tableSchema({
      name: 'users',
      columns: [
        {name: Columns.User.email, type: 'string'},
        {name: Columns.User.password, type: 'string'},
        {name: Columns.User.typeId, type: 'string'},
        {name: Columns.User.statusId, type: 'string'},
        {name: Columns.User.createdAt, type: 'number'},
        {name: Columns.User.updatedAt, type: 'number'},
      ],
    }),
  ],
});
