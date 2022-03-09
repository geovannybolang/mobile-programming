import React from "react";
import { SafeAreaView, Button, StyleSheet, TextInput, Text, Alert } from "react-native";

const UselessTextInput = () => {
  const [text, onChangeText] = React.useState(null);
  const [number, onChangeNumber] = React.useState(null);



  return (
    <SafeAreaView>
      <TextInput
        style={styles.input}
        onChangeText={null}
        value={text}
        placeholder="Username"
        keyboardType="default"
      />
      <TextInput
        style={styles.input}
        onChangeText={null}
        value={number}
        placeholder="Email"
        keyboardType="email-address"
      />
      <TextInput
        style={styles.input}
        onChangeText={null}
        value={number}
        placeholder="Password"
        keyboardType="default"
      />
      <Button
        title="Sign Up"
        onPress={() => Alert.alert('User')}
      />
      
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  title: {
    textAlign: 'center',
    marginVertical: 8,
  },
});

export default UselessTextInput;