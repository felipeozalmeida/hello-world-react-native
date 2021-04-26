import type {Services} from '../services';
import {
  createMockStatusService,
  createMockTypeService,
  createMockUserService,
  createStatusService,
  createTypeService,
  createUserService,
} from '../services';

export const mockServices: Services = {
  statusService: createMockStatusService(),
  typeService: createMockTypeService(),
  userService: createMockUserService(),
};

export const services: Services = {
  statusService: createStatusService(),
  typeService: createTypeService(),
  userService: createUserService(),
};
