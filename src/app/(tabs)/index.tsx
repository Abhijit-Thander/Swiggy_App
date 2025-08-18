import Categories from "@/assets/data/Categories";
import Restaurants from "@/assets/data/Restuarants";
import RestaurantCard from "@/src/components/RestuarantCard";

import Entypo from "@expo/vector-icons/Entypo";
import Feather from "@expo/vector-icons/Feather";
import Ionicons from "@expo/vector-icons/Ionicons";
import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import {
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Index = () => {
  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        {/* Left Section (Home + Location) */}
        <View>
          <View style={styles.homeRow}>
            <Entypo name="home" size={24} color="#ff5200" />
            <Text style={styles.homeText}>Home</Text>
            <Entypo name="chevron-small-down" size={24} color="black" />
          </View>
          <Text
            style={[styles.locationText, { width: 170 }]}
            numberOfLines={1}
            ellipsizeMode="tail"
          >
            Food Junction Cafe, Natungram, Magra, Hansghara
          </Text>
        </View>

        {/* Middle Section (Buy) */}
        <LinearGradient
          colors={["#ff9500", "#f665e5"]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={styles.buyContainer}
        >
          <Text style={styles.buyText}>one</Text>
        </LinearGradient>

        {/* Right Section (Profile) */}
        <View style={styles.profileContainer}>
          <Feather name="user" size={22} color="#fff" />
        </View>
      </View>

      {/* Search bar */}
      <View style={styles.searchContainer}>
        <Ionicons name="search" size={22} color="#d3d3d3" />
        <TextInput
          placeholder="Search for restaurants or foods"
          placeholderTextColor="#d3d3d3"
          style={styles.searchInput}
        />
        <Feather name="mic" size={24} color="#ff5200" />
      </View>

      {/* Categories */}
      <Text style={styles.title}>What's on your mind</Text>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.whatOnYourMindContainer}
      >
        {Categories.map((category) => (
          <View key={category.id} style={styles.categoryContainer}>
            <Image
              source={category.image}
              style={styles.categoryImage}
              resizeMode="cover"
            />
          </View>
        ))}
      </ScrollView>

      {/* Restaurants Section */}
      <Text style={styles.title}>Popular Restaurants</Text>

      <FlatList
        data={Restaurants}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <RestaurantCard restaurant={item} />}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
};

export default Index;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 14,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    height: 60,
  },
  homeRow: {
    flexDirection: "row",
    alignItems: "center",
    columnGap: 4,
  },
  homeText: {
    fontSize: 16,
    fontWeight: "bold",
  },
  locationText: {
    fontSize: 12,
    color: "gray",
    marginLeft: 2,
  },
  buyContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#ff5200",
    borderRadius: 50,
    paddingHorizontal: 14,
    paddingVertical: 8,
  },
  buyText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#fff",
  },
  profileContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#2b2b2b",
    borderRadius: 50,
    paddingHorizontal: 14,
    paddingVertical: 8,
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#ffffff",
    borderRadius: 10,
    paddingHorizontal: 14,
    paddingVertical: 6,
    marginTop: 10,
    borderWidth: 0.3,
  },
  searchInput: {
    flex: 1,
    marginHorizontal: 10,
    borderRightWidth: 0.4,
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    marginVertical: 10,
  },
  whatOnYourMindContainer: {
    flexDirection: "row",
    marginTop: 10,
    height: 150,
  },
  categoryContainer: {
    alignItems: "center",
    gap: 14,
  },
  categoryImage: {
    width: 80,
    height: 80,
    // borderRadius: 50,
    // backgroundColor: "#fff",
    elevation: 3, // Android shadow
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
  },
  categoryText: {
    fontSize: 12,
    marginTop: 6,
    textAlign: "center",
    color: "#383838",
    fontWeight: "500",
  },
});
