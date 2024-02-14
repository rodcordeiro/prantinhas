import { Text, View, ScrollView } from 'react-native';

import Logo from '@/assets/svg/logo.svg';
import { PLANTAS } from '@/utils/plants';

export default function Home() {
  return (
    <View>
      <Text className="text-center text-2xl font-heading mt-12">My plants</Text>
      <ScrollView className="mt-10">
        {PLANTAS.map((plant) => (
          <View className="flex-row bg-white mx-10 px-4 py-2 rounded-xl mb-8">
            <Logo className="mr-5" />
            <View>
              <Text className="text-2xl font-heading text-title">
                {plant.name}
              </Text>
              <Text className="text-md font-body text-sea-green-500">
                {plant.scientific_name ? plant.scientific_name : ' '}
              </Text>
              <View></View>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}
