import type {UserService} from './User/UserService';
import type {TypeService} from './User/TypeService';
import type {StatusService} from './User/StatusService';

export type Services = {
  userService: UserService;
  typeService: TypeService;
  statusService: StatusService;
};

export * from './User/UserService';
export * from './User/StatusService';
export * from './User/TypeService';

export * from './User/createMockUserService';
export * from './User/createMockStatusService';
export * from './User/createMockTypeService';
