import React, {  } from 'react'
import {View,Block,Text,Image} from '@tarojs/components'
import classnames from 'classnames'
import { CommonEvent } from '@tarojs/components/types/common'
import {LButton} from './LButton'

import '../../style/LStatusShow.less'

const _defaultType = {
  'success':{
    typeImage: require('../../assert/status-show/image/success.png'),
    typeText: '操作成功~'
  },
  'error':{
    typeImage: require('../../assert/status-show/image/error.png'),
    typeText: '操作失败~'
  },
  'cart':{
    typeImage: require('../../assert/status-show/image/cart.png'),
    typeText: '购物车空空如也，去逛逛吧~'
  },
  'order':{
    typeImage: require('../../assert/status-show/image/order.png'),
    typeText: '您暂时还没有订单哦~'
  },
  'network':{
    typeImage: require('../../assert/status-show/image/network.png'),
    typeText: '糟糕！网络错误~'
  },
  'address':{
    typeImage: require('../../assert/status-show/image/address.png'),
    typeText: '您暂时还没有地址哦~'
  },
  'product':{
    typeImage: require('../../assert/status-show/image/product.png'),
    typeText: '暂时还没有商品哦~~'
  },
  'data':{
    typeImage: require('../../assert/status-show/image/data.png'),
    typeText: '暂时还没有相关数据哦~~'
  },
}
export interface LStatusShowProps  {
  className?: string
  /**
   * 自定义页面内容
   */
  children?:React.ReactNode
  style?:React.CSSProperties,
  /** 显示状态 */
  show?:boolean 
  /** 自定义内容 */
  custom?:boolean
  /** 背景颜色  默认#fff白色 */ 
  bgColor?:string 
  /** 类型，用于展示内置的状态页 */
  type?:'success'|'error'|'cart'|'order'|'network'|'address'|'product'|'data'
  /** 图片 */
  image?:string
  /** 关注文本 */
  describe?:string
  /** 按钮的文本 */
  buttonText?:string 
  /** 是否全屏展示，默认全屏true */
  fullScreen?:boolean
  /** 点击按钮事件 */
  onClickButton?:(event?: CommonEvent) => void
  // openApi 是否将组件注册成全局api的方法
}

//注册一个Taro全局方法

const LStatusShow : React.FC<LStatusShowProps> = props=>{
  const {
    type = 'success',
    image,
    describe,
    buttonText,
    bgColor = '#fff',
    fullScreen = true,
    show=false, 
    children,
    custom = false ,
    onClickButton
  } = props
  const {typeText,typeImage} = _defaultType[type]
  if(!show) return null 
  return  <View  className={classnames('LStatusShow',{content:fullScreen})}
    style={{backgroundColor:bgColor,alignItems:fullScreen?'center':'left'}}
  >
    {custom && children}
    {!custom && (<Block>
      {image && <Image 
        className={classnames('left-img','l-image-class',{
          'image_margin_top':fullScreen
        })}  src={image}
      />}
      {
        !image && <Image className={classnames('l-image-class',type=='success'||type=='error'?'left-img':'top-img',{
          'ad-img':type=='address',
          'image_margin_top':fullScreen
        })}  src={typeImage}
        />
      }
    
      {describe && <Text  className='status-text l-describe-class'>{describe}</Text>}
      {!describe && <Text className='status-text l-describe-class'>{typeText}</Text>}
      {buttonText && <LButton onClick={onClickButton} className='l-button-class button_margin_top'>
        <View>{buttonText}</View>
      </LButton>}
      {!buttonText && type ==='network' && <LButton onClick={onClickButton} className='l-button-class button_margin_top'>
        <View>重新加载</View>
      </LButton>}
      {!buttonText && type ==='cart' &&  <LButton onClick={onClickButton} className='l-button-class button_margin_top' >
        <View>去逛逛</View>
      </LButton>}
      {/* 自定义按钮内容 */}
      {children}
    </Block>)}
  </View>
}

export {LStatusShow}