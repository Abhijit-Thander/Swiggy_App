import React from "react";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";

import Entypo from "@expo/vector-icons/Entypo";
import { useCart } from "../provider/CartProvider";
import { CartItem } from "../types";

type Props = {
  item: CartItem;
};

export default function CartListItem({ item }: Props) {
  const { increaseQty, decreaseQty } = useCart();

  return (
    <View style={styles.container}>
      <Image source={item.image} style={styles.image} />

      {/* Dish Details */}
      <View style={styles.details}>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.price}>₹{item.price}</Text>
      </View>

      {/* Quantity Controls */}
      <View style={styles.qtyContainer}>
        <Pressable
          style={styles.button}
          onPress={() => decreaseQty(item.dishId)}
        >
          <Entypo name="minus" size={20} color="green" />
        </Pressable>

        <Text style={styles.qty}>{item.quantity}</Text>

        <Pressable
          style={styles.button}
          onPress={() => increaseQty(item.dishId)}
        >
          <Entypo name="plus" size={20} color="green" />
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    padding: 12,
    borderBottomWidth: 1,
    borderColor: "#ddd",
    backgroundColor: "#fff",
    borderRadius: 12,
    height: 100,
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 8,
    marginRight: 12,
  },
  details: {
    flex: 1,
  },
  name: {
    fontSize: 16,
    fontWeight: "600",
  },
  price: {
    fontSize: 14,
    color: "#555",
    marginTop: 4,
    fontWeight: "600",
  },
  qtyContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 0.5,
    borderColor: "#a5a5a5",
    borderRadius: 6,
  },
  button: {
    width: 28,
    height: 28,
    borderRadius: 14,
    // backgroundColor: "#14CF93",
    justifyContent: "center",
    alignItems: "center",
  },
  btnText: {
    color: "#14CF93",
    fontWeight: "bold",
    fontSize: 20,
  },
  qty: {
    marginHorizontal: 10,
    fontSize: 16,
    fontWeight: "600",
  },
});
