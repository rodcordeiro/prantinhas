import { ScreenProps } from "@/@types/navigation";
import { Header } from "../../components/Header";
import { View, Text, Dimensions } from "react-native";
import { useTheme } from "../../hooks/theme";
import Menu from "./components/Menu";
import { PlantsList } from "./components/Plants";

const { width } = Dimensions.get("window");

export const HomeScreen = ({}: ScreenProps) => {
  const plants = [
    {
      id: 1,
      name: "Hortelã",
      scientific_name: "Mentha spicata",
      water: 250,
      period: 2,
      sunlight_exposure: "medium",
    },
    {
      id: 2,
      name: "Boldo",
      water: 350,
      period: 365,
      sunlight_exposure: "medium",
    },
  ];
  const { theme } = useTheme();
  return (
    <View
      style={{
        width,
        flex: 1,
        alignItems: "center",
      }}
    >
      <Header />
      <Text
        style={{
          color: "#f0f0f0",
          fontSize: theme?.text.sizes.h1,
          marginTop: 70,
        }}
      >
        My plants:
      </Text>
      <Menu />
      <PlantsList plants={plants} />
    </View>
  );
};
