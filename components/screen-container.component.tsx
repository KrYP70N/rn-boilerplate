import { colors } from "@/constants";
import { layout } from "@/style";
import { ReactNode } from "react";
import { ScrollView } from "react-native";

export default function ScreenContainer({children}: {children: ReactNode})  {
  return (
    <ScrollView style={layout.scroll}>
      {children}
    </ScrollView>
  )
}