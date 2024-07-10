import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Signup from '../screens/Auth/Signup';
import Login from '../screens/Auth/Login';

const Stack = createNativeStackNavigator();

export const AuthNavigation = () => {
  return (
    <>
      <Stack.Navigator initialRouteName={'signup'}>
        <Stack.Screen
          name="signup"
          component={Signup}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="login"
          component={Login}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </>
  );
};
