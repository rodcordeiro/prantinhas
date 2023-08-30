import React from "react";
import {
  Animated,
  Dimensions,
  Pressable,
  ScrollView,
  Text,
  View,
} from "react-native";
import Presentation1 from "../../assets/presentation_1";
import Presentation2 from "../../assets/presentation_2";
import Presentation3 from "../../assets/presentation_3";

import { ScreenProps } from "../../@types/navigation";
import usePersistedState from "../../utils/usePersistedState";
import { useTheme } from "../../hooks/theme";

import { styles } from "./styles";
import { Indicator } from "./components/ScrollIndicator";

const { width, height } = Dimensions.get("screen");

const data = [
  {
    title: "Leve suas plantas na palma da mão",
    subtitle: "Todas as informações sobre suas plantas ao seu alcance",
    Img: Presentation1,
  },
  {
    title: "Conheça mais sobre suas plantas",
    subtitle:
      "Ao cadastrar uma planta, ela é analisada por uma inteligência artificial.",
    Img: Presentation2,
  },
  {
    title: "E aprenda a cuidar melhor delas!",
    subtitle:
      "Após a análise, sugestões e dicas de como cuidar serão apresentadas e enviadas esporádicamente!",
    Img: Presentation3,
  },
];

export const PresentationScreen: React.FC<ScreenProps> = () => {
  const { theme } = useTheme();
  const [alreadyPresented, setAlreadyPresented] = usePersistedState(
    "@plants::AlreadyPresentedApp",
    false
  );
  const scrollX = React.useRef(new Animated.Value(0)).current;

  const displayNextButton = scrollX.interpolate({
    inputRange: [-1 * width, 1 * width, 2 * width],
    outputRange: [0, 0, 1],
  });

  return (
    <View style={{ flex: 1 }}>
      <ScrollView
        pagingEnabled
        horizontal
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: scrollX } } }],
          { useNativeDriver: false }
        )}
      >
        {data.map(({ title, subtitle, Img }, index) => {
          return (
            <View key={index} style={[styles.presentation, { width }]}>
              <Text style={[styles.title, { width: 310 }]}>{title}</Text>
              <Text style={[styles.subtitle, { width: 310 }]}>{subtitle}</Text>
              <Img width={width * 0.8} height="300" style={{ marginTop: 40 }} />
            </View>
          );
        })}
      </ScrollView>

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
        <Text style={{ opacity: displayNextButton }}>Show</Text>
      </View>
    </View>
  );
};
