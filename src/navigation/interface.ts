import { RouteProp } from "@react-navigation/native";

export type RootStackParamList = {
  PresentationScreen: {};
  HomeScreen: {};
  PlantView: {};
  PlantCreate: {};
  Hydrate: {};
  SettingsScreen: {};
};

export type RootStackRouteProps<T extends keyof RootStackParamList> = RouteProp<
  RootStackParamList,
  T
>;
