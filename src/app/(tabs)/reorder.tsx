import React from "react";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";

const reorder = () => {
  return (
    <View style={styles.container}>
      <Image
        style={{ width: 200, height: 200 }}
        source={require("@assets  /images/Swiggy/blank_order.jpg")}
      />
      <Text style={styles.title}>Uh Oh! You don't have any food orders</Text>
      <Text style={styles.subtitle}>Order now to avail great discounts!</Text>
      <Pressable style={styles.button}>
        <Text style={styles.buttonTxt}>Order Now</Text>
      </Pressable>
    </View>
  );
};

export default reorder;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    // marginBottom: 6,
  },
  subtitle: {
    fontSize: 16,
    marginBottom: 20,
  },
  button: {
    backgroundColor: "#000000",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buttonTxt: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "bold",
  },
});
