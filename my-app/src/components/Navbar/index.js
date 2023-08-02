import { View, Image } from "react-native";
import headerStyle from "./style";
import { Story } from "../UI/Story";
export function Navbar() {
  const magnifier = require("../../../assets/lupa.png");
  const reels = require("../../../assets/playreels.png");
  const home = require("../../../assets/home.png");
  const shop = require("../../../assets/shop.png");
  const profilepic = require("../../../assets/pochita1.png");
  return (
    <View style={headerStyle.container}>
      <Image source={home} style={headerStyle.actionButtons} />
      <Image source={magnifier} style={headerStyle.actionButtons} />
      <Image source={reels} style={headerStyle.actionButtons} />
      <Image source={shop} style={headerStyle.actionButtons} />
      <View style={headerStyle.storyContainer}>
        <View style={headerStyle.storyProfile}>
          <Image
            source={profilepic}
            style={headerStyle.storyProfileImage}
          ></Image>
        </View>
      </View>
    </View>
  );
}
