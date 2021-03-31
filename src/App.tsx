/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */
import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import type {StackNavigationOptions} from '@react-navigation/stack';

import {StatusService, TypeService, UserService} from './services';
import {ServiceProvider} from './contexts';
import {Stack} from './navigators';
import {HomeScreen, UserDetailScreen} from './screens';
import type {Services} from './services';
import type {UserDetailScreenNavigationProps} from './navigators';

const services: Services = {
  statusService: new StatusService(),
  typeService: new TypeService(),
  userService: new UserService(),
};

const homeScreenOptions = {title: 'Hello World'};

const getUserDetailScreenOptions = ({
  route,
}: UserDetailScreenNavigationProps): StackNavigationOptions => {
  if (route.params?.userId) {
    return {title: 'User Detail'};
  }
  return {title: 'Create User'};
};

export const App = () => (
  <ServiceProvider value={services}>
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={homeScreenOptions}
        />
        <Stack.Screen
          name="UserDetail"
          component={UserDetailScreen}
          options={getUserDetailScreenOptions}
        />
      </Stack.Navigator>
    </NavigationContainer>
  </ServiceProvider>
);
