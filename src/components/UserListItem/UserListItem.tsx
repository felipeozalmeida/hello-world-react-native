import React from 'react';
import {Text} from '..';

import type {User} from '../../models';
import type {ListRenderItem} from '..';

export const UserListItem: ListRenderItem<User> = (info) => (
  <Text key={info.item.id}>{info.item.email}</Text>
);
