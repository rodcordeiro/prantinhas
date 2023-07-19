import React from "react";
import { Animated, Easing, View, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useTheme } from "../../../../hooks/theme";
import { Feather } from "@expo/vector-icons";
import HydrateIcon from "../../../../assets/hydrate";

const Menu = () => {
  const { navigate } = useNavigation();
  const { theme } = useTheme();
  const active = React.useRef(false);
  const animatedState = new Animated.Value(0);

  const handleActive = () => {
    Animated.timing(animatedState, {
      toValue: active.current ? 0 : 1,
      //   delay: 50,
      easing: Easing.ease,
      useNativeDriver: false,
    }).start();
    active.current = !active.current;
  };

  const Button = Animated.createAnimatedComponent(TouchableOpacity);
  const backgroundColor = animatedState.interpolate({
    inputRange: [0, 1],
    outputRange: ["transparent", theme!.colors.secondary],
  });

  const secondBarWidth = animatedState.interpolate({
    inputRange: [0, 1],
    outputRange: [20, 30],
    extrapolate: "clamp",
  });
  const firstBarTransform = {
    transform: [
      {
        rotate: animatedState.interpolate({
          inputRange: [0, 1],
          outputRange: ["0deg", "-45deg"],
          easing: Easing.ease,
          extrapolate: "clamp",
        }),
      },
      {
        translateY: animatedState.interpolate({
          inputRange: [0, 1],
          outputRange: [0, 2],
          extrapolate: "clamp",
        }),
      },
    ],
  };

  const secondBarTransform = {
    transform: [
      {
        rotate: animatedState.interpolate({
          inputRange: [0, 1],
          outputRange: ["0deg", "45deg"],
          extrapolate: "clamp",
        }),
      },
      {
        translateY: animatedState.interpolate({
          inputRange: [0, 1],
          outputRange: [0, -4],
          extrapolate: "clamp",
        }),
      },
      {
        translateX: animatedState.interpolate({
          inputRange: [0, 1],
          outputRange: [0, -4],
          extrapolate: "clamp",
        }),
      },
    ],
  };
  return (
    <View style={{ position: "absolute", right: 25, top: 60 }}>
      <Button
        style={{
          borderRadius: 30,
          width: 60,
          height: 60,
          justifyContent: "center",
          alignContent: "center",
          backgroundColor: theme?.colors.secondary,
          // backgroundColor,
        }}
        onPress={handleActive}
      >
        <Animated.View
          style={{
            alignItems: "flex-end",
            //   backgroundColor,
            padding: 15,
          }}
        >
          <Animated.View
            style={[
              {
                width: 30,
                height: 2.5,
                backgroundColor: "#f0f0f0",
              },
              firstBarTransform,
            ]}
          />
          <Animated.View
            style={[
              {
                width: secondBarWidth,
                height: 2.5,
                marginTop: 5,
                backgroundColor: "#f0f0f0",
              },
              secondBarTransform,
            ]}
          />
        </Animated.View>
      </Button>
      <Button
        style={{
          alignItems: "flex-end",
          backgroundColor: theme?.colors.secondary,
          borderRadius: 30,
          width: 60,
          height: 60,
          padding: 15,
          justifyContent: "center",
          alignContent: "center",
        }}
      >
        <Feather name="plus" size={32} color="#f0f0f0" />
      </Button>
      <Button
        style={{
          alignItems: "flex-end",
          backgroundColor: theme?.colors.secondary,
          borderRadius: 30,
          width: 60,
          height: 60,
          padding: 15,
          justifyContent: "center",
          alignContent: "center",
        }}
      >
        <HydrateIcon/>
      </Button>
      <Button
        style={{
          alignItems: "flex-end",
          backgroundColor: theme?.colors.secondary,
          borderRadius: 30,
          width: 60,
          height: 60,
          padding: 15,
          // marginTop: 15,
          top: 0,
          justifyContent: "center",
          alignContent: "center",
        }}
      >
        <Feather name="settings" size={30} color="#f0f0f0" />
      </Button>
    </View>
  );
};

export default React.memo(Menu);
