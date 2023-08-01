import { View, Image } from "react-native";
import headerStyle from "./style";
export function Header() {
  const instagramLogo = require("../../../assets/instagramDark.png");
  const instagramHeart = require("../../../assets/instagramHeartDark.png");
  const instagramMessage = require("../../../assets/instagramMessage.png");
  return (
    <View style={headerStyle.container}>
      <Image source={instagramLogo} style={headerStyle.instagramLogo} />
      <Image source={instagramHeart} style={headerStyle.actionButtons} />
      <Image source={instagramMessage} style={headerStyle.actionButtons} />
    </View>
  );
}
