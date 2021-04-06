import React from 'react';
import {Screen, Text} from '../../components';

import type {UserListScreenNavigationProps} from '../../navigators';

type Props = UserListScreenNavigationProps;

export const UserListScreen = (props: Props) => {
  return (
    <Screen>
      <Text>Hello from {props.route.name}.</Text>
    </Screen>
  );
};
