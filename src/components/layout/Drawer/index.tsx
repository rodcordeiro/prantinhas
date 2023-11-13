import React from 'react';
import { View, StyleSheet, Pressable } from 'react-native';

type Props = {
  onPress: () => void;
};
export const DrawerIcon: React.FC<Props> = ({ onPress }) => {
  return (
    <Pressable onPress={onPress}>
      <View style={styles.container}>
        <View style={[styles.bar, styles.topBar]} />
        <View style={[styles.bar, styles.bottomBar]} />
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    justifyContent: 'center',
    alignItems: 'flex-start',
    gap: 5,
  },
  bar: {
    height: 2.5,
    backgroundColor: 'white',
  },
  topBar: {
    width: 30,
  },
  bottomBar: {
    width: 20,
  },
});
