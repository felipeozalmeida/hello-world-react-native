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
import type {Status, Type} from '../../models';
import type {PickerItem, TextInputRef} from '../../components';

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

export const UserDetailScreen = () => {
  const {statusService, typeService} = useServices();

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [statusItems, setStatusItems] = useState<PickerItem[]>([]);
  const [typeItems, setTypeItems] = useState<PickerItem[]>([]);

  const [id, setId] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [type, setType] = useState('');
  const [status, setStatus] = useState('');

  const refs = {
    email: useRef<TextInputRef>(null),
    password: useRef<TextInputRef>(null),
  };

  useEffect(() => {
    (async () => {
      try {
        const statuses = await statusService.list();
        const types = await typeService.list();
        setStatusItems(formatStatusItems(statuses));
        setTypeItems(formatTypeItems(types));
      } catch (e: any) {
        setError(e.message);
      } finally {
        setLoading(false);
      }
    })();
  });

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
        <InputRow>
          <Text variant="label">ID</Text>
          <TextInput
            placeholder="Ex.: 1"
            defaultValue={id}
            onChangeText={(newId) => setId(newId)}
            returnKeyType="next"
            keyboardType="numeric"
            blurOnSubmit={false}
            onSubmitEditing={() => refs.email.current?.focus()}
          />
        </InputRow>
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
        <Button
          title="Submit"
          onPress={() => Alert.alert('Success', 'Form sent successfully.')}
        />
      </ButtonContainer>
    </Screen>
  );
};
