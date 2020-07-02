import React from 'react'
import {View,Image,Navigator,Text} from '@tarojs/components'

import './index.less'

export interface DetailNaviCardProps  {
  className?: string
  children?:React.ReactNode
  style?:string|React.CSSProperties|undefined,
  title?:string,
  icon:string
  desc?:string
  componentsPath?:string
}

const DetailNaviCard : React.FC<DetailNaviCardProps> = props=>{
  const {
    title,
    desc,
    icon,
    componentsPath
  } = props
  return  <Navigator url={componentsPath}>
  <View className="DetailNaviCard">
    <View className="detail-left">
      <Image src={icon} className="detail-icon" />
      <View className="detail-content">
        <Text className="detail-navi-name"> {title}</Text>
        <Text className="detail-navi-desc"> {desc}</Text>
      </View>
    </View>
    <Image className="navi-button" src={require("../../images/right-arrow.png")} />
  </View>
</Navigator>

}  

export default DetailNaviCard