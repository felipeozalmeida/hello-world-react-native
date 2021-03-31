import type {IUserService} from './User/IUserService';
import type {ITypeService} from './User/ITypeService';
import type {IStatusService} from './User/IStatusService';

export type Services = {
  userService: IUserService;
  typeService: ITypeService;
  statusService: IStatusService;
};

export * from './User/IUserService';
export * from './User/IStatusService';
export * from './User/ITypeService';

export * from './User/MockUserService';
export * from './User/MockStatusService';
export * from './User/MockTypeService';
