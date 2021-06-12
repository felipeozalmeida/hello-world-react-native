import React from 'react';
import {Button} from 'react-native';

import {ButtonContainer, Screen, Text} from '../../components';
import type {HomeScreenNavigationProps} from '../../navigators';

type Props = HomeScreenNavigationProps;

export const HomeScreen = (props: Props) => {
  const goToCreateUser = () => props.navigation.navigate('UserDetail');
  const goToUserList = () => props.navigation.navigate('UserList');

  const goToCreatePerson = () => props.navigation.navigate('PersonDetail');
  const goToPersonList = () => props.navigation.navigate('PersonList');

  return (
    <Screen scroll>
      <Text variant="header">Users</Text>
      <ButtonContainer>
        <Button title="Create User" onPress={goToCreateUser} />
        <Button title="List Users" onPress={goToUserList} />
      </ButtonContainer>
      <Text variant="header">People</Text>
      <ButtonContainer>
        <Button title="Create Person" onPress={goToCreatePerson} />
        <Button title="List People" onPress={goToPersonList} />
      </ButtonContainer>
    </Screen>
  );
};
