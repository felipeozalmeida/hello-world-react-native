import React, {useState} from 'react';
import {View, Button, Alert, StyleSheet} from 'react-native';
import {Picker} from '@react-native-picker/picker';

import {
  InputContainer,
  InputRow,
  Screen,
  Text,
  TextInput,
} from '../../components';

export const UserDetailScreen = () => {
  const [id, setId] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [type, setType] = useState('');
  const [status, setStatus] = useState('');
  const [selectedLanguage, setSelectedLanguage] = useState();

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
          />
        </InputRow>
        <InputRow>
          <Text variant="label">Email</Text>
          <TextInput
            placeholder="Ex.: alex@contoso.com"
            defaultValue={email}
            onChangeText={(newEmail) => setEmail(newEmail)}
            returnKeyType="next"
            maxLength={255}
            autoCompleteType="email"
            keyboardType="email-address"
          />
        </InputRow>
        <InputRow>
          <Text variant="label">Password</Text>
          <TextInput
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
            onValueChange={(itemValue) => setSelectedLanguage(itemValue)}>
            <Picker.Item label="Java" value="java" />
            <Picker.Item label="JavaScript" value="js" />
          </Picker>
        </InputRow>
        <InputRow>
          <Text variant="label">Type</Text>
          <TextInput
            placeholder="Ex.: Admin"
            defaultValue={type}
            onChangeText={(newType) => setType(newType)}
            returnKeyType="next"
            maxLength={255}
          />
        </InputRow>
        <InputRow last>
          <Text variant="label">Status</Text>
          <TextInput
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
