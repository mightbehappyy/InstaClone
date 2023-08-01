import { StyleSheet } from "react-native";

const postStyle = StyleSheet.create({
  container: {
    paddingTop: 20,
    paddingBottom: 100,
    height: 400,
  },
  postImage: {
    height: "100%",
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
    marginVertical: 20,
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
    width: 50,
    height: 50,
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
});
export default postStyle;
