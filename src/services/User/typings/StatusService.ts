import type {Status} from '../../../models';

export type StatusService = {
  list: () => Promise<Status[]>;
};
