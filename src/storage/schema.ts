import {appSchema, tableSchema} from '@nozbe/watermelondb';
import {tables} from './tables';
import {columns} from './columns';

export const schema = appSchema({
  version: 1,
  tables: [
    // tableSchemas go here...
    tableSchema({
      name: tables.status,
      columns: [
        {name: columns.status.name, type: 'string'},
        {name: columns.status.createdAt, type: 'number'},
        {name: columns.status.updatedAt, type: 'number'},
      ],
    }),
    tableSchema({
      name: tables.type,
      columns: [
        {name: columns.type.name, type: 'string'},
        {name: columns.type.createdAt, type: 'number'},
        {name: columns.type.updatedAt, type: 'number'},
      ],
    }),
    tableSchema({
      name: tables.user,
      columns: [
        {name: columns.user.email, type: 'string'},
        {name: columns.user.password, type: 'string'},
        {name: columns.user.typeId, type: 'string'},
        {name: columns.user.statusId, type: 'string'},
        {name: columns.user.createdAt, type: 'number'},
        {name: columns.user.updatedAt, type: 'number'},
      ],
    }),
  ],
});
