import React from 'react';
import {Button, Text, View} from 'react-native';

const LoginScreen = ({navigation}) => {
  return (
    <View>
      <Text>Login Screen</Text>
      <Button
        title="Register"
        onPress={() => navigation.navigate('Register')}
      />
      <Button title="Home" onPress={() => navigation.navigate('Home')} />
    </View>
  );
};

export default LoginScreen;
