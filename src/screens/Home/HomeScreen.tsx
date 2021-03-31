import React from 'react';
import {Alert, Button} from 'react-native';

import {ButtonContainer, Screen, Text} from '../../components';
import type {HomeScreenNavigationProps} from '../../@types';

type Props = HomeScreenNavigationProps;

export const HomeScreen = ({navigation}: Props) => {
  const goToUserDetail = () => navigation.navigate('UserDetail');
  const goToUserList = () => Alert.alert('Error', 'Not implemented.');

  return (
    <Screen scroll>
      <Text variant="header">Users</Text>
      <ButtonContainer>
        <Button title="Create User" onPress={goToUserDetail} />
        <Button title="List Users" onPress={goToUserList} />
      </ButtonContainer>
    </Screen>
  );
};
