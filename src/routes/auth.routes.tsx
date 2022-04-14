import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { Home } from '../screens/Home';
import { SignIn } from '../screens/SignIn';
import { theme } from '../global/styles/theme';

const Stack = createStackNavigator();

export function AuthRoutes() {
  return(
    <Stack.Navigator
      screenOptions={{
        cardStyle: {
          backgroundColor: theme.colors.secondary100
        },
        headerShown: false,
    }}
    >
      <Stack.Screen name="SignIn" component={SignIn} />
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  )
}