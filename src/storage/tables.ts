import type {Status, Type, User} from './User';
import {tableName} from '@nozbe/watermelondb';

export const tables = {
  status: tableName<Status>('statuses'),
  type: tableName<Type>('types'),
  user: tableName<User>('users'),
};
