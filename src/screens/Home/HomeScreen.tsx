import React from 'react';
import {Alert, Button, View} from 'react-native';
import type {ViewStyle} from 'react-native';

import {Screen, Text} from '../../components';
import type {HomeScreenNavigationProps} from '../../@types';

type Props = HomeScreenNavigationProps;

const buttonContainer: ViewStyle = {marginVertical: 16};
const buttonRow: ViewStyle = {marginBottom: 8};
const buttonRowLast: ViewStyle = {marginBottom: 0};

export const HomeScreen = ({navigation}: Props) => {
  const goToUserDetail = () => navigation.navigate('UserDetail');
  const goToUserList = () => Alert.alert('Error', 'Not implemented.');

  return (
    <Screen scroll>
      <Text variant="header">Users</Text>
      <View style={buttonContainer}>
        <View style={buttonRow}>
          <Button title="Create User" onPress={goToUserDetail} />
        </View>
        <View style={buttonRowLast}>
          <Button title="List Users" onPress={goToUserList} />
        </View>
      </View>
    </Screen>
  );
};
