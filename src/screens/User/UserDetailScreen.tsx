import React, {useRef, useState, useEffect} from 'react';
import {Button, Alert} from 'react-native';

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
import type {Status, Type, User} from '../../models';
import type {UserDetailScreenNavigationProps} from '../../navigators';
import type {PickerItem, TextInputRef} from '../../components';

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

export const UserDetailScreen = ({navigation, route}: Props) => {
  const {statusService, typeService, userService} = useServices();

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [statusItems, setStatusItems] = useState<PickerItem[]>([]);
  const [typeItems, setTypeItems] = useState<PickerItem[]>([]);

  const [id, setId] = useState<User['id']>();
  const [email, setEmail] = useState<User['email']>();
  const [password, setPassword] = useState<User['password']>();
  const [type, setType] = useState<User['type']>();
  const [status, setStatus] = useState<User['status']>();

  const refs = {
    email: useRef<TextInputRef>(null),
    password: useRef<TextInputRef>(null),
  };

  const createUser = async (userToCreate: User) => {
    setLoading(true);
    try {
      const createdUser = await userService.create(userToCreate);
      setId(createdUser.id);
      setEmail(createdUser.email);
      setPassword(createdUser.password);
      setType(createdUser.type);
      setStatus(createdUser.status);
      navigation.setOptions({title: 'User Detail'});
      Alert.alert('Success', 'User created successfully.');
    } catch (e) {
      Alert.alert('Error', 'User could not be created.');
    } finally {
      setLoading(false);
    }
  };

  const handleSaveUser = async (): Promise<void> => {
    if (id && email && password && type && status) {
      Alert.alert('Error', 'Not implemented.');
    } else if (email && password && type && status) {
      createUser({email, password, type, status});
    } else {
      Alert.alert('Error', 'All fields are required.');
    }
  };

  useEffect(() => {
    (async () => {
      try {
        const statuses = await statusService.list();
        const types = await typeService.list();
        setStatusItems(formatStatusItems(statuses));
        setTypeItems(formatTypeItems(types));

        if (route.params?.userId) {
          const user = await userService.get(route.params?.userId);
          setId(user.id);
          setEmail(user.email);
          setPassword(user.password);
          setType(user.type);
          setStatus(user.status);
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
        {id && (
          <InputRow>
            <Text variant="label">ID</Text>
            <TextInput
              placeholder="Ex.: 1"
              defaultValue={String(id)}
              onChangeText={(newId) => setId(Number(newId))}
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
            defaultValue={email}
            onChangeText={(newEmail) => setEmail(newEmail)}
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
            defaultValue={password}
            onChangeText={(newPassword) => setPassword(newPassword)}
            returnKeyType="next"
            maxLength={255}
            autoCompleteType="password"
            secureTextEntry
          />
        </InputRow>
        <InputRow>
          <Text variant="label">Type</Text>
          <Picker
            value={type}
            items={typeItems}
            onValueChange={(newType) => setType(newType)}
          />
        </InputRow>
        <InputRow last>
          <Text variant="label">Status</Text>
          <Picker
            value={status}
            items={statusItems}
            onValueChange={(newStatus) => setStatus(newStatus)}
          />
        </InputRow>
      </InputContainer>
      <ButtonContainer>
        <Button title="Save" onPress={handleSaveUser} />
      </ButtonContainer>
    </Screen>
  );
};
