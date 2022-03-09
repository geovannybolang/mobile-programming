import React, {useState, Component} from 'react';
import {View, Button, StyleSheet, TextInput} from 'react-native';

const App1= () => {
  const [text, onChangeText] = React.useState({
    Email: 'default',
    Username: 'default',
    Password: 'default',
  });

  return (
    <View>
      <TextInput
        style={styles.input}
        onChangeText={val =>
          onChangeText({
            Email: val !== '' ? val : 'default',
            Username: text.Username,
            Password: text.Password,
          })
        }
        placeholder="Email"
        placeholderTextColor="grey"
      />

      <TextInput
        style={styles.input}
        onChangeText={val =>
          onChangeText({
            Email: text.Email,
            Username: val !== '' ? val : 'default',
            Password: text.Password,
          })
        }
        placeholder="Username"
        placeholderTextColor="grey"
      />

      <TextInput
        style={styles.input}
        onChangeText={val =>
          onChangeText({
            Email: text.Email,
            Username: text.Username,
            Password: val !== '' ? val : 'default',
          })
        }
        placeholder="Password"
        placeholderTextColor="grey"
        secureTextEntry={true}
      />

      <Button
      title="Button"
      color="#0000FF" 
      onPress={() => console.log(text)} />
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});

export default App1;

const style = StyleSheet.create({
  tulisan: {
    fontSize: 25,
    color: 'white',
    textAlign: 'center',
  },

  kotak_tulisan: {
    backgroundColor: 'blue',
    marginTop: 50,
    paddingHorizontal: 30,
    marginHorizontal: 10,
  },
});