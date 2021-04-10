import {NetworkSpeed} from '../../utils';
import type {Type} from '../../models';
import type {TypeService} from './TypeService';

export const createMockTypeService = (): TypeService => {
  let items: Type[] = [
    {id: 1, name: 'Admin'},
    {id: 2, name: 'Standard'},
  ];

  return {
    async list(): Promise<Type[]> {
      return new Promise((resolve) => {
        setTimeout(() => resolve(items), NetworkSpeed.Fast);
      });
    },
  };
};
