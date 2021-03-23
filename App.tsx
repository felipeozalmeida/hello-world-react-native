/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, {useState} from 'react';
import {Text, ScrollView, View, TextInput, Button, Alert} from 'react-native';

import styles from './App.styles';

const App = () => {
  const [id, setId] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [type, setType] = useState('');
  const [status, setStatus] = useState('');

  return (
    <ScrollView style={styles.body}>
      <Text style={styles.title}>Hello World</Text>
      <View style={styles.inputContainer}>
        <Text style={styles.inputLabel}>ID</Text>
        <TextInput
          style={styles.inputField}
          placeholder="Ex.: 1"
          defaultValue={id}
          onChangeText={(newId) => setId(newId)}
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.inputLabel}>Email</Text>
        <TextInput
          style={styles.inputField}
          placeholder="Ex.: alex@contoso.com"
          defaultValue={email}
          onChangeText={(newEmail) => setEmail(newEmail)}
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.inputLabel}>Password</Text>
        <TextInput
          style={styles.inputField}
          defaultValue={password}
          onChangeText={(newPassword) => setPassword(newPassword)}
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.inputLabel}>Type</Text>
        <TextInput
          style={styles.inputField}
          placeholder="Ex.: Admin"
          defaultValue={type}
          onChangeText={(newType) => setType(newType)}
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.inputLabel}>Status</Text>
        <TextInput
          style={styles.inputField}
          placeholder="Ex.: Active"
          defaultValue={status}
          onChangeText={(newStatus) => setStatus(newStatus)}
        />
      </View>
      <View style={styles.buttonContainer}>
        <Button
          title="Submit"
          onPress={() => Alert.alert('Success', 'Form sent successfully.')}
        />
      </View>
    </ScrollView>
  );
};

export default App;
