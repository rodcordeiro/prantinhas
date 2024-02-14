import React from 'react';
import { Text, Image, View, Pressable } from 'react-native';
import { Feather } from '@expo/vector-icons';

import Logo from '@/assets/svg/logo.svg';
import Google from '@/assets/images/google.png';

import { Button } from '@/components/layout';
import { Input } from '@/components/tools/form/components/input';
import { router } from 'expo-router';

export default function Login() {
  const [visiblePwd, setVisiblePwd] = React.useState<boolean>(false);
  const [email, setEmail] = React.useState<string>();
  const [password, setPassword] = React.useState<string>();

  function handleLogin() {
    router.navigate({
      pathname: '/Home',
    });
  }

  return (
    <View className="flex-1 items-center">
      <Logo className="mt-20" />
      <View className="w-full px-8 mt-10">
        <Input
          name="email"
          label="Email:"
          placeholder="Insira seu email"
          type="email"
          onChangeText={setEmail}
        />
        <Input
          name="password"
          placeholder="Insira sua senha"
          type={visiblePwd ? 'text' : 'password'}
          onChangeText={setPassword}
          TrailingIcon={() => (
            <Pressable onPress={() => setVisiblePwd(!visiblePwd)}>
              <Feather
                name={visiblePwd ? 'eye' : 'eye-off'}
                size={16}
                className="text-primary"
              />
            </Pressable>
          )}
        />
        <View className="flex-row gap-2 mt-1 left-16">
          <Text className="font-light">Ainda não tem uma conta?</Text>
          <Text className="text-primary font-light">Cadastre-se!</Text>
        </View>
        <Button className="mt-6" onPress={() => handleLogin()}>
          {/* <Button.Icon>
            <Feather name="external-link" size={16} color={colors.white} />
          </Button.Icon> */}
          <Button.Text>Login</Button.Text>
        </Button>

        <View className="mt-8">
          <Text className="font-light text-center">
            Ou acesse com uma conta social!
          </Text>
          <Button
            className="mt-4"
            onPress={() => console.log({ email, password })}>
            <Button.Icon>
              <Image source={Google} width={14} height={14} />
            </Button.Icon>
            <Button.Text>Acessar com Google</Button.Text>
          </Button>
        </View>
      </View>
    </View>
  );
}
