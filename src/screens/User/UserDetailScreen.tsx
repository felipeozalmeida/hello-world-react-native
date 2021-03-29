import React, {useState} from 'react';
import {View, TextInput, Button, Alert, StyleSheet} from 'react-native';
import {Picker} from '@react-native-picker/picker';

import {Screen, Text} from '../../components';

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
      <View style={styles.inputContainer}>
        <View style={styles.inputRow}>
          <Text style={styles.inputLabel}>ID</Text>
          <TextInput
            style={styles.inputField}
            placeholder="Ex.: 1"
            defaultValue={id}
            onChangeText={(newId) => setId(newId)}
            returnKeyType="next"
            keyboardType="numeric"
          />
        </View>
        <View style={styles.inputRow}>
          <Text style={styles.inputLabel}>Email</Text>
          <TextInput
            style={styles.inputField}
            placeholder="Ex.: alex@contoso.com"
            defaultValue={email}
            onChangeText={(newEmail) => setEmail(newEmail)}
            returnKeyType="next"
            maxLength={255}
            autoCompleteType="email"
            keyboardType="email-address"
          />
        </View>
        <View style={styles.inputRow}>
          <Text style={styles.inputLabel}>Password</Text>
          <TextInput
            style={styles.inputField}
            defaultValue={password}
            onChangeText={(newPassword) => setPassword(newPassword)}
            returnKeyType="next"
            maxLength={255}
            autoCompleteType="password"
            secureTextEntry
          />
        </View>
        <View style={styles.inputRow}>
          <Text style={styles.inputLabel}>Language @react-native-picker</Text>
          <Picker
            style={styles.inputField}
            selectedValue={selectedLanguage}
            onValueChange={(itemValue) => setSelectedLanguage(itemValue)}>
            <Picker.Item label="Java" value="java" />
            <Picker.Item label="JavaScript" value="js" />
          </Picker>
        </View>
        <View style={styles.inputRow}>
          <Text style={styles.inputLabel}>Type</Text>
          <TextInput
            style={styles.inputField}
            placeholder="Ex.: Admin"
            defaultValue={type}
            onChangeText={(newType) => setType(newType)}
            returnKeyType="next"
            maxLength={255}
          />
        </View>
        <View style={styles.inputRowLast}>
          <Text style={styles.inputLabel}>Status</Text>
          <TextInput
            style={styles.inputField}
            placeholder="Ex.: Active"
            defaultValue={status}
            onChangeText={(newStatus) => setStatus(newStatus)}
            returnKeyType="done"
            maxLength={255}
          />
        </View>
      </View>
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
  inputContainer: {
    marginVertical: 16,
  },
  inputRow: {
    marginBottom: 8,
  },
  inputRowLast: {
    marginBottom: 0,
  },
  inputLabel: {
    marginBottom: 8,
  },
  inputField: {
    paddingHorizontal: 8,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: '#000',
    borderRadius: 4,
  },
  buttonContainer: {
    marginVertical: 0,
  },
});
