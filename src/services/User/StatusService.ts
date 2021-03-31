import {NetworkSpeed} from '../../utils';
import type {Status} from '../../models';
import type {IStatusService} from './IStatusService';

export class StatusService implements IStatusService {
  private items: Status[] = [
    {id: 1, name: 'Active'},
    {id: 2, name: 'Deactivated'},
  ];

  async list(): Promise<Status[]> {
    return new Promise((resolve) => {
      setTimeout(() => resolve(this.items), NetworkSpeed.Fast);
    });
  }
}
