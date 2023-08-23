import React from "react";
import {
  Animated,
  Dimensions,
  Pressable,
  ScrollView,
  Text,
  View,
} from "react-native";
import Presentation from "../../assets/presentation_1";

import { ScreenProps } from "../../@types/navigation";
import usePersistedState from "../../utils/usePersistedState";
import { useTheme } from "../../hooks/theme";

import { styles } from "./styles";
import { Indicator } from "./components/ScrollIndicator";

const { width, height } = Dimensions.get("screen");

export const PresentationScreen: React.FC<ScreenProps> = () => {
  const { theme } = useTheme();
  const [alreadyPresented, setAlreadyPresented] = usePersistedState(
    "@plants::AlreadyPresentedApp",
    false
  );
  const scrollX = React.useRef(new Animated.Value(0)).current;

  return (
    <View style={{ flex: 1 }}>
      <Presentation />
      <View
        style={[
          styles.footer,
          {
            backgroundColor: theme?.colors.primary,
            width,
            height: 60,
          },
        ]}
      >
        <Indicator
          key="indicator_container"
          scrollX={scrollX}
          height={height}
          images={["images", "images", "images"]}
          width={width}
        />
        <Text style={[styles.footerText, { color: "#f0f0f0" }]}>Next</Text>F P
      </View>
    </View>
  );
};
