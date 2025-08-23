import { Stack } from "expo-router";
import React from "react";
import CartProvider from "../provider/CartProvider";

const _layout = () => {
  return (
    <CartProvider>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      </Stack>
    </CartProvider>
  );
};

export default _layout;
