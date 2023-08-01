import { StyleSheet } from "react-native";

const headerStyle = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginTop: 10,
    maxHeight: "10%",
    justifyContent: "space-around",
    alignItems: "center",
  },
  instagramLogo: {
    maxHeight: "90%",
    maxWidth: "35%",
    resizeMode: "contain",
    marginVertical: 30,
    marginHorizontal: 50,
    marginRight: 150,
  },
  actionButtons: {
    height: "45%",
    maxWidth: "10%",
    resizeMode: "contain",
    marginVertical: 20,
    marginHorizontal: 40,
  },
  actionButtonView: {},
});
export default headerStyle;
