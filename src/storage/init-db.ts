import type {Status} from './User';
import {Tables} from './tables';
import {database} from './database';

export const initDb = () => {
  console.log(database.get<Status>(Tables.Status));
};
