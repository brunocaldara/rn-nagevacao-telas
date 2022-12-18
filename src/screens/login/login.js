import React from 'react';
import {Button, Text, View} from 'react-native';
import {CommonActions} from '@react-navigation/native';

const LoginScreen = ({navigation}) => {
  const handleHomeClick = () => {
    //navigation.navigate('Home');
    //navigation.dispatch(StackActions.replace('Home', {test: 'Test Params'}));

    navigation.dispatch(
      CommonActions.reset({
        index: 0,
        routes: [{name: 'Home'}],
      }),
    );
  };

  return (
    <View>
      <Text>Login Screen</Text>
      <Button
        title="Register"
        onPress={() => navigation.navigate('Register')}
      />
      <Button title="Home" onPress={handleHomeClick} />
    </View>
  );
};

export default LoginScreen;
