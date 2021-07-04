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

import './storage/seed-database';
import {mockServices} from './plugins';
import {ServiceProvider} from './contexts';
import {Stack} from './navigators';
import {
  HomeScreen,
  UserDetailScreen,
  UserDetailScreenTitle,
  UserListScreen,
  PersonDetailScreen,
  PersonDetailScreenTitle,
  PersonListScreen,
} from './screens';
import type {
  UserDetailScreenNavigationProps,
  PersonDetailScreenNavigationProps,
} from './navigators';

const homeScreenOptions = {title: 'Hello World'};
const userListScreenOptions = {title: 'Users'};
const personListScreenOptions = {title: 'People'};

const getUserDetailScreenOptions = ({
  route,
}: UserDetailScreenNavigationProps): StackNavigationOptions => {
  if (route.params?.userId) {
    return {title: UserDetailScreenTitle.Default};
  }
  return {title: UserDetailScreenTitle.New};
};

const getPersonDetailScreenOptions = ({
  route,
}: PersonDetailScreenNavigationProps): StackNavigationOptions => {
  if (route.params?.personId) {
    return {title: PersonDetailScreenTitle.Default};
  }
  return {title: PersonDetailScreenTitle.New};
};

export const App = () => (
  <ServiceProvider value={mockServices}>
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
        <Stack.Screen
          name="PersonDetail"
          component={PersonDetailScreen}
          options={getPersonDetailScreenOptions}
        />
        <Stack.Screen
          name="PersonList"
          component={PersonListScreen}
          options={personListScreenOptions}
        />
      </Stack.Navigator>
    </NavigationContainer>
  </ServiceProvider>
);
