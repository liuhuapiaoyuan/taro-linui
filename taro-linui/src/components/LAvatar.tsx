import React from 'react'
import {View , Text,OpenData,Image} from '@tarojs/components'
import { ImageProps } from '@tarojs/components/types/Image'
import {LIcon} from './LIcon'
import classnames from 'classnames'

import {px} from '../px'
import '../../style/LAvatar.less'

export interface LAvatarProps  {
  className?: string
  children?:React.ReactNode
  /**图标 */
  icon?:string,
  /** 图标尺寸 */
  iconSize?:string|number,
  /** 图标颜色 */
  iconColor?:string,
  /** 显示文本内容 */
  text?:string
  /** 显示图片 */
  src?:string
  /**图片位置 */
  placement?:"right"|"left"
  /** 图片尺寸，默认120px */
  size?:number
  /** 图片显示模式，默认 scaleToFill*/
  mode?:keyof ImageProps.mode
  /** 图片形状：默认为：圆形circle */
  shape?:"circle"|"square"
  /** 是否开启头像模式 */
  userAvatarUrl?:boolean
  /** 是否开启昵称模式 */
  userNickName?:boolean
}

const LAvatar : React.FC<LAvatarProps> = props=>{
  const {
     text
    ,userAvatarUrl
    ,userNickName
    ,size=60
    ,iconSize
    ,iconColor
    ,icon
    ,src
    ,mode
    ,placement
    ,shape
  } = props
  return  (
    <View  className={classnames('l-avatar',{
      [`l-placement-${placement}`]:(text||userNickName)
    })}
    // bindtap="tapAvatar"
    >
      
    <View className={classnames("l-avatar-image",{
      [`l-${shape}`]:!!shape
    })}
      style={{width:px(size),height:px(size)}}>
        {userAvatarUrl && <OpenData className="open-data" type="userAvatarUrl" />}
        {icon && <LIcon  size={iconSize || (px(size*0.6))} color={iconColor} name={icon} />}
        {src && <Image  src={src} mode={mode} 
        style={{width:px(size),height:px(size)}}/>}
    </View>
    <View className="l-avatar-text l-class-text l-text-class">
        {userNickName && <OpenData className="open-data"  type="userNickName" />}
        {text && <Text className="l-avatar-text-text"  >{text}</Text>}
    </View>
  </View>
  )
}  

LAvatar.defaultProps = {
  iconColor:"#3963BC",
  iconSize:'28px',
  placement:'right',
  size:120,
  mode:'scaleToFill',
  shape:"circle",
  userAvatarUrl:true,
  userNickName:true
}
export {LAvatar}