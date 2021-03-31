import type {Status} from '../../models';

export interface IStatusService {
  list: () => Promise<Status[]>;
}
