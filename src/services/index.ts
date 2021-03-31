import type {ITypeService} from './User/ITypeService';
import type {IStatusService} from './User/IStatusService';

export type Services = {
  typeService: ITypeService;
  statusService: IStatusService;
};

export * from './User/IStatusService';
export * from './User/ITypeService';

export * from './User/StatusService';
export * from './User/TypeService';
