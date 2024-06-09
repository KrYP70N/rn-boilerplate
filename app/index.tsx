import LoadingComponent from "@/components/loading.component";
import P from "@/components/p.component";
import { colors } from "@/constants";
import { fetchTodo } from "@/hooks/service/todo";
import { useHTTP } from "@/hooks/useHTTP";
import { useSampleStore } from "@/store/test.store";
import { layout } from "@/style";
import { Link } from "expo-router";
import { Text, TouchableHighlight, View } from "react-native";

export default function Home() {
  const testData = useSampleStore((state) => state.testData)
  const change = useSampleStore((state) => state.change)
  const {data, isLoading, isSuccess} = useHTTP('todo', fetchTodo())

  if(isLoading) {
    return <LoadingComponent />
  }

  if(isSuccess) {
    console.log(data)
  }

  return (
    <View style={layout.screen}>
      <P color="textHighlight" size="lg">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident alias sint aliquid unde eum, quo quas in nostrum officia facilis aperiam reiciendis laboriosam veritatis illum iusto nulla voluptatem dignissimos amet.</P>
      <Text style={{color: colors.light.text}}>{testData}</Text>
      <TouchableHighlight onPress={() => change(5)}>
        <Text>Change</Text>
      </TouchableHighlight>
      <Link href='sub'>Go to sub</Link>
    </View>
  )
}
