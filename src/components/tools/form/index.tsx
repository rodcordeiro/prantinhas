import React from 'react';
import { View } from 'react-native';
import { zodResolver } from '@hookform/resolvers/zod';
import { FieldValues, FormProvider, useForm } from 'react-hook-form';

import { Button } from '@/components/layout/button';

import { mapInputs } from './utils/maps.utils';
import { iFormProps } from './types/form.types';

function Form<T extends FieldValues>({
  handleSubmit,
  inputs,
  zodSchema,
  submitButtonText,
  SubmitButtonIcon,
  isLoading,
  actions,
  style,
}: iFormProps<T>) {
  const methods = useForm<T>({
    resolver: zodSchema ? zodResolver(zodSchema) : undefined,
  });

  const { handleSubmit: handleHookFormSubmit } = methods;

  return (
    <View className="justify-center items-center mt-20 mx-5  " style={style}>
      <FormProvider {...methods}>
        {inputs.map((input, index) => mapInputs(input, index))}

        <Button
          onPress={() => {
            return handleHookFormSubmit((data) => handleSubmit(data));
          }}
          isLoading={isLoading}
          className="mt-8 w-full">
          {SubmitButtonIcon && (
            <Button.Icon>
              <SubmitButtonIcon />
            </Button.Icon>
          )}
          <Button.Text>{submitButtonText || 'Enviar'}</Button.Text>
        </Button>
        {!!actions &&
          actions.map((action, idx) => (
            <Button {...action} key={`btn_${idx}_form`} />
          ))}
      </FormProvider>
    </View>
  );
}

export { Form };
