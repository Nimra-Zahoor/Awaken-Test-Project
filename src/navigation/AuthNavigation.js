import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Signup from '../screens/Auth/Signup';

const Stack = createNativeStackNavigator();

export const AuthNavigation = () => {
  return (
    <>
      <Stack.Navigator initialRouteName={'signup'}>
        <Stack.Screen
          name="Sign up"
          component={Signup}
          options={{headerShown: false}}
        />
        {/* <Stack.Screen
          name="Login"
         // component={Login}
          options={{headerShown: false}}
        /> */}
      </Stack.Navigator>
    </>
  );
};
