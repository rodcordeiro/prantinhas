import { KeyboardTypeOptions } from 'react-native';

export function getKeyboardType(type: string): KeyboardTypeOptions {
  switch (type) {
    case 'email':
      return 'email-address';
    // case 'password':
    //   return 'web-search';
    case 'number':
      return 'number-pad';
    default:
      return 'default';
  }
}
