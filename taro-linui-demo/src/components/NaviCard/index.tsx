import React from 'react'
import {View,Text,Image} from '@tarojs/components'

import './index.less'

export interface NaviCardProps  {
  className?: string
  children?:React.ReactNode
  style?:string|React.CSSProperties|undefined,
  title?:string
  onClick?:any
  icon:string,
}

const NaviCard : React.FC<NaviCardProps> = props=>{
  const {
    title,icon,onClick
  } = props
  return  <View className="NaviCard" onClick={onClick}>
  <Image className="NaviCard-icon" src={icon} />
<Text>{title}</Text>
</View>
}  

export default NaviCard