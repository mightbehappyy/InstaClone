import { StyleSheet } from "react-native";

const storyStyle = StyleSheet.create({
  storyContainer: {
    marginHorizontal: 10,
    height: 80,
  },
  storyProfile: {
    width: 80,
    height: 80,
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

export default storyStyle;
