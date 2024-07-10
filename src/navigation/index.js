import React, {useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {getActiveRouteName} from '../utils/getCurrentScreen';
import {AuthNavigation} from './AuthNavigation';

const StackNavigation = () => {
  const Stack = createNativeStackNavigator();
  const [, setCurrentRouteName] = useState('auth-flow');

  return (
    <NavigationContainer
      onStateChange={state => {
        const currentScreen = getActiveRouteName(state);
        setCurrentRouteName(currentScreen);
      }}>
      <Stack.Navigator initialRouteName={'auth-flow'}>
        <Stack.Screen
          name="auth-flow"
          component={AuthNavigation}
          options={{
            headerShown: false,
            presentation: 'modal',
            animationTypeForReplace: 'push',
            animation: 'slide_from_right',
          }}
        />
        {/* <Stack.Screen
          name="user-flow"
          component={UserNavigation}
          options={{
            headerShown: false,
            presentation: 'modal',
            animationTypeForReplace: 'push',
            animation: 'slide_from_right',
          }}
        /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNavigation;
