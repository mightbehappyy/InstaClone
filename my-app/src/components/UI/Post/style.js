import { StyleSheet } from "react-native";

const postStyle = StyleSheet.create({
  container: {
    paddingTop: 20,
    flex: 1,
  },
  postImage: {
    height: 300,
    width: "100%",
  },
  postHeader: {
    flexDirection: "row",
    height: 50,
    justifyContent: "flex-start",
    alignItems: "center",
  },
  postActionContainer: {
    flexDirection: "row",
    marginTop: 10,
    maxHeight: "10%",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  postActionButton: {
    height: 30,
    maxWidth: 30,
    resizeMode: "contain",
    marginHorizontal: 5,
  },
  postCommentButton: {
    height: 25,
    maxWidth: 25,
    resizeMode: "contain",
    marginVertical: 20,
    marginHorizontal: 5,
  },
  storyContainer: {
    marginHorizontal: 10,
    height: 60,
    alignItems: "center",
  },
  storyProfile: {
    width: 45,
    height: 45,
    borderRadius: 80 / 2,
    borderWidth: 2,
    borderColor: "#f09433",
    alignItems: "center",
    justifyContent: "center",
  },
  storyProfileImage: {
    width: "95%",
    height: "95%",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 80 / 2,
  },
  postLikesContainer: {
    flexDirection: "column",
    maxHeight: "10%",
    justifyContent: "flex-end",
    marginTop: 30,
  },
  postLikes: {
    color: "white",
    height: 30,
    marginHorizontal: 10,
  },
  viewAllComments: {
    color: "grey",
    height: 15,
    marginHorizontal: 10,
  },
});
export default postStyle;
