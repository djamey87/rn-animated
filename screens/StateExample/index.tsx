import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import useCounter from "../../hooks/useCounter";

import { styles } from "./index.styles";

export const StateExample: React.FC = () => {
  const [count, increment, decrement] = useCounter(0, 1);

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Current count: {count}</Text>

      <TouchableOpacity style={styles.button} onPress={() => increment()}>
        <Text>Increment ME!</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => decrement()}>
        <Text>Decrement ME!</Text>
      </TouchableOpacity>
    </View>
  );
};
