import AntDesign from "@expo/vector-icons/AntDesign";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { router, Stack } from "expo-router";
import React, { useState } from "react";
import { Pressable, StatusBar, StyleSheet, Text, View } from "react-native";
import { Menu, Provider } from "react-native-paper"; // 👈 for popover menu
import { useSafeAreaInsets } from "react-native-safe-area-context";

const Profile = () => {
  const insets = useSafeAreaInsets();
  const [visible, setVisible] = useState(false);

  const openMenu = () => setVisible(true);
  const closeMenu = () => setVisible(false);

  return (
    <Provider>
      <View style={[styles.Topcontainer, { paddingTop: insets.top + 8 }]}>
        <Stack.Screen options={{ headerShown: false }} />

        {/* Top bar */}
        <View style={styles.topBar}>
          <AntDesign
            name="left"
            size={24}
            color="#080808"
            onPress={() => router.back()}
          />

          <View style={styles.topBarRight}>
            <Pressable style={styles.help}>
              <Text style={styles.helpText}>Help</Text>
            </Pressable>

            {/* 3-dot menu */}
            <Menu
              visible={visible}
              onDismiss={closeMenu}
              anchor={
                <Pressable onPress={openMenu}>
                  <MaterialCommunityIcons
                    name="dots-vertical"
                    size={24}
                    color="black"
                  />
                </Pressable>
              }
              contentStyle={{
                borderRadius: 16, // 👈 Rounded corners
                backgroundColor: "white",
                elevation: 4,
                marginRight: 20, // 👈 Shadow on Android
              }}
            >
              <Menu.Item
                onPress={() => {
                  closeMenu();
                  console.log("Edit Profile");
                }}
                title="Edit Profile"
              />
              <Menu.Item
                onPress={() => {
                  closeMenu();
                  console.log("Settings");
                }}
                title="Settings"
              />
              <Menu.Item
                onPress={() => {
                  closeMenu();
                  console.log("Logout");
                }}
                title="Logout"
              />
            </Menu>
          </View>
        </View>

        {/* User info */}
        <View>
          <Text style={styles.name}>Abhijit Thander</Text>
          <Text style={styles.email}>abhijit@example.com</Text>
          <Text style={styles.phone}>+91 9883121012</Text>
        </View>
      </View>
      <StatusBar barStyle="dark-content" />
    </Provider>
  );
};

export default Profile;

const styles = StyleSheet.create({
  Topcontainer: {
    height: "26%",
    paddingHorizontal: 14,
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
    backgroundColor: "#f2e1ca",
    justifyContent: "space-between",
    paddingBottom: 20,
  },
  topBar: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
    justifyContent: "space-between",
  },
  topBarRight: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  help: {
    borderWidth: 0.5,
    borderColor: "#f3a463",
    backgroundColor: "#f0f0f0",
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 20,
    flexDirection: "row",
    gap: 4,
  },
  helpText: {
    color: "#f06e1e",
    fontSize: 12,
    fontWeight: "bold",
  },
  name: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 8,
  },
  email: {
    fontSize: 16,
    fontWeight: "400",
  },
  phone: {
    fontSize: 16,
    fontWeight: "400",
  },
});
