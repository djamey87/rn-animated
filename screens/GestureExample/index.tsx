import React from "react";
import { View, Text } from "react-native";
import { Card } from "../../components/Card";
import { styles } from "./index.styles";

const cards = Array(8).fill("Dave Amey");

export const GestureExample = () => {
  return (
    <View style={styles.container}>
      {cards.map((card, index) => (
        <Card content={card} key={`card-${index}`} />
      ))}
    </View>
  );
};
