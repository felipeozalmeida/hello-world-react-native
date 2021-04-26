import type {Type} from '../../models';

export type TypeService = {
  list: () => Promise<Type[]>;
};
