import Button from "@/components/button.component";
import Grid, { Col } from "@/components/grid.component";
import LoadingComponent from "@/components/loading.component";
import P from "@/components/p.component";
import ScreenContainer from "@/components/screen-container.component";
import { colors } from "@/constants";
import { fetchTodo } from "@/hooks/service/todo";
import { useHTTP } from "@/hooks/useHTTP";
import { useSampleStore } from "@/store/test.store";
import { layout } from "@/style";
import { Link } from "expo-router";
import { ScrollView, Text, TouchableHighlight, View } from "react-native";

export default function Home() {
  const testData = useSampleStore((state) => state.testData)
  const change = useSampleStore((state) => state.change)
  const {data, isLoading, isSuccess} = useHTTP('todo', fetchTodo())

  if(isLoading) {
    return <LoadingComponent />
  }

  return (
    <ScreenContainer>
      <Grid col={2} gap="xxs">
        <Col>
          <P>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</P>
        </Col>
      </Grid>
      <Button press={() => alert('fap')} text="hello world" align="center" radius="sm"/>
      <Link href='sub'>Go to sub</Link>
    </ScreenContainer>
  )
}
