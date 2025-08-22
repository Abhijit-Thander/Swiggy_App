import { Image, StyleSheet, Text, View } from "react-native";

const DishCard = ({ dish }: { dish: any }) => (
  <View style={styles.dish}>
    <View style={styles.dishInfo}>
      <Text style={styles.dishName}>{dish.name}</Text>
      <Text style={styles.dishPrice}>₹{dish.price}</Text>
      <Text
        style={styles.dishDescription}
        numberOfLines={2}
        ellipsizeMode="tail"
      >
        {dish.description}
      </Text>
    </View>
    <Image style={styles.dishImage} />
  </View>
);

export default DishCard;

const styles = StyleSheet.create({
  dish: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#fff",
    padding: 12,
    borderRadius: 16,
    marginBottom: 14,
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 2,
  },
  dishInfo: {
    flex: 1,
    marginRight: 10,
  },
  dishName: {
    fontSize: 16,
    fontWeight: "600",
    color: "#222",
    marginBottom: 4,
  },
  dishPrice: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#14CF93", // ✅ highlight price
    marginBottom: 6,
  },
  dishDescription: {
    fontSize: 13,
    color: "#555",
    lineHeight: 18,
  },
  dishImage: {
    width: 90,
    height: 90,
    borderRadius: 12,
    backgroundColor: "#f0f0f0", // placeholder background
  },
});
