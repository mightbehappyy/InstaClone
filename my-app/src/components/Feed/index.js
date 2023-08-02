import React from "react";
import { FlatList, View } from "react-native";
import feedStyle from "./style";
import { Story } from "../UI/Story";
import { Post } from "../UI/Post";

export function Feed() {
  const postList = [
    {
      url: require("../../../assets/Catthinker.jpg"),
      username: "Thinker Cat",
      subtitle: "A thoughtful cat",
      numLikes: 15,
    },
    {
      url: require("../../../assets/Chainsaw.jpg"),
      username: "Chainsaw man",
      subtitle: "Chainsaw warrior",
      numLikes: 32,
    },
    {
      url: require("../../../assets/dabloons2.jpg"),
      username: "Dabloons",
      subtitle: "Searching for treasure",
      numLikes: 7,
    },
    {
      url: require("../../../assets/smile.jpg"),
      username: "Smiley cat",
      subtitle: "Always smiling",
      numLikes: 28,
    },
    {
      url: require("../../../assets/pochita1.png"),
      username: "Pochita",
      subtitle: "Happy Pochita",
      numLikes: 10,
    },
    {
      url: require("../../../assets/pochita1.webp"),
      username: "Pochita",
      subtitle: "Happy Pochita",
      numLikes: 10,
    },
    {
      url: require("../../../assets/pochita2.jpg"),
      username: "Pochita",
      subtitle: "Sad Pochita",
      numLikes: 10,
    },
    {
      url: require("../../../assets/pochita3.webp"),
      username: "Pochita",
      subtitle: "Happy Pochita",
      numLikes: 10,
    },
  ];

  const renderItem = ({ item }) => (
    <Post
      profilePic={item.url}
      userName={item.username}
      postImage={item.url}
      subtitle={item.subtitle}
      numLikes={item.numLikes}
    />
  );

  return (
    <View style={[feedStyle.container, { flex: 2 }]}>
      <FlatList
        data={postList}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
        horizontal={false}
        showsHorizontalScrollIndicator={false}
        style={[feedStyle.flatListContent]}
      />
    </View>
  );
}
