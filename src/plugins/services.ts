import type {Services} from '../services';
import {
  createMockStatusService,
  createMockTypeService,
  createMockUserService,
  createMockPersonService,
  createStatusService,
  createTypeService,
  createUserService,
  createPersonService,
} from '../services';

export const mockServices: Services = {
  statusService: createMockStatusService(),
  typeService: createMockTypeService(),
  userService: createMockUserService(),
  personService: createMockPersonService(),
};

export const services: Services = {
  statusService: createStatusService(),
  typeService: createTypeService(),
  userService: createUserService(),
  personService: createPersonService(),
};
