import React, {useRef, useState, useEffect} from 'react';
import {Button, Alert} from 'react-native';

import {Person, PersonWithoutId} from '../../models';
import type {PersonDetailScreenNavigationProps} from '../../navigators';
import type {TextInputRef} from '../../components';
import {canCreatePerson, canUpdatePerson} from '../../models';
import {useServices} from '../../contexts';
import {
  InputContainer,
  InputRow,
  Screen,
  Text,
  TextInput,
  ButtonContainer,
  ActivityIndicator,
} from '../../components';

type Props = PersonDetailScreenNavigationProps;

export enum PersonDetailScreenTitle {
  Default = 'Person Detail',
  New = 'Create Person',
}

export const PersonDetailScreen = ({navigation, route}: Props) => {
  const {personService} = useServices();

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [person, setPerson] = useState<PersonWithoutId | Person>({
    name: '',
    birthday: '',
  });

  const refs = {
    name: useRef<TextInputRef>(null),
    birthday: useRef<TextInputRef>(null),
  };

  const createPerson = async (personToCreate: PersonWithoutId) => {
    setLoading(true);
    try {
      const createdPerson = await personService.create(personToCreate);
      setPerson(createdPerson);
      navigation.setOptions({title: PersonDetailScreenTitle.Default});
      Alert.alert('Success', 'Person created successfully.');
    } catch (e) {
      Alert.alert('Error', 'Person could not be created.');
    } finally {
      setLoading(false);
    }
  };

  const updatePerson = async (personToUpdate: Person) => {
    setLoading(true);
    try {
      const updatedPerson = await personService.update(personToUpdate);
      setPerson(updatedPerson);
      Alert.alert('Success', 'Person updated successfully.');
    } catch (e) {
      Alert.alert('Error', 'Person could not be updated.');
    } finally {
      setLoading(false);
    }
  };

  const handleSavePerson = () => {
    if (canUpdatePerson(person as Person)) {
      updatePerson(person as Person);
    } else if (canCreatePerson(person)) {
      createPerson(person);
    } else {
      Alert.alert('Error', 'All fields are required.');
    }
  };

  useEffect(() => {
    (async () => {
      setLoading(true);
      try {
        if (route.params?.personId) {
          const initialPerson = await personService.get(route.params?.personId);
          setPerson(initialPerson);
        }
      } catch (e) {
        setError(e.message);
      } finally {
        setLoading(false);
      }
    })();
  }, [route.params, personService]);

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
    <Screen scroll>
      <InputContainer>
        {(person as Person).id && (
          <InputRow>
            <Text variant="label">ID</Text>
            <TextInput
              placeholder="Ex.: 1"
              defaultValue={String((person as Person).id)}
              onChangeText={(newId) =>
                setPerson((oldPerson) => ({...oldPerson, id: Number(newId)}))
              }
              returnKeyType="next"
              keyboardType="numeric"
              blurOnSubmit={false}
              onSubmitEditing={() => refs.name.current?.focus()}
              editable={false}
            />
          </InputRow>
        )}
        <InputRow>
          <Text variant="label">Name</Text>
          <TextInput
            componentRef={refs.name}
            placeholder="Ex.: Alex"
            defaultValue={person.name}
            onChangeText={(newName) =>
              setPerson((oldPerson) => ({...oldPerson, name: newName}))
            }
            returnKeyType="next"
            maxLength={255}
            autoCompleteType="name"
            blurOnSubmit={false}
            onSubmitEditing={() => refs.birthday.current?.focus()}
          />
        </InputRow>
        <InputRow last>
          <Text variant="label">Birthday</Text>
          <TextInput
            componentRef={refs.birthday}
            placeholder="Ex.: 25/08/1970"
            defaultValue={person.birthday}
            onChangeText={(newBirthday) =>
              setPerson((oldPerson) => ({...oldPerson, birthday: newBirthday}))
            }
            returnKeyType="done"
            maxLength={255}
          />
        </InputRow>
      </InputContainer>
      <ButtonContainer>
        <Button title="Save" onPress={handleSavePerson} />
      </ButtonContainer>
    </Screen>
  );
};
