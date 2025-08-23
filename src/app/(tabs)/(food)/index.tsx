import Categories from "@/assets/data/Categories";
import Restaurants from "@/assets/data/Restuarants";
import CustomHeader from "@/src/components/Header";
import RestaurantCard from "@/src/components/RestuarantCard";
import SearchBar from "@components/SearchBar";
import { useVideoPlayer, VideoView } from "expo-video";
import React, { useRef } from "react";
import {
  Animated,
  FlatList,
  Image,
  StyleSheet,
  Text,
  View,
} from "react-native";
import {
  SafeAreaView,
  useSafeAreaInsets,
} from "react-native-safe-area-context";

const HEADER_HEIGHT = 60;
const VIDEO_HEIGHT = 140;

const HomeScreen = () => {
  const insets = useSafeAreaInsets();
  const scrollY = useRef(new Animated.Value(0)).current;

  const player = useVideoPlayer(
    require("@/assets/images/Swiggy/advertist.mp4"),
    (player) => {
      player.play();
      player.loop = true;
      player.muted = true;
    }
  );

  // Animate header + video
  const headerTranslateY = scrollY.interpolate({
    inputRange: [0, HEADER_HEIGHT + VIDEO_HEIGHT],
    outputRange: [0, -(HEADER_HEIGHT + VIDEO_HEIGHT)],
    extrapolate: "clamp",
  });

  const opacity = scrollY.interpolate({
    inputRange: [0, HEADER_HEIGHT],
    outputRange: [1, 0],
    extrapolate: "clamp",
  });

  const renderCategories = () => (
    <View style={styles.whatOnYourMindContainer}>
      <Text style={styles.title}>What's on your mind</Text>
      <FlatList
        data={Categories}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.whatOnYourMindContainer}
        renderItem={({ item }) => (
          <View style={styles.categoryContainer}>
            <Image source={item.image} style={styles.categoryImage} />
          </View>
        )}
      />
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      {/* Header + Video (animated) */}
      <Animated.View
        style={[
          styles.headerVideoWrapper,
          {
            paddingTop: insets.top, // ✅ safe area applied
            transform: [{ translateY: headerTranslateY }],
            opacity: opacity,
          },
        ]}
      >
        {/* Header */}
        <CustomHeader />

        <SearchBar />
        {/* Video */}

        <View style={styles.videocontainer}>
          <VideoView
            player={player}
            style={styles.video}
            contentFit="contain"
            allowsFullscreen={false}
          />
        </View>
      </Animated.View>

      {/* Restaurants List */}
      <Animated.FlatList
        data={Restaurants}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <RestaurantCard restaurant={item} />}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={renderCategories}
        stickyHeaderIndices={[0]} // ✅ categories stay fixed at top
        ListFooterComponent={() => (
          <Text style={styles.footerText}>Made with ❤️ by Avi</Text>
        )}
        contentContainerStyle={{
          paddingTop: HEADER_HEIGHT + VIDEO_HEIGHT + insets.top + 40, // push list down
        }}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: scrollY } } }],
          { useNativeDriver: true }
        )}
      />
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 14,
  },
  headerVideoWrapper: {
    position: "absolute",
    top: 0,
    left: 14,
    right: 14,
    zIndex: 10,
    backgroundColor: "#fff",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    height: HEADER_HEIGHT,
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
  videocontainer: {
    height: VIDEO_HEIGHT,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 10,
    overflow: "hidden",
  },
  video: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    backgroundColor: "#fff",
    paddingVertical: 10,
  },
  whatOnYourMindContainer: {
    backgroundColor: "#fff",
    height: 120,
    marginBottom: 10,
  },
  categoryContainer: {
    alignItems: "center",
    // marginRight: 14,
  },
  categoryImage: {
    width: 80,
    height: 80,
  },
  footerText: {
    fontSize: 16,
    marginTop: 6,
    textAlign: "center",
    color: "#383838",
    fontWeight: "600",
  },
});
