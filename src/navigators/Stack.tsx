import {createStackNavigator} from '@react-navigation/stack';
import type {StackScreenProps} from '@react-navigation/stack';

export type RootStackParamList = {
  Home: undefined;
  UserDetail: {userId: string} | undefined;
  UserList: undefined;
  PersonDetail: {personId: string} | undefined;
  PersonList: undefined;
};

export type HomeScreenNavigationProps = StackScreenProps<
  RootStackParamList,
  'Home'
>;

export type UserDetailScreenNavigationProps = StackScreenProps<
  RootStackParamList,
  'UserDetail'
>;

export type UserListScreenNavigationProps = StackScreenProps<
  RootStackParamList,
  'UserList'
>;

export type PersonDetailScreenNavigationProps = StackScreenProps<
  RootStackParamList,
  'PersonDetail'
>;

export type PersonListScreenNavigationProps = StackScreenProps<
  RootStackParamList,
  'PersonList'
>;

export const Stack = createStackNavigator<RootStackParamList>();
