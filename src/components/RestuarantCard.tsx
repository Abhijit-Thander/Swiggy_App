import { Restaurant } from "@/assets/data/Restuarants";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

type Props = {
  restaurant: Restaurant;
  onPress?: () => void;
};

const RestaurantCard = ({ restaurant, onPress }: Props) => {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <Image source={restaurant.image} style={styles.image} />

      <View style={styles.infoContainer}>
        <Text style={styles.name}>{restaurant.name}</Text>
        <Text style={styles.location}>{restaurant.location}</Text>

        <View style={styles.row}>
          <MaterialIcons name="stars" size={14} color="green" />
          <Text style={styles.rating}>{restaurant.rating} • </Text>
          <Text style={styles.time}>{restaurant.deliveryTime}</Text>
        </View>

        {restaurant.discount && (
          <Text style={styles.discount}>{restaurant.discount}</Text>
        )}
      </View>
    </TouchableOpacity>
  );
};

export default RestaurantCard;

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    borderRadius: 12,
    marginVertical: 8,
    overflow: "hidden",
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 3,
  },
  image: {
    width: "100%",
    height: 160,
  },
  infoContainer: {
    padding: 10,
  },
  name: {
    fontSize: 18,
    fontWeight: "bold",
  },
  location: {
    fontSize: 13,
    color: "gray",
    marginTop: 2,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 4,
  },
  rating: {
    fontSize: 13,
    fontWeight: "600",
  },
  time: {
    fontSize: 13,
    color: "gray",
  },
  discount: {
    marginTop: 6,
    fontSize: 13,
    fontWeight: "600",
    color: "#ff5200",
  },
});
