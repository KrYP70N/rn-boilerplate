import Button from "@/components/button.component";
import Card from "@/components/card.component";
import Grid, { Col } from "@/components/grid.component";
import Input from "@/components/input.component";
import ScreenContainer from "@/components/screen-container.component";
import Table from "@/components/table.component";
import { sizes } from "@/constants";
import { useGetUser } from "@/hooks/service/user";
import { getUser } from "@/store/redux/action/user.action";
import { RootState } from "@/store/redux/reducer";
import { useDispatch, useSelector } from "react-redux";

export default function Home() {
  const dispatch = useDispatch()
  const tableTitle = [{key: 'rank', display: 'Rank', flex: .55}, {key: 'name', display: 'Name', flex: 1.2}, {key: 'bananas', display: 'Bananas', flex: 1.2}]

  // redux tes
  const userData = useSelector((state: RootState) => state.users.data)

  return (
    <ScreenContainer>
      <Grid col={2} gap="xxs" style={{mrginBottom: sizes.sm}}>
        <Col span={1.6}>
          <Input placeholder="Serch ..." radius="sm"/>
        </Col>
        <Col span={0.4}>
          <Button press={async () => dispatch(await getUser(20))} text="Search" align="center" radius="sm"/>
        </Col>
      </Grid>

      <Card radius="xxs">
        <Table title={tableTitle} data={userData}/>
      </Card>
    </ScreenContainer>
  )
}
