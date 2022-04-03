import React from "react";
import { StyleSheet, StatusBar } from "react-native";
import { RootStackParamList } from "./routes";
import { Home } from "./screens/Home";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { GestureExample } from "./screens/GestureExample";
import { enableScreens } from "react-native-screens";
import { GestureHandlerRootView } from "react-native-gesture-handler";

enableScreens();
const Stack = createNativeStackNavigator<RootStackParamList>();

const AppNavigator = () => (
  <Stack.Navigator
    initialRouteName="Home"
    screenOptions={{ animation: "slide_from_right" }}
  >
    <Stack.Screen
      name="Home"
      component={Home}
      options={{ title: "Animation examples" }}
    />
    <Stack.Screen name="GestureExample" component={GestureExample} />
  </Stack.Navigator>
);

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar barStyle="light-content" />
      <GestureHandlerRootView style={{ flex: 1 }}>
        <AppNavigator />
      </GestureHandlerRootView>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
