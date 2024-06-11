import { Image, View } from "react-native";
import P from "./p.component";
import { images } from "@/constants";
import { general } from "@/style";

export default function BananaIndicator({count}: {count: number}) {
  let icon 

  if(count < 100) {
    icon = images.banana
  } else if(count < 1000) {
    icon = images.poorBanana
  } else {
    icon = images.richBanana
  }

  return (
    <View style={general.bananaContainer}>
      <Image style={general.bananaIcn} source={icon} resizeMode="contain"/>
      <P style={general.bananaCount}>{count.toLocaleString('en-us')}</P>
    </View>
  )
}