import { RootStackParamList } from "../navigation/interface";

export type ScreenProps<T extends object = {}> = {
  navigation: {
    push<K extends keyof RootStackParamList>(
      screen: K,
      payload?: RootStackParamList[K]
    ): void;
    replace<K extends keyof RootStackParamList>(
      screen: K,
      payload?: RootStackParamList[K]
    ): void;
    pop(): void;
    popToTop(): void;
  };
} & T;
