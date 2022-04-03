import React from "react";
import { View, Text } from "react-native";
import { styles } from "./index.styles";

const cards = Array(8).fill("Dave Amey");

export const GestureExample = () => {
  return (
    <View style={styles.container}>
      {cards.map((card, index) => (
        <View style={styles.card} key={`card-${index}`}>
          <Text>{card}</Text>
        </View>
      ))}
    </View>
  );
};
