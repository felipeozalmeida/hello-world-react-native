import type {Status, Type} from './User';
import {database} from './database';
import {tables} from './tables';

type SeederFn = () => void;

type Seeds = {
  version: number;
  seeders: SeederFn[];
};

export const seeds: Seeds = {
  version: 1,
  seeders: [
    // Seeder functions go here...
    // Add default statuses and types
    () => {
      database.action(async () => {
        database.batch(
          database.get<Status>(tables.status).prepareCreate((status) => {
            status.name = 'Active';
          }),
          database.get<Status>(tables.status).prepareCreate((status) => {
            status.name = 'Deactivated';
          }),
          database.get<Type>(tables.type).prepareCreate((type) => {
            type.name = 'Admin';
          }),
          database.get<Type>(tables.type).prepareCreate((type) => {
            type.name = 'Standard';
          }),
        );
      });
    },
  ],
};
