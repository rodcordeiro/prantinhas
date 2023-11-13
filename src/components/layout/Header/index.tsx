import { Image, Dimensions } from 'react-native';
import Plant from '../../../assets/plant_2.png';
export const Header = () => {
  const { width } = Dimensions.get('window');
  return (
    <Image
      source={Plant}
      style={{
        width,
        position: 'absolute',
      }}
    />
  );
};
