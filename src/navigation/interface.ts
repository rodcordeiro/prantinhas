import { RouteProp } from "@react-navigation/native";

export type RootStackParamList = {
  HomeScreen: {};
  PlantView: {};
  PlantCreate: {};
  Hydrate: {};
  Settings: {};
};

export type RootStackRouteProps<T extends keyof RootStackParamList> = RouteProp<
  RootStackParamList,
  T
>;
