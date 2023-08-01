import { Image, View, Text } from "react-native";
import postContainer from "./style";
export function Post({ profilePic, userName, postImage }) {
  const testImage = require("../../../../assets/Chainsaw.jpg");
  const likeImage = require("../../../../assets/instagramHeartDark.png");
  const shareImage = require("../../../../assets/instagramMessage.png");
  const commentImage = require("../../../../assets/commentBubble.png");
  return (
    <View style={postContainer.container}>
      <View style={postContainer.postHeader}>
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "row",
          }}
        >
          <View style={postContainer.storyContainer}>
            <View style={postContainer.storyProfile}>
              <Image
                source={profilePic}
                style={postContainer.storyProfileImage}
              ></Image>
            </View>
          </View>
          <Text style={{ color: "white" }}>AAA</Text>
        </View>
      </View>
      <View style={postContainer.postImage}>
        <Image source={testImage} style={postContainer.postImage}></Image>
      </View>
      <View style={postContainer.postActionContainer}>
        <Image source={likeImage} style={postContainer.postActionButton} />
        <Image source={commentImage} style={postContainer.postCommentButton} />
        <Image source={shareImage} style={postContainer.postActionButton} />
      </View>
    </View>
  );
}
