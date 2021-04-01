import type {Services} from '../services';
import {MockStatusService, MockTypeService, MockUserService} from '../services';

export const services: Services = {
  statusService: new MockStatusService(),
  typeService: new MockTypeService(),
  userService: new MockUserService(),
};
