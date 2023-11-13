import React from 'react';
import { Animated, View, Text, Pressable } from 'react-native';
import { useTheme } from '@/hooks/theme';

import { styles } from './style';
import { Carousel } from './components/carousel';
import { ScrollIndicator } from './components/ScrollIndicator';

export const PresentationScreen: React.FC<
  ScreenProps<'PresentationScreen'>
> = ({ navigation }) => {
  const { theme } = useTheme();
  const scrollX = React.useRef(new Animated.Value(0)).current;
  return (
    <View
      style={[
        styles.container,
        { backgroundColor: theme.colors.background.primary },
      ]}
    >
      <Carousel scrollX={scrollX} />
      <View style={[styles.footer, { backgroundColor: theme.colors.primary }]}>
        <Pressable onPress={() => navigation.push('AuthenticatedRoutes')}>
          <Text style={{ color: theme.colors.background.primary }}>Pular</Text>
        </Pressable>
        <ScrollIndicator scrollX={scrollX} style={styles.indicator} />
        <Pressable onPress={() => {}}>
          <Text style={{ color: theme.colors.background.primary }}>
            {/* Próximo */}
          </Text>
        </Pressable>
      </View>
    </View>
  );
};
