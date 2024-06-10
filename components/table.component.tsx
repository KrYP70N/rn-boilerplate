import { TABLE, TABLE_TITLE_CELL } from "@/constants";
import Grid from "./grid.component";
import P from "./p.component";
import { View } from "react-native";
import If from "./if.component";
import { general } from "@/style";

function TableHeader({data}: {data: TABLE_TITLE_CELL[]}) {
  return (
    <Grid style={general.tableHeader} col={data.length}>
      {
        data?.map((item, id) => {
          return (
            <View key={id}>
              <P style={general.tableCell}>{item.display?.toUpperCase()}</P>
            </View>
          )
        })
      }
    </Grid>
  )
}

function TableBody({data, mapping}: {data: object[], mapping: TABLE_TITLE_CELL[]}) {
  return (
    <>
      {
        data.map((item: any, id) => {
          return (
            <Grid style={{...general.tableRow, ...item.option?.style?.row}} col={3} key={id}>
              {
                mapping.map((key, id) => {
                  return <P key={id} size="xxs" style={{...general.tableCell, ...item.option?.style?.cell}}>{item[key.key]}</P>
                })
              }
            </Grid>
          )
        })
      }
    </>
  )
}

export default function Table({data, title}: TABLE) {
  return (
    <If state={title && title.length > 0 && data.length > 0}>
      <TableHeader data={title as TABLE_TITLE_CELL[]} />
      <TableBody data={data} mapping={title as TABLE_TITLE_CELL[]}/>
    </If>
  )
}