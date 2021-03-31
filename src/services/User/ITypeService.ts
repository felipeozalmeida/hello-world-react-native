import type {Type} from '../../models';

export interface ITypeService {
  items: Type[];
  list: () => Promise<Type[]>;
}
