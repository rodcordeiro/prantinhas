import { RouteProp } from '@react-navigation/native';

export type RootStackParamList = {
  PresentationScreen: {};
};

export type RootStackRouteProps<T extends keyof RootStackParamList> = RouteProp<
  RootStackParamList,
  T
>;
