import React, {  } from 'react'
import {View,Block,Text,Image} from '@tarojs/components'
import Taro from '@tarojs/taro'
import classnames from 'classnames'
import {LButton} from './LButton'
import '../../style/LStatusShow.less'

export interface LStatusShowProps  {
  className?: string
  children?:React.ReactChild
  style?:React.CSSProperties,
  /** 显示状态 */
  show?:boolean 
  /** 自定义内容 */
  custom?:boolean
  /** 背景颜色  默认#fff白色 */ 
  bgColor?:string 
  /** 类型，用于展示内置的状态页 */
  type:'success'|'error'|'cart'|'order'|'network'|'address'|'product'|'data'
  /** 图片 */
  image:string
  /** 关注文本 */
  describe:string
  /** 按钮的文本 */
  buttonText:string 
  /** 是否全屏展示，默认全屏true */
  fullScreen?:boolean

  // openApi 是否将组件注册成全局api的方法
}

//注册一个Taro全局方法

const LStatusShow : React.FC<LStatusShowProps> = props=>{
  const {
    type = 'success',
    image = '',
    describe = '',
    buttonText = '',
    bgColor = '#fff',
    fullScreen = true,
    show=false, 
    children，
    custom = false 
  } = props
  if(!show) return null 
  return  <View  className={classnames('l-status-container',{content:fullScreen})}
  style={{backgroundColor:bgColor,alignItems:fullScreen?'center':'left'}}
  {custom && children}
  {!custom && (<Block>
    {image && <Image className="left-img l-image-class {{fullScreen ? 'image_margin_top': ''}}" src="{{image}}" />}
    {
      !image && <Image className={classnames("l-image-class",type=='success'||type=='error'?'left-img':'top-img',{
        'ad-img':type=='address'，
        'image_margin_top':fullScreen
      })}
      src={typeImage} />
    }
    
    <Text wx:if="{{describe}}" className="status-text l-describe-class">{{describe}}</Text>
    <Text wx:else className="status-text l-describe-class">{{typeText}}</Text>
    <LButton l-className="l-button-class button_margin_top" wx:if="{{buttonText}}">
      <View>{buttonText}</View>
    </LButton>
    <LButton l-className="l-button-class button_margin_top" wx:if="{{!buttonText && type ==='network'}}">
      <View>重新加载</View>
    </LButton>
    <LButton l-className="l-button-class button_margin_top" wx:if="{{!buttonText && type ==='cart'}}">
      <View>去逛逛</View>
    </LButton>
  </Block>)}
</View>
}  

export {LStatusShow}