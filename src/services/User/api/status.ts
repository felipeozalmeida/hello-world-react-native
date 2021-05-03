import type {Status} from '../../../models';
import type {StatusService} from '../typings';
import type {Status as StatusDB} from '../../../storage';
import {database, tables} from '../../../storage';

export const createStatusService = (): StatusService => ({
  async list(): Promise<Status[]> {
    const entries = await database.get<StatusDB>(tables.status).query().fetch();
    const formattedEntries = entries.map<Status>((entry) => ({
      id: entry.id,
      name: entry.name,
    }));
    return formattedEntries;
  },
});
