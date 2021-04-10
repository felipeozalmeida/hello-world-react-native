import type {Services} from '../services';
import {
  createMockStatusService,
  createMockTypeService,
  createMockUserService,
} from '../services';

export const services: Services = {
  statusService: createMockStatusService(),
  typeService: createMockTypeService(),
  userService: createMockUserService(),
};
