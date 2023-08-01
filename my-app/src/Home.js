import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image } from "react-native";
import { Story } from "./components/UI/Story";
import { StoriesList } from "./components/StoriesList";
import { Header } from "./components/Header/index";
import { Post } from "./components/UI/Post";
import { Feed } from "./components/Feed";
export default function Home() {
  const Catthinker = require("../assets/Catthinker.jpg");
  return (
    <View style={styles.container}>
      <Header />
      <StoriesList />
      <Feed />
      <StatusBar style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
  },
});
