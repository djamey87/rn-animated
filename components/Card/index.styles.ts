import { Dimensions, ViewStyle } from "react-native";

const { width } = Dimensions.get("window");
const ratio = 228 / 362;
const CARD_WIDTH = width * 0.8;
const CARD_HEIGHT = CARD_WIDTH * ratio;

const card: ViewStyle = {
  marginVertical: 16,
  backgroundColor: "#baff29",
  width: CARD_WIDTH,
  height: CARD_HEIGHT,
  borderRadius: 15,
};

const content: ViewStyle = {
  flex: 1,
  alignItems: "center",
  justifyContent: "center",
};

export const styles = {
  card,
  content,
};
