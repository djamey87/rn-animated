import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../routes";
import { styles } from "./index.styles";

type HomeProps = NativeStackScreenProps<RootStackParamList, "Home">;

export const Home: React.FC<HomeProps> = ({ navigation }) => {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>You are home!</Text>
      <TouchableOpacity
        style={{ padding: 15, backgroundColor: "lightblue", marginTop: 20 }}
        onPress={() => navigation.push("GestureExample")}
      >
        <Text>View Gesture Example</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{ padding: 15, backgroundColor: "lightblue", marginTop: 20 }}
        onPress={() => navigation.push("StateExample")}
      >
        <Text>View State Example</Text>
      </TouchableOpacity>
    </View>
  );
};
