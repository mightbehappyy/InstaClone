import { View, Image, Text } from "react-native";
import storyStyle from "./style";
export function Story({ imageURL, userName }) {
  return (
    <View style={{ justifyContent: "center", alignItems: "center" }}>
      <View style={storyStyle.storyContainer}>
        <View style={storyStyle.storyProfile}>
          <Image source={imageURL} style={storyStyle.storyProfileImage}></Image>
        </View>
      </View>
      <Text style={{ color: "white" }}>{userName}</Text>
    </View>
  );
}
