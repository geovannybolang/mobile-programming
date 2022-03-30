import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import { Button, Gap, Header, TextInput } from '../../components';

const SignIn = ({navigation}) => {
  return (
    <View style={styles.page}>
      <Header title="Sign In"/>
        <View style={styles.contentWrapper}>
          <TextInput title="Email Address" placeholder="Type your email address" />
          <Gap height={16} />
          <TextInput title="Password" placeholder="Type your email password" />
          <Gap height={20} />
          <Button title="Sign In" />
          <Gap height={16} />
          <Button 
            title="Create new account"
            color="#8D92A3"
            textColor="white"
            onPress={() => navigation.navigate('SignUp')}
          />
        </View>
    </View>
  );
};

export default SignIn;

const styles = StyleSheet.create({
  page: {
    flex: 1,
  },
  contentWrapper: {
    flex: 1,
    marginTop: 24,
    backgroundColor: 'white',
    paddingHorizontal: 24,
    paddingTop: 26,
  }
});
