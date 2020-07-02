import React from 'react'
import {View,Text} from '@tarojs/components'

import './index.less'

export interface NaviTitleProps  {
  className?: string
  children?:React.ReactNode
  style?:string|React.CSSProperties|undefined,
  title?:string,
  count?:number|string
}

const NaviTitle : React.FC<NaviTitleProps> = props=>{
  const {
    title,
    count
  } = props
  return  <View className='naviTitle'>
  <View className="title-left">
    <View className="line"></View>
    <Text className="title-left-text">{title}</Text>
  </View>
  <View className="count">
    <Text >{count}</Text>
  </View>
</View>

}  

export default NaviTitle