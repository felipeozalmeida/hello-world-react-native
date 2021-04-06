import React from 'react';
import {Screen, Text, FlatList} from '../../components';

import type {User} from '../../models';
import type {ListRenderItem} from '../../components';

const renderItem: ListRenderItem<User> = (info) => (
  <Text key={info.item.id}>{info.item.email}</Text>
);

export const UserListScreen = () => {
  return (
    <Screen>
      <FlatList
        data={[
          {
            id: 1,
            email: 'test@gmail.com',
            password: '1234',
            type: 1,
            status: 1,
          },
          {
            id: 2,
            email: 'test@outlook.com',
            password: '1234',
            type: 2,
            status: 2,
          },
        ]}
        renderItem={renderItem}
      />
    </Screen>
  );
};
