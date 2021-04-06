import React, {useState, useEffect} from 'react';
import {useServices} from '../../contexts';
import {
  Screen,
  Text,
  FlatList,
  ActivityIndicator,
  UserListItem,
} from '../../components';

import type {User} from '../../models';

export const UserListScreen = () => {
  const {userService} = useServices();

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const [users, setUsers] = useState<User[]>([]);

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
      <FlatList data={users} renderItem={UserListItem} />
    </Screen>
  );
};
