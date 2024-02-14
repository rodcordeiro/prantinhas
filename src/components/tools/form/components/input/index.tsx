import React from 'react';
import { TextInput, Text, View } from 'react-native';
import clsx from 'clsx';

import { InputProps } from './types/input.type';
import { getKeyboardType } from './utils/keyboard';

const Input = ({
  name,
  type,
  defaultValue,
  onChangeText,
  label,
  TrailingIcon,
  ...rest
}: InputProps) => {
  const [error, setError] = React.useState<string>();

  const handleChangeText = React.useCallback((newText: string) => {
    setError(undefined);

    const isNumberType = type === 'number';
    const newValue = isNumberType ? +newText : newText;

    if (isNumberType && Number.isNaN(newValue)) {
      setError('Insira um número válido');
    }

    if (onChangeText) onChangeText(String(newValue));
  }, []);

  return (
    <View className="mt-4">
      {label && <Text className="font-heading text-md">{label}</Text>}
      <View
        className={clsx(
          'mt-2 py-2 px-6 rounded-md border-2 focus:border-4 border-subtitle focus:border-sea-green-600 w-full ',
          !!error && 'border-rose-500',
        )}>
        <View className="flex-row items-center">
          <TextInput
            onChangeText={handleChangeText}
            placeholderTextColor={'gray'}
            secureTextEntry={type === 'password'}
            keyboardType={getKeyboardType(type as string) || 'default'}
            {...rest}
            className=" text-title flex-1"
          />
          {TrailingIcon && <TrailingIcon />}
        </View>
        {!!error && (
          <View>
            <Text className="text-red-400 font-light">{error || ''}</Text>
          </View>
        )}
      </View>
    </View>
  );
};

export { Input, InputProps };
