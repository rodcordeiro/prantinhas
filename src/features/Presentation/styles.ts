import { StyleSheet } from "react-native";
export const styles = StyleSheet.create({
  presentation: {
    marginTop: 100,
    // justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 18,
    fontWeight: "200",
    marginTop: 10,
  },
  footer: {
    position: "absolute",
    bottom: 0,
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  footerNext: {
    right: 40,
  },
});
