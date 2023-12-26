import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { useTheme } from '../hooks/theme';
import { PresentationScreen } from '../features';

import { AuthenticatedRoutes } from './Authenticated.routes';

const Stack = createNativeStackNavigator<RootStackParamList>();

export const PublicRoutes = () => {

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="PresentationScreen"
    >
      <Stack.Screen name="PresentationScreen" component={PresentationScreen} />
      <Stack.Screen
        name="AuthenticatedRoutes"
        component={AuthenticatedRoutes}
      />
    </Stack.Navigator>
  );
};
