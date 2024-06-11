import { GRID, GRID_CONTEXT, sizes } from "@/constants";
import { Children, isValidElement, ReactNode, useCallback, useState } from "react";
import { LayoutChangeEvent, View } from "react-native";

const ViewWrapper = ({context, width, margin, odd}: GRID_CONTEXT) => {
  const isValid = isValidElement(context)
  const ele = context as any

  if(!isValid) {
    throw new Error('Invalid child element at Grid.')
  }

  return (
    <View style={{...ele.props.style, width: ele.props.span ? width * ele.props.span: width, marginRight: odd ? 0 : margin, marginBottom: margin}}>
      {context}
    </View>
  )
}

export default function Grid({children, col, gap, style}: GRID) {

  const [dimenstion, setDimension] = useState({
    width: 0,
    margin: 0
  })
  
  const gridStyle = {
    flexDirection: 'row',
    flexWrap: 'wrap',
    ...style
  } as const

  // calculate layout width
  const calcWidth = useCallback((e: LayoutChangeEvent) => {
    const {width} = e.nativeEvent.layout
    if(!col || col === 1) {
      setDimension({
        ...dimenstion,
        width
      })
    } else {
      setDimension({
        ...dimenstion,
        width: (width - ((col - 1) * sizes[gap || 'empty'])) / col,
        margin: sizes[gap || 'empty']
      })
    }
  }, [])
  
  return (
    <View style={gridStyle} onLayout={calcWidth}>
      {
        Children.map(children, (child, id) => {
          return (
            <ViewWrapper context={child} width={dimenstion.width} margin={dimenstion.margin} odd={(id + 1) % col === 0 }/>
          )
        })
      }
    </View>
  )
}

export function Col({children}: {children: ReactNode, span?: number}) {
  return (
    <View>
      {children}
    </View>
  )
}