import {
  ScrollView,
  View,
  Text,
  StyleSheet,
  Dimensions,
  Animated,
  FlatList,
} from 'react-native';

import { useTheme } from '../../../../hooks/theme';
import { Styles } from '../../../../styles/contants';
import { data } from '../../utils/details.util';

const { width, height } = Dimensions.get('window');

type Props = {
  scrollX: any;
};

export const Carousel: React.FC<Props> = ({ scrollX }) => {
  const { theme } = useTheme();
  return (
    <Animated.FlatList
      data={data}
      horizontal
      style={[
        styles.container,
        { backgroundColor: theme.colors.background.primary },
      ]}
      pagingEnabled
      automaticallyAdjustContentInsets
      centerContent
      showsHorizontalScrollIndicator={false}
      onScroll={Animated.event(
        [{ nativeEvent: { contentOffset: { x: scrollX } } }],
        { useNativeDriver: true },
      )}
      renderItem={({ index, item: { Img, subtitle, title } }) => (
        <View style={styles.card} key={`detail_${index}`}>
          <View>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.subtitle}>{subtitle}</Text>
          </View>
          <Img style={styles.img} height={width / 2} width={width} />
        </View>
      )}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'lightgreen',
  },
  card: { width, alignItems: 'center', top: height * 0.1 },
  title: {
    fontSize: Styles.text.sizes.h1,
    fontWeight: 'bold',
    width: width * 0.8,
  },
  subtitle: {
    fontSize: Styles.text.sizes.h2,
    fontWeight: Styles.text.weight.regular,
    width: width * 0.8,
    marginTop: 10,
  },
  img: {
    marginTop: height * 0.2,
  },
});
