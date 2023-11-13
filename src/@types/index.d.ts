import { RouteProp } from '@react-navigation/native';

declare global {
  export type RootStackParamList = {
    PresentationScreen: {};
    HomeScreen: {};
  };

  export type RootStackRouteProps<T extends keyof RootStackParamList> =
    RouteProp<RootStackParamList, T>;

  type ScreenProps<T extends keyof RootStackParamList> = NativeStackScreenProps<
    RootStackParamList,
    T
  >;
}
