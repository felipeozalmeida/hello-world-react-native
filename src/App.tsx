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

import {initDb} from './storage';
import {services} from './plugins';
import {ServiceProvider} from './contexts';
import {Stack} from './navigators';
import {
  HomeScreen,
  UserDetailScreen,
  UserDetailScreenTitle,
  UserListScreen,
} from './screens';
import type {UserDetailScreenNavigationProps} from './navigators';

initDb();

const homeScreenOptions = {title: 'Hello World'};
const userListScreenOptions = {title: 'Users'};

const getUserDetailScreenOptions = ({
  route,
}: UserDetailScreenNavigationProps): StackNavigationOptions => {
  if (route.params?.userId) {
    return {title: UserDetailScreenTitle.Default};
  }
  return {title: UserDetailScreenTitle.New};
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
        <Stack.Screen
          name="UserList"
          component={UserListScreen}
          options={userListScreenOptions}
        />
      </Stack.Navigator>
    </NavigationContainer>
  </ServiceProvider>
);
