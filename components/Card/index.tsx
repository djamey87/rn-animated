import React from "react";
import { View, Text } from "react-native";
import { styles } from "./index.styles";

interface Props {
  content: string;
}

export const Card: React.FC<Props> = ({ content }) => (
  <View style={styles.card}>
    <View style={styles.content}>
      <Text>{content}</Text>
    </View>
  </View>
);
