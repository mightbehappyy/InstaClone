import React from "react";
import { FlatList, View } from "react-native";
import storiesListStyle from "./style";
import { Story } from "../UI/Story";
import { Post } from "../UI/Post";

export function Feed() {
  const postList = [
    {
      url: require("../../../assets/Catthinker.jpg"),
      username: "Thinker Cat",
    },
    {
      url: require("../../../assets/Chainsaw.jpg"),
      username: "Chainsaw man",
    },
    {
      url: require("../../../assets/dabloons2.jpg"),
      username: "Dabloons",
    },
    {
      url: require("../../../assets/smile.jpg"),
      username: "Smiley cat",
    },
    {
      url: require("../../../assets/Catthinker.jpg"),
      username: "Thinker Cat",
    },
    {
      url: require("../../../assets/Chainsaw.jpg"),
      username: "Chainsaw man",
    },
    {
      url: require("../../../assets/dabloons2.jpg"),
      username: "Dabloons",
    },
    {
      url: require("../../../assets/smile.jpg"),
      username: "Smiley cat",
    },
    {
      url: require("../../../assets/smile.jpg"),
      username: "Smiley cat",
    },
  ];

  const renderItem = ({ item }) => (
    <Post profilePic={item.url} userName={item.username} postImage={item.url} />
  );

  return (
    <View style={storiesListStyle.container}>
      <FlatList
        data={postList}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
        horizontal={false}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
}
