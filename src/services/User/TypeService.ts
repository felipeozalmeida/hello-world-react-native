import type {Type} from '../../models';
import type {ITypeService} from './ITypeService';

export class TypeService implements ITypeService {
  items: Type[] = [
    {id: 1, name: 'Admin'},
    {id: 2, name: 'Standard'},
  ];

  async list(): Promise<Type[]> {
    return this.items;
  }
}
