import Entypo from "@expo/vector-icons/Entypo";
import Ionicons from "@expo/vector-icons/Ionicons";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { Tabs } from "expo-router";

export default function RootLayout() {
  return (
    <Tabs
      screenOptions={{
        headerStyle: { shadowColor: "transparent" },
        tabBarActiveTintColor: "#f7601a",
        headerTitleAlign: "center",
        tabBarInactiveTintColor: "#a7a7a7",
        tabBarLabelStyle: { fontWeight: "700" },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Food",
          tabBarIcon: ({ color }) => (
            <Ionicons name="fast-food-outline" size={22} color={color} />
          ),
          headerShown: false,
        }}
      />

      <Tabs.Screen
        name="[id]"
        options={{
          headerShown: false,
          href: null,
          tabBarStyle: { display: "none" },
        }}
      />
      <Tabs.Screen
        name="dineout"
        options={{
          title: "Dineout",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="table-chair"
              size={22}
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="card"
        options={{
          title: "Card",
          tabBarIcon: ({ color }) => (
            <Entypo name="credit-card" size={22} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="cart"
        options={{
          title: "Cart",
          headerShown: false,
          tabBarStyle: { display: "none" },
          tabBarIcon: ({ color }) => (
            <Ionicons name="cart-outline" size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="winestore"
        options={{
          title: "Winestore",
          tabBarIcon: ({ color }) => (
            <Ionicons name="wine" size={22} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
