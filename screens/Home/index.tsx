import React from "react";
import { View, Text, Button } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../routes";
import { styles } from "./index.styles";

type HomeProps = NativeStackScreenProps<RootStackParamList, "Home">;

export const Home: React.FC<HomeProps> = ({ navigation }) => {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>You are home!</Text>
      {/* <Link to={"/Details"}>Go to Details screen</Link> */}
      <Button
        title="Go to details"
        onPress={() => navigation.push("Details")}
      />
    </View>
  );
};
