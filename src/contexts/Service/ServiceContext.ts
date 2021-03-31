import {createContext, useContext} from 'react';

import type {Services} from '../../services';

/**
 * Create a context we can use to
 * - Provide access to our services from our root component
 * - Consume services in our screens (or other components, though it's
 *   preferable to just connect screens)
 */
const ServiceContext = createContext<Services>({} as Services);

/**
 * The provider our root component will use to expose the services
 */
export const ServiceProvider = ServiceContext.Provider;

/**
 * A hook that screens can use to gain access to our services, with
 * `const { someService, someOtherService } = useServices()`,
 * or less likely: `const services = useServices()`
 */
export const useServices = () => useContext(ServiceContext);
