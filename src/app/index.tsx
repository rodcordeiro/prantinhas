import React from 'react';
import { View, Text, ScrollView, Dimensions } from 'react-native';
import { Link } from 'expo-router';

import PresentationImage1 from '@/assets/svg/presentation_1.svg';
import PresentationImage2 from '@/assets/svg/presentation_2.svg';
import PresentationImage3 from '@/assets/svg/presentation_3.svg';

const PRESENTATION_DATA = [
  {
    title: 'Leve suas plantas na palma da mão',
    subtitle: 'Todas as informações sobre suas plantas ao seu alcance',
    Image: PresentationImage1,
  },
  {
    title: 'Conheça mais sobre suas plantas',
    subtitle:
      'Ao cadastrar uma planta, ela é analisada por uma inteligência artificial.',
    Image: PresentationImage2,
  },
  {
    title: 'E aprenda a cuidar melhor delas!',
    subtitle:
      'Após a análise, sugestões e dicas de como cuidar serão apresentadas e enviadas esporádicamente!',
    Image: PresentationImage3,
  },
];

export default function Presentation() {
  const { width } = Dimensions.get('screen');
  return (
    <View className="flex-1 justify-between">
      <ScrollView horizontal pagingEnabled>
        {PRESENTATION_DATA.map((item) => (
          <View
            className={`mt-20 justify-start items-center w-full`}
            style={{ width }}>
            <View className="mb-24">
              <Text className="text-3xl text-title font-bold px-2 w-80">
                {item.title}
              </Text>
              <Text className="font-body text-subtitle mt-5 px-2 w-80">
                {item.subtitle}
              </Text>
            </View>
            <item.Image />
          </View>
        ))}
      </ScrollView>
      <View className="w-full h-16 flex-row bg-primary rounded-t-lg justify-center items-center">
        <View className="flex-row items-center gap-2">
          <View className="h-4 w-4 bg-white rounded-full " />
          <View className="h-2 w-2 bg-slate-200 rounded-full " />
          <View className="h-2 w-2 bg-slate-200 rounded-full " />
        </View>
        <Link href={'/Login'} className="absolute right-4">
          <Text className="text-white">Login</Text>
        </Link>
      </View>
    </View>
  );
}
