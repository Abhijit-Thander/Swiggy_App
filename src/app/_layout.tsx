import { Stack } from "expo-router";
import React from "react";
import CartProvider from "../provider/CartProvider";

const RootLayout = () => {
  return (
    <CartProvider>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      </Stack>
    </CartProvider>
  );
};

export default RootLayout;
