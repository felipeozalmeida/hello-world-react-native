import React, {useState, useEffect} from 'react';
import {Alert} from 'react-native';
import {useServices} from '../../contexts';
import {
  Screen,
  Text,
  FlatList,
  FlatListItem,
  ActivityIndicator,
  Spacer,
} from '../../components';

import type {Person} from '../../models';
import type {ListRenderItem} from '../../components';
import type {PersonListScreenNavigationProps} from '../../navigators';

type Props = PersonListScreenNavigationProps;

export const PersonListScreen = (props: Props) => {
  const {personService} = useServices();

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const [people, setPeople] = useState<Person[]>([]);

  const goToPersonDetail = (id: Person['id']) =>
    props.navigation.navigate('PersonDetail', {personId: id});

  const deletePerson = (id: Person['id']) => {
    (async () => {
      setLoading(true);
      try {
        await personService.delete(id);
        const fetchedPeople = await personService.list();
        setPeople(fetchedPeople);
        Alert.alert('Success', 'Person deleted successfully.');
      } catch (e) {
        Alert.alert('Error', 'Person could not be deleted.');
      } finally {
        setLoading(false);
      }
    })();
  };

  const _renderItem: ListRenderItem<Person> = (info) => (
    <FlatListItem
      key={info.item.id}
      id={info.item.id}
      text={info.item.name}
      onPress={goToPersonDetail}
      onDelete={deletePerson}
    />
  );

  const _renderItemSeparatorComponent = () => <Spacer vertical={1} />;

  useEffect(() => {
    (async () => {
      setLoading(true);
      try {
        const fetchedPeople = await personService.list();
        setPeople(fetchedPeople);
      } catch (e) {
        setError(e.message);
      } finally {
        setLoading(false);
      }
    })();
  }, [personService]);

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

  if (!people.length) {
    return (
      <Screen>
        <Text>Wow, such empty. Try to create a person and return here!</Text>
      </Screen>
    );
  }

  return (
    <Screen>
      <FlatList
        data={people}
        renderItem={_renderItem}
        ItemSeparatorComponent={_renderItemSeparatorComponent}
      />
    </Screen>
  );
};
