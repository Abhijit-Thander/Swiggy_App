// components/CustomHeader.tsx
import Entypo from "@expo/vector-icons/Entypo";
import Feather from "@expo/vector-icons/Feather";
import { LinearGradient } from "expo-linear-gradient";
import { Link } from "expo-router";
import { Pressable, StyleSheet, Text, View } from "react-native";

export default function CustomHeader() {
  return (
    <View style={styles.header}>
      {/* Left Section (Location) */}
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

      {/* Middle Buy */}
      <LinearGradient
        colors={["#ff9500", "#f665e5"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={styles.buyContainer}
      >
        <Text style={styles.buyText}>one</Text>
      </LinearGradient>

      {/* Profile Button */}
      <Link href="/screens/Profile" asChild>
        <Pressable style={styles.profileContainer}>
          <Feather name="user" size={22} color="#fff" />
        </Pressable>
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    height: 60,
    backgroundColor: "#fff",
  },
  homeRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },
  homeText: {
    fontSize: 16,
    fontWeight: "600",
    color: "#000",
  },
  locationText: {
    fontSize: 13,
    color: "#555",
  },
  buyContainer: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
  },
  buyText: {
    color: "#fff",
    fontWeight: "600",
    fontSize: 14,
  },
  profileContainer: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: "#000",
    alignItems: "center",
    justifyContent: "center",
  },
});
