import Button from "@/components/button.component";
import Card from "@/components/card.component";
import Grid, { Col } from "@/components/grid.component";
import Input from "@/components/input.component";
import LoadingComponent from "@/components/loading.component";
import P from "@/components/p.component";
import ScreenContainer from "@/components/screen-container.component";
import Table from "@/components/table.component";
import { sizes } from "@/constants";
import { users } from "@/constants/data";
import { fetchTodo } from "@/hooks/service/todo";
import { useHTTP } from "@/hooks/useHTTP";
import { useSampleStore } from "@/store/test.store";
import { Link } from "expo-router";

export default function Home() {
  const testData = useSampleStore((state) => state.testData)
  const change = useSampleStore((state) => state.change)
  const {data, isLoading, isSuccess} = useHTTP('todo', fetchTodo())

  if(isLoading) {
    return <LoadingComponent />
  }

  return (
    <ScreenContainer>
      <Grid col={2} gap="xxs" style={{mrginBottom: sizes.sm}}>
        <Col span={1.6}>
          <Input placeholder="Serch ..." radius="sm"/>
        </Col>
        <Col span={0.4}>
          <Button press={() => alert('fap')} text="Search" align="center" radius="sm"/>
        </Col>
      </Grid>

      <Card radius="xxs">
        <Table title={[{key: 'name', display: 'Name'}, {key: 'rank', display: 'Bananas'}, {key: 'bananas', display: 'Bananas'}]} data={[]}/>
      </Card>
    
      {/* <Link href='sub'>Go to sub</Link> */}
    </ScreenContainer>
  )
}
