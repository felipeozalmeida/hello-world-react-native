import type {Type} from '../../models';
import type {ITypeService} from './ITypeService';

export class TypeService implements ITypeService {
  private items: Type[] = [
    {id: 1, name: 'Admin'},
    {id: 2, name: 'Standard'},
  ];

  async list(): Promise<Type[]> {
    return new Promise((resolve) => {
      setTimeout(() => resolve(this.items), 3000);
    });
  }
}
