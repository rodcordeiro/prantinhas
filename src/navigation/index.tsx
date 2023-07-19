import "react-native-gesture-handler";
import React from "react";
import {
  NavigationContainer,
  NavigationContainerRef,
} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { RootStackParamList } from "./interface";

import { HomeScreen } from "../features";

const Stack = createNativeStackNavigator<RootStackParamList>();
const navigationRef =
  React.createRef<NavigationContainerRef<RootStackParamList>>();

export const Routes = () => {
  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator
        screenOptions={{
          headerTitle: "",
          headerTransparent: true,
        }}
        initialRouteName="HomeScreen"
      >
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
