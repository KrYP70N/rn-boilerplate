import LoadingComponent from "@/components/loading.component";
import { colors } from "@/constants";
import { fetchTodo } from "@/hooks/service/todo";
import { useHTTP } from "@/hooks/useHTTP";
import { useSampleStore } from "@/store/test.store";
import { Link } from "expo-router";
import { Text, TouchableHighlight, View } from "react-native";

export default function Home() {
  const testData = useSampleStore((state) => state.testData)
  const change = useSampleStore((state) => state.change)
  const {data, isLoading} = useHTTP('todo', fetchTodo())

  if(isLoading) {
    return <LoadingComponent />
  }

  return (
    <View>
      <Text>{JSON.stringify(data)}</Text>
      <Text style={{color: colors.light.text}}>{testData}</Text>
      <TouchableHighlight onPress={() => change(5)}>
        <Text>Change</Text>
      </TouchableHighlight>
      <Link href='sub'>Go to sub</Link>
    </View>
  )
}
