import { FieldValues } from 'react-hook-form';

import { Input } from '../components/input';
import { Input as InputType } from '../types/form.types';

export function mapInputs<T extends FieldValues>(
  input: InputType<T>,
  index: number,
) {
  switch (input.type) {
    case 'number':
    case 'text':
    case 'email':
    case 'password':
      return <Input {...input} key={index} />;

    default:
      return null;
  }
}
