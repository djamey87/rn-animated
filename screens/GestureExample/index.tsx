import React from "react";
import { View } from "react-native";
import {
  PanGestureHandler,
  PanGestureHandlerGestureEvent,
} from "react-native-gesture-handler";
import Animated, {
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
} from "react-native-reanimated";
import { Card } from "../../components/Card";

import { styles } from "./index.styles";

const cards = Array(8).fill("Dave Amey");

export const GestureExample = () => {
  const translateX = useSharedValue(0);
  const translateY = useSharedValue(0);

  const onGestureEvent = useAnimatedGestureHandler<
    PanGestureHandlerGestureEvent,
    { x: number; y: number }
  >({
    onStart: (_event, ctx) => {
      ctx.x = translateX.value; // store the current translate value in the context object
      ctx.y = translateY.value;
      // triggered at the start of the pan gesture
    },
    onActive: ({ translationX, translationY }, ctx) => {
      translateX.value = ctx.x + translationX; // add the offset on every frame of the animation
      translateY.value = ctx.y + translationY;
      // triggered on every frame of the pan gesture
    },
    onEnd: () => {},
  });

  const moveStyle = useAnimatedStyle(() => ({
    position: "absolute",
    transform: [
      { translateX: translateX.value },
      { translateY: translateY.value },
    ],
  }));

  return (
    <View style={styles.container}>
      {cards.map((card, index) => (
        <PanGestureHandler
          onGestureEvent={onGestureEvent}
          key={`card-${index}`}
        >
          <Animated.View style={moveStyle}>
            <Card content={card} />
          </Animated.View>
        </PanGestureHandler>
      ))}
    </View>
  );
};
