import React from 'react';
import {Button, Text, View} from 'react-native';
import type {HomeScreenNavigationProps} from '../../@types';

type Props = HomeScreenNavigationProps;

export const HomeScreen = ({navigation}: Props) => {
  const goToUserDetail = () => navigation.navigate('UserDetail');

  return (
    <View>
      <Text>HomeScreen</Text>
      <Button title="Create User" onPress={goToUserDetail} />
    </View>
  );
};
