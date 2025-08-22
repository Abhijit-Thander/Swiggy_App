import Restaurants from "@/assets/data/Restuarants";
import { Stack, useLocalSearchParams } from "expo-router";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

const RestuarentDetails = () => {
  const { id } = useLocalSearchParams();

  const restaurant = Restaurants.find((r) => r.id === id);

  return (
    <View style={styles.container}>
      <Stack.Screen options={{ title: restaurant?.name }} />
      <Text>RestuarentDetails;{restaurant?.items.map((i) => i.name)}</Text>
    </View>
  );
};

export default RestuarentDetails;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
});
