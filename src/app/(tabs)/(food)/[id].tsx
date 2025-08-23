import Restaurants from "@/assets/data/Restuarants";
import SearchBar from "@/src/components/SearchBar";
import { useCart } from "@/src/provider/CartProvider";
import AntDesign from "@expo/vector-icons/AntDesign";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { router, Stack, useLocalSearchParams } from "expo-router";
import React from "react";
import {
  Image,
  Pressable,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const RestuarentDetails = () => {
  const { id } = useLocalSearchParams();
  const restaurant = Restaurants.find((r) => r.id === id);

  const { addCart } = useCart();

  const handleAddToCart = () => {
    if (!restaurant) {
      return;
    }
    addCart(restaurant);
  };

  return (
    <View style={styles.container}>
      <Stack.Screen options={{ title: restaurant?.name }} />

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
          <View style={styles.topBarRight}>
            <Pressable style={styles.groupOrder}>
              <Text style={styles.groupOrderText}>GROUP ORDER</Text>
            </Pressable>
            <Pressable>
              <MaterialCommunityIcons
                name="dots-vertical"
                size={24}
                color="#fff"
              />
            </Pressable>
          </View>
        </View>

        {/* Restaurant Info */}
        <View style={styles.innerContent}>
          {restaurant?.isVeg ? (
            <Text style={styles.isVeg}>Pure Veg 🟢 </Text>
          ) : (
            ""
          )}
          {/* Restaurant Name */}
          <Text style={styles.name}>{restaurant?.name}</Text>

          {/* Delivery time + location | Rating */}
          <View style={styles.rowBetween}>
            <View style={styles.row}>
              <Text style={styles.subText}>{restaurant?.deliveryTime} • </Text>
              <Text style={styles.subText}>{restaurant?.location}</Text>
            </View>

            <View style={styles.ratingContainer}>
              <Text style={styles.rating}>{restaurant?.rating} ★</Text>
            </View>
          </View>

          {/* Divider */}
          <View style={styles.line} />

          {/* Discount Section */}
          {restaurant?.discount && (
            <View style={styles.discountBox}>
              <Image
                source={require("@assets/images/Swiggy/discount.avif")} // 👈 put your discount image here
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
      <View style={styles.bottomHalf}>
        <SearchBar placeholder="Search for dishes..." />

        {/* Dishes */}
        <ScrollView style={styles.dishes} showsVerticalScrollIndicator={false}>
          {restaurant?.dishes.map((dish) => (
            <View key={dish.id} style={styles.dish}>
              <View style={styles.dishInfo}>
                <Text style={styles.dishName}>{dish.name}</Text>
                <Text style={styles.dishPrice}>₹{dish.price}</Text>
                <Text numberOfLines={2} style={styles.dishDescription}>
                  {dish.description}
                </Text>
              </View>
              <View style={styles.dishImageContainer}>
                <Image source={dish.image} style={styles.dishImage} />
                <TouchableOpacity
                  activeOpacity={0.2}
                  style={styles.addButton}
                  onPress={handleAddToCart}
                >
                  <Text style={styles.addButtonText}>ADD</Text>
                </TouchableOpacity>
              </View>
            </View>
          ))}
        </ScrollView>
      </View>

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
  topBarRight: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
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
    paddingHorizontal: 14,
    flex: 1,
    backgroundColor: "#ffffff",
  },

  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#ffffff",
    borderRadius: 12,
    paddingHorizontal: 14,
    paddingVertical: 4,
    borderWidth: 0.3,
  },
  searchInput: {
    flex: 1,
    marginHorizontal: 10,
    borderRightWidth: 0.4,
  },
  dishes: {
    marginTop: 20,
  },
  dish: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 16,
    backgroundColor: "#fff",
    // borderRadius: 12,
    borderBottomWidth: 0.5,
    borderColor: "#e2e2e2",
    padding: 12,
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
  },
  dishImageContainer: {
    width: 90,
    alignItems: "center",
    gap: 6,
  },
  dishImage: {
    width: 90,
    height: 90,
    borderRadius: 12,
    backgroundColor: "#eee",
  },
  dishInfo: { flex: 1, marginRight: 10 },
  dishName: {
    fontSize: 16,
    fontWeight: "600",
  },
  dishPrice: {
    fontSize: 14,
    color: "#444",
    marginTop: 4,
    fontWeight: "600",
  },
  dishDescription: {
    fontSize: 12,
    color: "#777",
    marginTop: 2,
  },
  addButton: {
    borderWidth: 1,
    borderColor: "#2ecc71",
    paddingVertical: 6,
    borderRadius: 6,
    width: "100%",
  },
  addButtonText: {
    color: "#2ecc71",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "center",
  },
});
