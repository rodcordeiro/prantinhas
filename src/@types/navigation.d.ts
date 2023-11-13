import { RootStackParamList } from '../navigation/interface';

declare global {
  type ScreenProps<T extends keyof RootStackParamList> = NativeStackScreenProps<
    RootStackParamList,
    T
  >;
}
