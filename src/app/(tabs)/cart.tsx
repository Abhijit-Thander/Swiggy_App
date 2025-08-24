import CartListItem from "@/src/components/CartListItem";
import { useCart } from "@/src/provider/CartProvider";
import AntDesign from "@expo/vector-icons/AntDesign";
import { Stack, useRouter } from "expo-router";
import React from "react";
import {
  FlatList,
  Pressable,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const CartScreen = () => {
  const { items } = useCart();
  const router = useRouter();

  if (items.length === 0) {
    return (
      <SafeAreaView style={styles.emptyContainer}>
        <Stack.Screen options={{ headerShown: false }} />
        <Text style={styles.emptyIcon}>🛒</Text>
        <Text style={styles.emptyTitle}>Your cart is empty</Text>
        <Text style={styles.emptySubtitle}>
          Add some delicious food to your cart!
        </Text>

        <Pressable
          style={styles.browseButton}
          onPress={() => router.replace("/(food)")}
        >
          <Text style={styles.browseButtonText}>Browse Food</Text>
        </Pressable>
        <StatusBar
          barStyle="dark-content"
          backgroundColor="transparent"
          translucent
        />
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.topBar}>
        <AntDesign
          name="left"
          size={24}
          color="#000000"
          onPress={() => router.back()}
        />
        <Text style={styles.title}>Cart</Text>
      </View>
      <FlatList
        data={items}
        renderItem={({ item }) => <CartListItem item={item} />}
        contentContainerStyle={{ gap: 12, paddingBottom: 100 }}
        showsVerticalScrollIndicator={false}
      />

      {/* Bottom Checkout Bar */}
      <View style={styles.bottomBar}>
        <Text style={styles.totalText}>₹349</Text>
        <TouchableOpacity style={styles.payButton}>
          <Text style={styles.payButtonText}>Pay</Text>
        </TouchableOpacity>
      </View>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="transparent"
        translucent
      />
    </SafeAreaView>
  );
};

export default CartScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8f8f8",
    padding: 12,
  },
  emptyContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    padding: 20,
  },
  topBar: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    paddingTop: 30,
    marginBottom: 20,
    gap: 18,
    // justifyContent: "space-between",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
  },
  emptyIcon: {
    fontSize: 64,
    marginBottom: 12,
  },
  emptyTitle: {
    fontSize: 20,
    fontWeight: "700",
    marginBottom: 4,
  },
  emptySubtitle: {
    fontSize: 14,
    color: "#666",
    marginBottom: 20,
  },
  browseButton: {
    backgroundColor: "#f0742c",
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 8,
  },
  browseButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "700",
  },
  bottomBar: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    height: 90,
    backgroundColor: "#fff",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    borderTopWidth: StyleSheet.hairlineWidth,
    borderColor: "#ddd",
  },
  totalText: {
    fontSize: 18,
    fontWeight: "700",
    color: "#333",
  },
  payButton: {
    backgroundColor: "#369c61",
    paddingHorizontal: 48,
    paddingVertical: 10,
    borderRadius: 8,
  },
  payButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "700",
  },
});
