import { general, layout } from "@/style";
import { Image, View } from "react-native";

export default function LoadingComponent() {
  return (
    <View style={layout.loading}>
      <Image source={require('@/assets/images/loading.gif')} style={general.loadingImage} />
    </View>
  )
}