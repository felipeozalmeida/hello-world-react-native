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
} from '../../components';
import type {TextInputRef} from '../../components';

export const UserDetailScreen = () => {
  const {typeService} = useServices();

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
      const types = await typeService.list();
      console.log(types);
    })();
  });

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
      <ButtonContainer>
        <Button
          title="Submit"
          onPress={() => Alert.alert('Success', 'Form sent successfully.')}
        />
      </ButtonContainer>
    </Screen>
  );
};
