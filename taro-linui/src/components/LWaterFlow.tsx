import React from 'react'
import {View} from '@tarojs/components'
import classnames from 'classnames'

import '../../style/LWaterFlow.less'

/** 将数据进行分组 */
function groupBy(list,columns){
  let initGroup = []
  for(let i =0;i<columns;i++){
    initGroup.push([])  
  }
  return list.reduce((pre,current,index)=>{
    pre[index%columns].push(current)
    return pre
  },initGroup)
}

export interface LWaterFlowProps  {
  className?: string
  children?:React.ReactNode
  style?:string|React.CSSProperties|undefined
  /** 列间距，默认 10px */
  columnGap?:string | number
  /** 行间距，默认 10px */
  rowGap?:string | number
/** 分为几列，默认是2列 */
  column?:number 
}
//思路？ data=>推算出左右两组分数据,然后分别渲染到两个列表之中，子类可以是任何的数组
const LWaterFlow : React.FC<LWaterFlowProps> = props=>{
  const {
    className,
    style,
    children,
    columnGap=10,
    rowGap=10,
    column=2
  } = props
  const group = groupBy(React.Children.toArray(children),column)
  return  <View style={style} className={classnames('l-class','water-flow-container',className)}>
    { 
      group.map((groupData,index)=><View 
        className='water-column' 
        style={{marginRight:index==group.length-1 ? 0 : columnGap}}
        key={index}
      >
        {groupData.map(item=>React.cloneElement(item,{style:{marginBottom:rowGap}}))}
      </View>)
    }
  </View>
}  

export {LWaterFlow}