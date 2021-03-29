import React from 'react';
import {Button, Text} from 'react-native';

import {Screen} from '../../components';
import type {HomeScreenNavigationProps} from '../../@types';

type Props = HomeScreenNavigationProps;

export const HomeScreen = ({navigation}: Props) => {
  const goToUserDetail = () => navigation.navigate('UserDetail');

  return (
    <Screen scroll>
      <Text>HomeScreen</Text>
      <Button title="Create User" onPress={goToUserDetail} />
    </Screen>
  );
};
