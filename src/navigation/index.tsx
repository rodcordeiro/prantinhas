import "react-native-gesture-handler";
import React from "react";
import {
  NavigationContainer,
  NavigationContainerRef,
} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { RootStackParamList } from "./interface";

import { HomeScreen, SettingsScreen } from "../features";
import { useTheme } from "../hooks/theme";

const Stack = createNativeStackNavigator<RootStackParamList>();
const navigationRef =
  React.createRef<NavigationContainerRef<RootStackParamList>>();

export const Routes = () => {
  const { theme } = useTheme();

  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator
        screenOptions={{
          headerTitle: "",
          headerTransparent: true,
          contentStyle: {
            backgroundColor: theme?.colors.background.primary,
          },
        }}
        initialRouteName="HomeScreen"
      >
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="SettingsScreen" component={SettingsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
