import type {Status} from './User';
import {tables} from './tables';
import {database} from './database';

export const initDb = () => {
  console.log(database.get<Status>(tables.status));
};
