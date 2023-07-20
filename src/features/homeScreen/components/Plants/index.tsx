import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  Pressable,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { useTheme } from "../../../../hooks/theme";
import Logo from "../../../../../assets/icon.png";

type Plant = {
  id: number;
  name: string;
  scientific_name?: string;
  water: number;
  period: number;
  sunlight_exposure: string;
};

type PlantsProps = {
  plants: Plant[];
};
export const PlantsList = ({ plants }: PlantsProps) => {
  const { theme } = useTheme();
  const { navigate } = useNavigation();
  return (
    <View style={styles.container}>
      <ScrollView>
        {plants.map((plant) => (
          <Pressable key={plant.id} onPress={() => console.log({ plant })}>
            <View
              style={[
                styles.cardContainer,
                {
                  backgroundColor: theme?.colors.background.secondary,
                },
              ]}
            >
              <Image source={Logo} style={styles.plant} />
              <View
                style={{
                  marginLeft: 10,
                }}
              >
                <Text
                  style={[styles.title, { color: theme?.colors.text.title }]}
                  numberOfLines={1}
                  ellipsizeMode="tail"
                  lineBreakMode="tail"
                  textBreakStrategy="balanced"
                >
                  {plant.name}
                </Text>
                <Text
                  numberOfLines={1}
                  ellipsizeMode="tail"
                  lineBreakMode="tail"
                  textBreakStrategy="balanced"
                  style={[
                    styles.scientificName,
                    { color: theme?.colors.secondary },
                  ]}
                >
                  {plant.scientific_name || "no_scientific_name"}
                </Text>
                <View
                  style={[
                    styles.details,
                    {
                      justifyContent: "space-around",
                      gap: 10,
                    },
                  ]}
                >
                  <View style={styles.details}>
                    <Feather
                      style={styles.detailIcon}
                      name="droplet"
                      size={20}
                      color={theme?.colors.secondary}
                    />
                    <Text style={{ color: theme?.colors.text.subtitle }}>
                      {plant.water}ml
                    </Text>
                  </View>
                  <View style={styles.details}>
                    <Feather
                      style={styles.detailIcon}
                      name="calendar"
                      size={20}
                      color={theme?.colors.secondary}
                    />
                    <Text style={{ color: theme?.colors.text.subtitle }}>
                      {plant.period}d
                    </Text>
                  </View>
                  <View style={styles.details}>
                    <Feather
                      style={styles.detailIcon}
                      name="sun"
                      size={20}
                      color={theme?.colors.secondary}
                    />
                    <Text style={{ color: theme?.colors.text.subtitle }}>
                      {plant.sunlight_exposure}
                    </Text>
                  </View>
                </View>
              </View>
            </View>
          </Pressable>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "80%",
    marginTop: 25,
  },
  cardContainer: {
    width: "100%",
    paddingHorizonta: 25,
    paddingVertical: 15,
    marginVertical: 10,
    flexDirection: "row",
    borderRadius: 15,
    alignItems: "center",
  },
  plant: {
    width: 50,
    height: 75,
    marginLeft: 20,
  },
  title: {
    maxWidth: "90%",
    fontSize: 24,
    fontWeight: "bold",
  },
  scientificName: {
    maxWidth: "90%",
    fontSize: 14,
  },
  details: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 5,
  },
  detailIcon: {
    paddingRight: 2,
  },
});
