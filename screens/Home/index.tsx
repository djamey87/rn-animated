import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../routes";
import { styles } from "./index.styles";

type HomeProps = NativeStackScreenProps<RootStackParamList, "Home">;

export const Home: React.FC<HomeProps> = ({ navigation }) => {
  const handlePress = () => {
    navigation.push("GestureExample");
  };
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>You are home!</Text>
      <TouchableOpacity
        style={{ padding: 15, backgroundColor: "lightblue", marginTop: 20 }}
        onPress={handlePress}
      >
        <Text>View Gesture Example</Text>
      </TouchableOpacity>
    </View>
  );
};
