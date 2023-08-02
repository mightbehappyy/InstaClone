import { StyleSheet } from "react-native";

const headerStyle = StyleSheet.create({
  container: {
    position: "absolute",
    bottom: 0,
    flexDirection: "row",
    marginTop: 10,
    maxHeight: "10%",
    width: "100%",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "black",
  },
  actionButtons: {
    maxHeight: "45%",
    maxWidth: "10%",
    resizeMode: "contain",
    marginVertical: 20,
  },
  storyContainer: {
    alignItems: "center",
  },
  storyProfile: {
    width: 35,
    height: 35,
    borderRadius: 80 / 2,
    borderWidth: 2,
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
export default headerStyle;
