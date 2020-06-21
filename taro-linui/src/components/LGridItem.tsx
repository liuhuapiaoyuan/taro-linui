import React from 'react'
import {View} from '@tarojs/components'
import classnames from 'classnames'
import { CommonEvent } from '@tarojs/components/types/common'

import '../../style/LGridItem.less'

export interface LGridItemProps  {
  className?: string
  children?:React.ReactNode
  style?:React.CSSProperties
  /**
   * 元素被关闭触发的事件
   * 一般点击背后的模态框会触发该事件
   */
  onClick?: (event?: CommonEvent) => void
}

const LGridItem : React.FC<LGridItemProps> = props=>{
  const {
    className,
    style,
    children,
    onClick
  } = props
  return  <View  style={style}
    className={classnames("l-grid-item","l-grid-item-class","grid-item",className)}
   onClick={onClick}>
  {children}
</View>
}  

export {LGridItem}