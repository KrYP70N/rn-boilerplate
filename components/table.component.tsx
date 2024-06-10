import { colors, sizes, TABLE, TABLE_TITLE_CELL } from "@/constants";
import Grid from "./grid.component";
import P from "./p.component";
import { View } from "react-native";
import If from "./if.component";
import { general } from "@/style";

function TableHeader({data}: {data: TABLE_TITLE_CELL[]}) {
  return (
    <Grid style={general.tableHeader} col={data.length}>
      {
        data?.map((item: TABLE_TITLE_CELL) => {
          return (
            <View>
              <P align="center" style={general.tableHeaderCell}>{item.display}</P>
            </View>
          )
        })
      }
    </Grid>
  )
}

export default function Table({data, title}: TABLE) {
  return (
    <>
      <If state={title && title.length > 0}>
        <TableHeader data={title as TABLE_TITLE_CELL[]} />
      </If>
    </>
  )
}