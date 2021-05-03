import {NetworkSpeed} from '../../../utils';
import type {Status} from '../../../models';
import type {StatusService} from '../typings';

export const createMockStatusService = (): StatusService => {
  let items: Status[] = [
    {id: 'a', name: 'Active'},
    {id: 'b', name: 'Deactivated'},
  ];

  return {
    async list(): Promise<Status[]> {
      return new Promise((resolve) => {
        setTimeout(() => resolve(items), NetworkSpeed.Fast);
      });
    },
  };
};
