import type {Type} from '../../../models';
import type {TypeService} from '../typings';
import type {Type as TypeDB} from '../../../storage';
import {database, tables} from '../../../storage';

export const createTypeService = (): TypeService => ({
  async list(): Promise<Type[]> {
    const entries = await database.get<TypeDB>(tables.type).query().fetch();
    const formattedEntries = entries.map<Type>((entry) => ({
      id: entry.id,
      name: entry.name,
    }));
    return formattedEntries;
  },
});
