import type {StackScreenProps} from '@react-navigation/stack';

export type RootStackParamList = {
  Home: undefined;
  UserDetail: {userId: string} | undefined;
};

export type HomeScreenNavigationProps = StackScreenProps<
  RootStackParamList,
  'Home'
>;

export type UserDetailScreenNavigationProps = StackScreenProps<
  RootStackParamList,
  'UserDetail'
>;
