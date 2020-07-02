import React  from 'react'
import {View} from '@tarojs/components'
import classnames from 'classnames'

import './index.less'

export interface ContentCardProps  {
  className?: string
  children?:React.ReactNode
  style?:string|React.CSSProperties|undefined,
  name?:string,
  cardPadding?:boolean 
}

const ContentCard : React.FC<ContentCardProps> = props=>{
  const {
    name,children,cardPadding=true
  } = props
  return  <View className="ContentCard">
  <View className="card-top">
    <View className="card-dot"></View>
    <View className="content-name">{name}</View>
  </View>
  <View className={classnames("card-bottom","l-content",cardPadding?'card-padding':'padd')}>
   {children}
  </View>
</View>
}   

export default ContentCard