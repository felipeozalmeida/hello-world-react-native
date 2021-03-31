import React from 'react';
import {Alert, Button} from 'react-native';

import {ButtonContainer, Screen, Text} from '../../components';
import type {HomeScreenNavigationProps} from '../../navigators';

type Props = HomeScreenNavigationProps;

export const HomeScreen = ({navigation}: Props) => {
  const goToCreateUser = () => navigation.navigate('UserDetail');
  const goToUserDetail = () => navigation.navigate('UserDetail', {userId: '1'});
  const goToUserList = () => Alert.alert('Error', 'Not implemented.');

  return (
    <Screen scroll>
      <Text variant="header">Users</Text>
      <ButtonContainer>
        <Button title="Create User" onPress={goToCreateUser} />
        <Button title="User Detail (experimental)" onPress={goToUserDetail} />
        <Button title="List Users" onPress={goToUserList} />
      </ButtonContainer>
    </Screen>
  );
};
