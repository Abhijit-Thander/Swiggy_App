import Feather from "@expo/vector-icons/Feather";
import Ionicons from "@expo/vector-icons/Ionicons";
import React from "react";
import { StyleSheet, TextInput, View } from "react-native";

interface SearchBarProps {
  placeholder?: string;
  onChangeText?: (text: string) => void;
  value?: string;
}

const SearchBar: React.FC<SearchBarProps> = ({
  placeholder = "Search for restaurants or foods",
  onChangeText,
  value,
}) => {
  return (
    <View style={styles.searchContainer}>
      <Ionicons name="search" size={22} color="#d3d3d3" />
      <TextInput
        placeholder={placeholder}
        placeholderTextColor="#aeadad"
        style={styles.searchInput}
        onChangeText={onChangeText}
        value={value}
      />
      <Feather name="mic" size={24} color="#ff5200" />
    </View>
  );
};

export default SearchBar;

const styles = StyleSheet.create({
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
    borderColor: "#d3d3d3",
    fontSize: 14,
    color: "#000",
  },
});
