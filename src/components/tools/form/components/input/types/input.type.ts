import { TextInputProps } from 'react-native';

export type InputProps = {
  name: string | number | symbol;
  type?: 'text' | 'number' | 'password' | 'email';
  label?: string;
  TrailingIcon?: () => React.ReactNode;
} & TextInputProps;
