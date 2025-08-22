import Restaurants from "@/assets/data/Restuarants";
import AntDesign from "@expo/vector-icons/AntDesign";
import { router, Stack, useLocalSearchParams } from "expo-router";
import React from "react";
import {
  Image,
  Pressable,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native";

const RestuarentDetails = () => {
  const { id } = useLocalSearchParams();
  const restaurant = Restaurants.find((r) => r.id === id);

  if (!restaurant) return null;

  return (
    <View style={styles.container}>
      <Stack.Screen options={{ title: restaurant.name }} />

      {/* Top Section */}
      <View style={styles.topHalf}>
        {/* Header Bar */}
        <View style={styles.topBar}>
          <AntDesign
            name="left"
            size={24}
            color="#fff"
            onPress={() => router.back()}
          />
          <Pressable style={styles.groupOrder}>
            <Text style={styles.groupOrderText}>GROUP ORDER</Text>
          </Pressable>
        </View>

        {/* Restaurant Info */}
        <View style={styles.innerContent}>
          {restaurant.isVeg ? (
            <Text style={styles.isVeg}>Pure Veg 🟢 </Text>
          ) : (
            ""
          )}
          {/* Restaurant Name */}
          <Text style={styles.name}>{restaurant.name}</Text>

          {/* Delivery time + location | Rating */}
          <View style={styles.rowBetween}>
            <View style={styles.row}>
              <Text style={styles.subText}>{restaurant.deliveryTime} • </Text>
              <Text style={styles.subText}>{restaurant.location}</Text>
            </View>

            <View style={styles.ratingContainer}>
              <Text style={styles.rating}>{restaurant.rating} ★</Text>
            </View>
          </View>

          {/* Divider */}
          <View style={styles.line} />

          {/* Discount Section */}
          {restaurant.discount && (
            <View style={styles.discountBox}>
              <Image
                source={require("@assets  /images/Swiggy/discount.avif")} // 👈 put your discount image here
                style={styles.discountImage}
                resizeMode="contain"
              />
              <View style={{ marginLeft: 10 }}>
                <Text style={styles.discount}>{restaurant.discount}</Text>
                <Text style={styles.coupon}>USE COUPON: ABCHJGJG</Text>
              </View>
            </View>
          )}
        </View>
      </View>

      {/* Bottom Section */}
      <View style={styles.bottomHalf} />

      <StatusBar barStyle="light-content" backgroundColor="#000000" />
    </View>
  );
};

export default RestuarentDetails;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  topBar: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    paddingTop: 30,
    marginBottom: 20,
    justifyContent: "space-between",
  },
  groupOrder: {
    borderWidth: 0.5,
    borderColor: "#fff",
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 20,
  },
  groupOrderText: {
    color: "#fff",
    fontSize: 12,
    fontWeight: "600",
  },
  topHalf: {
    width: "100%",
    height: "40%",
    backgroundColor: "#000",
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
    padding: 14,
    overflow: "hidden",
    justifyContent: "space-between",
  },
  innerContent: {
    width: "100%",
    backgroundColor: "#fff",
    borderRadius: 26,
    padding: 16,
  },
  name: {
    fontSize: 20,
    fontWeight: "bold",
  },
  rowBetween: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  isVeg: {
    color: "green",
    fontSize: 14,
    fontWeight: "600",
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
  },
  ratingContainer: {
    backgroundColor: "green",
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
  },
  subText: {
    fontSize: 14,
    color: "#555",
  },
  rating: {
    fontSize: 14,
    fontWeight: "600",
    color: "#fff",
  },
  line: {
    width: "100%",
    height: 0.5,
    backgroundColor: "#ccc",
    marginVertical: 10,
  },
  discountBox: {
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 12,
  },
  discountImage: {
    width: 50,
    height: 50,
  },
  discount: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#000000",
  },
  coupon: {
    fontSize: 12,
    color: "#555",
  },
  bottomHalf: {
    width: "100%",
    height: "58%",
    backgroundColor: "#fff",
  },
});
