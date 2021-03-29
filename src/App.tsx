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
import {createStackNavigator} from '@react-navigation/stack';
import type {StackNavigationOptions} from '@react-navigation/stack';

import {HomeScreen, UserDetailScreen} from './screens';
import type {
  RootStackParamList,
  UserDetailScreenNavigationProps,
} from './@types';

const Stack = createStackNavigator<RootStackParamList>();

export const App = () => {
  const getUserDetailScreenOptions = ({
    route,
  }: UserDetailScreenNavigationProps): StackNavigationOptions => {
    if (route.params?.userId) {
      return {title: 'User Detail'};
    }
    return {title: 'Create User'};
  };

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{title: 'Hello World'}}
        />
        <Stack.Screen
          name="UserDetail"
          component={UserDetailScreen}
          options={getUserDetailScreenOptions}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
