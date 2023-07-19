import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { CustomTheme, useTheme } from "./hooks/theme";
import { dark, light } from "./styles/theme";
import { Routes } from "./navigation";

export default function Application() {
  return (
    <CustomTheme title="title" dark={dark} light={light}>
      <StatusBar style="auto" />
      <Routes />
    </CustomTheme>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
