import React from 'react'
import {View,Image} from '@tarojs/components'
import classnames from 'classnames'

import './index.less'

export interface ContentTitleProps  {
  className?: string
  children?:React.ReactNode
  style?:string|React.CSSProperties|undefined,
  onDoc?:any,
  name?:string,
  describe?:string,
  doc?:any 
}

const ContentTitle : React.FC<ContentTitleProps> = props=>{
  const {
    onDoc,name,describe,doc,children
  } = props
  return  <View className="ContentTitle">
  <View className="ContentTitle-name">{name}</View>
  <View className="ContentTitle-line"></View>
  <View className="ContentTitle-describe">{describe}</View>
  {children}
  {doc && <View  className="doc-container" onClick={onDoc}>
    <Image src={require('../../images/doc.png')} className='doc-img' />
  </View>}
</View>
}   

export default ContentTitle