import { colors } from "@/constants";
import { useSampleStore } from "@/store/test.store";
import { Text, TouchableHighlight, View } from "react-native";

export default function Sub() {
  // const direct = useSampleStore.getState().testData
  const data = useSampleStore((state) => state.testData)
  const change = useSampleStore((state) => state.change)
  return (
    <View>
      <Text style={{color: colors.light.text}}>{data}</Text>
      <TouchableHighlight onPress={() => change(5)}>
        <Text>Change</Text>
      </TouchableHighlight>
    </View>
  )
}
