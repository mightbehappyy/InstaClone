import React from "react";
import { FlatList, View } from "react-native";
import storiesListStyle from "./style";
import { Story } from "../UI/Story";

export function StoriesList() {
  const userList = [
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
  ];

  const renderItem = ({ item }) => (
    <Story imageURL={item.url} userName={item.username} />
  );

  return (
    <View style={storiesListStyle.container}>
      <FlatList
        data={userList}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
}
