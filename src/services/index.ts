import type {StatusService, TypeService, UserService} from './User/typings';

export * from './User/typings';
export * from './User/mocks';
export * from './User/api';

export type Services = {
  userService: UserService;
  typeService: TypeService;
  statusService: StatusService;
};
