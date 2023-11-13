import React from 'react';
import {
  NavigationContainer,
  NavigationContainerRef,
} from '@react-navigation/native';

import { PublicRoutes } from './public.routes';

const navigationRef =
  React.createRef<NavigationContainerRef<RootStackParamList>>();

export const Routes = () => {
  return (
    <NavigationContainer ref={navigationRef}>
      <PublicRoutes />
    </NavigationContainer>
  );
};
