import type {Type} from '../../models';

export interface ITypeService {
  list: () => Promise<Type[]>;
}
