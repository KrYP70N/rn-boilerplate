import Button from "@/components/button.component";
import Card from "@/components/card.component";
import Grid, { Col } from "@/components/grid.component";
import If from "@/components/if.component";
import Input from "@/components/input.component";
import P from "@/components/p.component";
import ScreenContainer from "@/components/screen-container.component";
import Table from "@/components/table.component";
import { sizes, USER_ORDER } from "@/constants";
import { getUser } from "@/store/redux/action/user.action";
import { RootState } from "@/store/redux/reducer";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function Home() {
  const [filter, setFilter] = useState<{key: string, order: USER_ORDER}>({
    key: '',
    order: 'DSC'
  })
  const [key, setKey] = useState<string>('')
  const dispatch = useDispatch()
  const tableTitle = [{key: 'rank', display: 'Rank', flex: .55}, {key: 'name', display: 'Name', flex: 1.2}, {key: 'bananas', display: 'Bananas', flex: 1.2}]

  const userData = useSelector((state: RootState) => state.users.data)

  const orderCtrl = (order: USER_ORDER) => setFilter({
    ...filter,
    order
  })

  const activeColor = (data: USER_ORDER) => filter.order === data ? "thead" : "second"

  useEffect(() => {
    dispatch(getUser(filter))
  }, [dispatch, filter])

  return (
    <ScreenContainer>
      <Card radius="sm" style={{paddingBottom: 0, marginBottom: sizes.sm}}>
        <Grid col={3} gap="sm" style={{mrginBottom: sizes.sm}}>
          <Button press={() => orderCtrl('DSC')} text="DSC Order" radius="sm" align="center" background={activeColor("DSC")} color="text" />
          <Button press={() => orderCtrl('ASC')} text="ASC Order" radius="sm" align="center" background={activeColor("ASC")}  color="text"/>
          <Button press={() => orderCtrl('FUZ')} text="Fuzzy" radius="sm" align="center" background={activeColor("FUZ")} color="text"/>
        </Grid>
        <Grid col={2} gap="sm" style={{mrginBottom: sizes.sm}}>
          <Col span={1.5}>
            <Input placeholder="Serch ..." radius="xxs" change={(val) => setKey(val)}/>
          </Col>
          <Col span={.5}>
            <Button press={() => setFilter({...filter, key})} text="Search" align="center" radius="sm"/>
          </Col>
        </Grid>
      </Card>
      
      <Card radius="xxs">
        <If state={userData?.length > 0}>
          <Table title={tableTitle} data={userData}/>
        </If>

        <If state={userData?.length === 0}>
          <P align="center" size="md">No Result Found!</P>
        </If>
      </Card>
    </ScreenContainer>
  )
}
