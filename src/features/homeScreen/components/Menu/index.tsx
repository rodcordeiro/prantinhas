import React from "react";
import { Animated, View, TouchableOpacity, StyleSheet } from "react-native";
import { useNavigation, NavigationProp } from "@react-navigation/native";
import { Feather } from "@expo/vector-icons";
import { useTheme } from "../../../../hooks/theme";
import {
  RootStackParamList,
  RootStackRouteProps,
} from "../../../../navigation/interface";
import HydrateIcon from "../../../../assets/hydrate";

const Button = Animated.createAnimatedComponent(TouchableOpacity);

const Menu = () => {
  const { navigate } = useNavigation<NavigationProp<RootStackParamList>>();
  const { theme } = useTheme();

  const [Button1] = React.useState(new Animated.Value(0));
  const [Button2] = React.useState(new Animated.Value(0));
  const [Button3] = React.useState(new Animated.Value(0));
  const [opacity] = React.useState(new Animated.Value(0));

  const [open, setOpen] = React.useState<boolean>(false);

  const popIn = () => {
    setOpen(true);
    Animated.timing(Button1, {
      toValue: 80,
      duration: 500,
      useNativeDriver: false,
    }).start();
    Animated.timing(Button2, {
      toValue: 160,
      duration: 500,
      useNativeDriver: false,
    }).start();
    Animated.timing(Button3, {
      toValue: 240,
      duration: 500,
      useNativeDriver: false,
    }).start();
    Animated.timing(opacity, {
      toValue: 1,
      duration: 500,
      useNativeDriver: false,
    }).start();
  };
  const popOut = () => {
    setOpen(false);
    Animated.timing(Button1, {
      toValue: 0,
      duration: 500,
      useNativeDriver: false,
    }).start();
    Animated.timing(Button2, {
      toValue: 0,
      duration: 500,
      useNativeDriver: false,
    }).start();
    Animated.timing(Button3, {
      toValue: 0,
      duration: 500,
      useNativeDriver: false,
    }).start();
    Animated.timing(opacity, {
      toValue: 0,
      duration: 500,
      useNativeDriver: false,
    }).start();
  };
  return (
    <View
      style={{
        zIndex: 9999999,
        position: "absolute",
        right: 20,
        top: 50,
      }}
    >
      <Button
        onPress={() => console.log("create_button")}
        style={[
          styles.button,
          styles.buttonPosition,
          { opacity },
          { top: Button1, backgroundColor: theme?.colors.secondary },
        ]}
      >
        <Feather name={"plus"} size={32} color={"#f0f0f0"} />
      </Button>

      <Button
        onPress={() => console.log("hydrate_button")}
        style={[
          styles.button,
          styles.buttonPosition,
          { opacity },
          { backgroundColor: theme?.colors.secondary },
          { top: Button2 },
        ]}
      >
        <HydrateIcon />
      </Button>
      <Button
        onPress={() => navigate("SettingsScreen", {})}
        style={[
          styles.button,
          styles.buttonPosition,
          { opacity },
          { backgroundColor: theme?.colors.secondary },
          { top: Button3 },
        ]}
      >
        <Feather name={"settings"} size={30} color={"#f0f0f0"} />
      </Button>
      <Button
        onPress={() => (!open ? popIn() : popOut())}
        style={[
          styles.button,
          { backgroundColor: open ? theme?.colors.secondary : "transparent" },
        ]}
      >
        <View style={{ alignItems: "flex-end" }}>
          <View
            style={{
              height: 2.5,
              width: 30,
              backgroundColor: "#f0f0f0",
              marginBottom: 5,
            }}
          />
          <View
            style={{
              height: 2.5,
              width: 20,
              backgroundColor: "#f0f0f0",
            }}
          />
        </View>
      </Button>
    </View>
  );
};

export default React.memo(Menu);

const styles = StyleSheet.create({
  button: {
    borderRadius: 30,
    width: 60,
    height: 60,
    padding: 15,
    justifyContent: "center",
    alignItens: "center",
  },
  buttonPosition: {
    position: "absolute",
    top: 0,
  },
});
