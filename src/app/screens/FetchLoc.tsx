import Entypo from "@expo/vector-icons/Entypo";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Stack } from "expo-router";
import React from "react";
import {
  Platform,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

const FetchUserLocation = () => {
  return (
    <View style={styles.container}>
      <Stack.Screen
        options={{
          title: "Select Your Location",
          headerTitleStyle: { fontSize: 16, fontWeight: "600" },
          headerShadowVisible: false,
        }}
      />

      {/* Search Bar */}
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Search an area or address"
          style={styles.input}
          placeholderTextColor="#8e8e8e"
        />
        <Ionicons
          name="search"
          size={20}
          color="#818181"
          style={styles.searchicon}
        />
      </View>

      {/* Buttons */}
      <View style={styles.btnContainer}>
        <Pressable
          style={({ pressed }) => [
            styles.btn,
            pressed && Platform.OS === "ios" && { opacity: 0.6 },
          ]}
          android_ripple={{ color: "#f2f2f2", borderless: false }}
        >
          <FontAwesome6 name="location-crosshairs" size={17} color="#ed5d1f" />
          <Text style={styles.title}>Use Current Location</Text>
        </Pressable>

        <Pressable
          style={({ pressed }) => [
            styles.btn,
            pressed && Platform.OS === "ios" && { opacity: 0.6 },
          ]}
          android_ripple={{ color: "#f2f2f2", borderless: false }}
        >
          <Entypo name="squared-plus" size={17} color="#ed5d1f" />
          <Text style={styles.title}>Add New Address</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default FetchUserLocation;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F7FA",
    paddingHorizontal: 14,
    paddingTop: 10,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  input: {
    flex: 1,
    height: 46,
    marginVertical: 12,
    borderWidth: 0.5,
    paddingHorizontal: 14,
    paddingRight: 40,
    borderRadius: 10,
    backgroundColor: "#ffffff",
    borderColor: "#d6d6d6",
  },
  searchicon: {
    position: "absolute",
    right: 16,
  },
  btnContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 12,
    marginTop: 10,
  },
  title: {
    fontSize: 12,
    fontWeight: "600",
    color: "#333",
  },
  btn: {
    flex: 1,
    backgroundColor: "#ffffff",
    paddingVertical: 14,
    borderColor: "#d6d6d6",
    flexDirection: "row",
    borderWidth: 0.5,
    gap: 6,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
});
