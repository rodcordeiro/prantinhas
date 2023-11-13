import React from 'react';
import { View, Text } from 'react-native';

import { Header } from '@/components/layout/Header';

const HomeScreen: ScreenProps<'HomeScreen'> = () => {
  return (
    <View style={{ flex: 1 }}>
      <Header />
      <Text>Home</Text>
    </View>
  );
};

export default React.memo(HomeScreen);
