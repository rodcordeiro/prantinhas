import React from 'react';
import { GluestackUIProvider, Text, Box, Center } from '@gluestack-ui/themed';
import { StatusBar } from 'expo-status-bar';

import { config } from './styles/config.style';

export default function Application() {
  return (
    <GluestackUIProvider config={config}>
      <Center bg="$primary100" h={200} w={300}>
        <Text color="white" fontWeight="$bold">
          This is the center.
        </Text>
      </Center>
      <StatusBar style="auto" />
    </GluestackUIProvider>
  );
}
