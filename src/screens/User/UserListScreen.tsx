import React, {useState, useEffect} from 'react';
import {useServices} from '../../contexts';
import {
  Screen,
  Text,
  FlatList,
  FlatListItem,
  ActivityIndicator,
  Pressable,
  Card,
  Spacer,
} from '../../components';

import type {User} from '../../models';
import type {ListRenderItem} from '../../components';
import type {UserListScreenNavigationProps} from '../../navigators';

type Props = UserListScreenNavigationProps;

export const UserListScreen = (props: Props) => {
  const {userService} = useServices();

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const [users, setUsers] = useState<User[]>([]);

  const goToUserDetail = (id: User['id']) => {
    if (id) {
      return props.navigation.navigate('UserDetail', {userId: id});
    }
  };

  const _renderItem: ListRenderItem<User> = (info) => (
    <FlatListItem
      key={info.item.id}
      id={info.item.id || 0}
      text={info.item.email}
      onPress={(id) => goToUserDetail(id)}
      onDelete={() => null}
    />
  );

  const _renderItemSeparatorComponent = () => <Spacer vertical={1} />;

  useEffect(() => {
    (async () => {
      setLoading(true);
      try {
        const fetchedUsers = await userService.list();
        setUsers(fetchedUsers);
      } catch (e: any) {
        setError(e.message);
      } finally {
        setLoading(false);
      }
    })();
  }, [userService]);

  if (loading) {
    return (
      <Screen>
        <ActivityIndicator />
      </Screen>
    );
  }

  if (error) {
    return (
      <Screen>
        <Text>{error}</Text>
      </Screen>
    );
  }

  return (
    <Screen>
      <FlatList
        data={users}
        renderItem={_renderItem}
        ItemSeparatorComponent={_renderItemSeparatorComponent}
      />
    </Screen>
  );
};
