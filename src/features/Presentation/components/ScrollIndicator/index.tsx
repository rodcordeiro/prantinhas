import {
  View,
  StyleSheet,
  Animated,
  Dimensions,
  StyleProp,
  ViewStyle,
} from 'react-native';

import { data } from '../../utils/details.util';

type Props = { scrollX: Animated.Value; style: StyleProp<ViewStyle> };

const { width } = Dimensions.get('window');

export const ScrollIndicator: React.FC<Props> = ({ scrollX, style }) => (
  <View style={[styles.container, style]}>
    {data.map((_, index) => {
      const inputRange = [
        (index - 1) * width,
        index * width,
        (index + 1) * width,
      ];
      const scale = scrollX.interpolate({
        inputRange,
        outputRange: [0.6, 1, 0.6],
        extrapolate: 'clamp',
      });
      const opacity = scrollX.interpolate({
        inputRange,
        outputRange: [0.65, 1, 0.65],
        extrapolate: 'clamp',
      });
      return (
        <Animated.View
          key={`dot_${index}`}
          style={[styles.dot, { opacity, transform: [{ scale }] }]}
        />
      );
    })}
  </View>
);

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    gap: 10,
  },
  dot: {
    height: 5,
    width: 5,
    borderRadius: 5,
    backgroundColor: 'white',
    borderColor: 'black',
    borderStyle: 'solid',
    shadowColor: '#000',
    elevation: 3,
    shadowOpacity: 1,
    shadowRadius: 15,
  },
});
