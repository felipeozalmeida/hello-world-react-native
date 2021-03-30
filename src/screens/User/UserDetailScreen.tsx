import React, {useRef, useState} from 'react';
import {Button, Alert} from 'react-native';
import type {TextInput as RNTextInput} from 'react-native';

import {
  InputContainer,
  InputRow,
  Screen,
  Text,
  TextInput,
  Picker,
} from '../../components';

export const UserDetailScreen = () => {
  const [id, setId] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [type, setType] = useState('');
  const [status, setStatus] = useState('');

  const refs = {
    email: useRef<RNTextInput>(null),
    password: useRef<RNTextInput>(null),
  };

  return (
    <Screen scroll>
      <Text variant="header">Hello World</Text>
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
            items={[
              {label: 'Admin', value: 1},
              {label: 'Standard', value: 2},
            ]}
            onValueChange={(newType) => setType(newType)}
          />
        </InputRow>
        <InputRow last>
          <Text variant="label">Status</Text>
          <Picker
            value={status}
            items={[
              {label: 'Active', value: 1},
              {label: 'Deactivated', value: 2},
            ]}
            onValueChange={(newStatus) => setStatus(newStatus)}
          />
        </InputRow>
      </InputContainer>
      <Button
        title="Submit"
        onPress={() => Alert.alert('Success', 'Form sent successfully.')}
      />
    </Screen>
  );
};
