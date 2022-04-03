import { ViewStyle, StyleSheet, Dimensions } from "react-native";

const { width } = Dimensions.get("window");
const ratio = 228 / 362;
export const CARD_WIDTH = width * 0.8;
export const CARD_HEIGHT = CARD_WIDTH * ratio;

const card: ViewStyle = {
  marginVertical: 16,
  backgroundColor: "#baff29",
  width: CARD_WIDTH,
  height: CARD_HEIGHT,
  borderRadius: 15,
};

const container: ViewStyle = {
  ...StyleSheet.absoluteFillObject,
  alignItems: "center",
};

export const styles = {
  card,
  container,
};
