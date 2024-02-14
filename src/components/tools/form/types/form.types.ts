import { z } from 'zod';
import { FieldValues } from 'react-hook-form';

import { ButtonIconProps, ButtonProps } from '@/components/layout/button';

import { InputProps } from '../components/input';
import { StyleProp, ViewStyle } from 'react-native';

export type Input<T> = {
  name: keyof T;
  type: InputProps['type'];
} & Omit<InputProps, 'name' | 'type'>;

export interface iFormProps<T extends FieldValues> {
  inputs: Input<T>[];
  handleSubmit: (data: T) => void | Promise<void>;
  zodSchema?: z.Schema<T>;
  submitButtonText?: string;
  SubmitButtonIcon?: any;
  actions?: ButtonProps[];
  isLoading?: boolean;
  style?: StyleProp<ViewStyle>;
}
