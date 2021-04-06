import React from 'react';
import {Button} from 'react-native';

import {ButtonContainer, Screen, Text} from '../../components';
import type {HomeScreenNavigationProps} from '../../navigators';

type Props = HomeScreenNavigationProps;

export const HomeScreen = (props: Props) => {
  const goToCreateUser = () => props.navigation.navigate('UserDetail');
  const goToUserList = () => props.navigation.navigate('UserList');

  return (
    <Screen scroll>
      <Text variant="header">Users</Text>
      <ButtonContainer>
        <Button title="Create User" onPress={goToCreateUser} />
        <Button title="List Users" onPress={goToUserList} />
      </ButtonContainer>
    </Screen>
  );
};
