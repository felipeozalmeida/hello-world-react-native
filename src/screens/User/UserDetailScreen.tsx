import React, {useRef, useState} from 'react';
import {View, Button, Alert, StyleSheet} from 'react-native';
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
  const [selectedLanguage, setSelectedLanguage] = useState(0);

  const refs = {
    email: useRef<RNTextInput>(null),
    password: useRef<RNTextInput>(null),
    type: useRef<RNTextInput>(null),
    status: useRef<RNTextInput>(null),
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
          <Text variant="label">Language @react-native-picker</Text>
          <Picker
            selectedValue={selectedLanguage}
            onValueChange={(itemValue) =>
              setSelectedLanguage(Number(itemValue))
            }>
            <Picker.Item label="Select an option" value={0} />
            <Picker.Item label="Java" value={1} />
            <Picker.Item label="JavaScript" value={2} />
          </Picker>
        </InputRow>
        <InputRow>
          <Text variant="label">Type</Text>
          <TextInput
            componentRef={refs.type}
            placeholder="Ex.: Admin"
            defaultValue={type}
            onChangeText={(newType) => setType(newType)}
            returnKeyType="next"
            maxLength={255}
            blurOnSubmit={false}
            onSubmitEditing={() => refs.status.current?.focus()}
          />
        </InputRow>
        <InputRow last>
          <Text variant="label">Status</Text>
          <TextInput
            componentRef={refs.status}
            placeholder="Ex.: Active"
            defaultValue={status}
            onChangeText={(newStatus) => setStatus(newStatus)}
            returnKeyType="done"
            maxLength={255}
          />
        </InputRow>
      </InputContainer>
      <View style={styles.buttonContainer}>
        <Button
          title="Submit"
          onPress={() => Alert.alert('Success', 'Form sent successfully.')}
        />
      </View>
    </Screen>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    marginVertical: 0,
  },
});
