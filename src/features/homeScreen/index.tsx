import { ScreenProps } from "@/@types/navigation";
import { Header } from "../../components/Header";
import { View, Text, Dimensions } from "react-native";
import { useTheme } from "../../hooks/theme";
import Menu from "./components/Menu";

const { width } = Dimensions.get("window");

export const HomeScreen = ({}: ScreenProps) => {
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
    </View>
  );
};
