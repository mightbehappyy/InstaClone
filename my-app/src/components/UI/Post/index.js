import { Image, View } from "react-native";
import postContainer from "./style";
export function Post() {
  const testImage = require("../../../../assets/Chainsaw.jpg");
  return (
    <View style={postContainer.container}>
      <View style={postContainer.postImage}>
        <Image source={testImage} style={postContainer.postImage}></Image>
      </View>
    </View>
  );
}
