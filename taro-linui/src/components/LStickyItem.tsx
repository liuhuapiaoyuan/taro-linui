import React from 'react'
import {View} from '@tarojs/components'
import classnames from 'classnames'

import '../../style/LStickyItem.less'

export interface LStickyItemProps  {
  className?: string
  children?:React.ReactNode
  style?:string|React.CSSProperties|undefined
}
/**
 * 和吸顶容器 LSticky搭配使用
 * @param props 
 */
const LStickyItem : React.FC<LStickyItemProps> = props=>{
  const {
  
  } = props
  return  <View>

  </View>
}  

export {LStickyItem}