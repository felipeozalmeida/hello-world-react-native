import React, {useRef, useState, useEffect} from 'react';
import {Button, Alert} from 'react-native';

import {Status, Type, User, UserWithoutId} from '../../models';
import type {UserDetailScreenNavigationProps} from '../../navigators';
import type {PickerItem, TextInputRef} from '../../components';
import {canCreateUser, canUpdateUser} from '../../models';
import {useServices} from '../../contexts';
import {
  InputContainer,
  InputRow,
  Screen,
  Text,
  TextInput,
  Picker,
  ButtonContainer,
  ActivityIndicator,
} from '../../components';

type Props = UserDetailScreenNavigationProps;

const formatStatusItems = (statuses: Status[]): PickerItem[] =>
  statuses.map<PickerItem>((t) => ({
    label: t.name,
    value: t.id,
  }));

const formatTypeItems = (types: Type[]): PickerItem[] =>
  types.map<PickerItem>((t) => ({
    label: t.name,
    value: t.id,
  }));

export enum UserDetailScreenTitle {
  Default = 'User Detail',
  New = 'Create User',
}

export const UserDetailScreen = ({navigation, route}: Props) => {
  const {statusService, typeService, userService} = useServices();

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [statusItems, setStatusItems] = useState<PickerItem[]>([]);
  const [typeItems, setTypeItems] = useState<PickerItem[]>([]);
  const [user, setUser] = useState<UserWithoutId | User>({
    email: '',
    password: '',
    status: '',
    type: '',
  });

  const refs = {
    email: useRef<TextInputRef>(null),
    password: useRef<TextInputRef>(null),
  };

  const createUser = async (userToCreate: UserWithoutId) => {
    setLoading(true);
    try {
      const createdUser = await userService.create(userToCreate);
      setUser(createdUser);
      navigation.setOptions({title: UserDetailScreenTitle.Default});
      Alert.alert('Success', 'User created successfully.');
    } catch (e) {
      Alert.alert('Error', 'User could not be created.');
    } finally {
      setLoading(false);
    }
  };

  const updateUser = async (userToUpdate: User) => {
    setLoading(true);
    try {
      const updatedUser = await userService.update(userToUpdate);
      setUser(updatedUser);
      Alert.alert('Success', 'User updated successfully.');
    } catch (e) {
      Alert.alert('Error', 'User could not be updated.');
    } finally {
      setLoading(false);
    }
  };

  const handleSaveUser = () => {
    if (canUpdateUser(user as User)) {
      updateUser(user as User);
    } else if (canCreateUser(user)) {
      createUser(user);
    } else {
      Alert.alert('Error', 'All fields are required.');
    }
  };

  useEffect(() => {
    (async () => {
      setLoading(true);
      try {
        const statuses = await statusService.list();
        const types = await typeService.list();
        setStatusItems(formatStatusItems(statuses));
        setTypeItems(formatTypeItems(types));

        if (route.params?.userId) {
          const initialUser = await userService.get(route.params?.userId);
          setUser(initialUser);
        }
      } catch (e: any) {
        setError(e.message);
      } finally {
        setLoading(false);
      }
    })();
  }, [route.params, statusService, typeService, userService]);

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
        {(user as User).id && (
          <InputRow>
            <Text variant="label">ID</Text>
            <TextInput
              placeholder="Ex.: 1"
              defaultValue={String((user as User).id)}
              onChangeText={(newId) =>
                setUser((oldUser) => ({...oldUser, id: Number(newId)}))
              }
              returnKeyType="next"
              keyboardType="numeric"
              blurOnSubmit={false}
              onSubmitEditing={() => refs.email.current?.focus()}
              editable={false}
            />
          </InputRow>
        )}
        <InputRow>
          <Text variant="label">Email</Text>
          <TextInput
            componentRef={refs.email}
            placeholder="Ex.: alex@contoso.com"
            defaultValue={user.email}
            onChangeText={(newEmail) =>
              setUser((oldUser) => ({...oldUser, email: newEmail}))
            }
            returnKeyType="next"
            maxLength={255}
            autoCompleteType="email"
            keyboardType="email-address"
            blurOnSubmit={false}
            onSubmitEditing={() => refs.password.current?.focus()}
          />
        </InputRow>
        <InputRow>
          <Text variant="label">Password</Text>
          <TextInput
            componentRef={refs.password}
            defaultValue={user.password}
            onChangeText={(newPassword) =>
              setUser((oldUser) => ({...oldUser, password: newPassword}))
            }
            returnKeyType="done"
            maxLength={255}
            autoCompleteType="password"
            secureTextEntry
          />
        </InputRow>
        <InputRow>
          <Text variant="label">Type</Text>
          <Picker
            value={user.type}
            items={typeItems}
            onValueChange={(newType) =>
              setUser((oldUser) => ({...oldUser, type: newType}))
            }
          />
        </InputRow>
        <InputRow last>
          <Text variant="label">Status</Text>
          <Picker
            value={user.status}
            items={statusItems}
            onValueChange={(newStatus) =>
              setUser((oldUser) => ({...oldUser, status: newStatus}))
            }
          />
        </InputRow>
      </InputContainer>
      <ButtonContainer>
        <Button title="Save" onPress={handleSaveUser} />
      </ButtonContainer>
    </Screen>
  );
};
