import React from 'react';
import { View, Text, Pressable } from 'react-native';

const data = [
  {
    title: 'Leve suas plantas na palma da mão',
    subtitle: 'Todas as informações sobre suas plantas ao seu alcance',
    // Img: Presentation1,
  },
  {
    title: 'Conheça mais sobre suas plantas',
    subtitle:
      'Ao cadastrar uma planta, ela é analisada por uma inteligência artificial.',
    // Img: Presentation2,
  },
  {
    title: 'E aprenda a cuidar melhor delas!',
    subtitle:
      'Após a análise, sugestões e dicas de como cuidar serão apresentadas e enviadas esporádicamente!',
    // Img: Presentation3,
  },
];

export const PresentationScreen: ScreenProps<'PresentationScreen'> = ({
  navigation,
}) => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Presentation</Text>
      <Pressable onPress={() => navigation.push('HomeScreen')}>
      <Text>Navegar</Text>
      </Pressable>
    </View>
  );
};
