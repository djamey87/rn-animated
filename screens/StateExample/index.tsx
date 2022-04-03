import React, { useState } from "react";
import { View, Text } from "react-native";

export const StateExample: React.FC = () => {
  const [count, setCount] = useState<number>(0);
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Current count: {count}</Text>
    </View>
  );
};
