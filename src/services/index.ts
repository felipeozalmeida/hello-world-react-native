import type {StatusService, TypeService, UserService} from './User/typings';
import type {PersonService} from './Person/typings';

export * from './User/typings';
export * from './User/mocks';
export * from './User/api';

export * from './Person/typings';
export * from './Person/mocks';
export * from './Person/api';

export type Services = {
  userService: UserService;
  typeService: TypeService;
  statusService: StatusService;
  personService: PersonService;
};
