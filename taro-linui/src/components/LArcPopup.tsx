import React from 'react'
import {View,ScrollView} from '@tarojs/components'
import {LPopup} from './LPopup'
import classnames from 'classnames'
import { CommonEvent } from '@tarojs/components/types/common'

import '../../style/LArcPopup.less'

export interface LArcPopupProps  {
  className?: string
  children?:React.ReactNode
  /**自定义header，注意放入一个React */
  header?:React.ReactNode|string
  style?:React.CSSProperties
  /**控制弹窗，默认隐藏 */
  show?:boolean
  /** 最大的高度 默认300px*/
  maxHeight?:number
  /** 最小的高度 默认100px*/ 
  minHeight?:number
  /** 顶部弧度大小，默认9px */
  arcRadius?:number 
  /**动画效果的显示、隐藏，默认打开true */
  transition?:boolean
  /** 是否把背景锁定 */
  locked?:boolean
  /**背景的透明度，默认0.4 */
  opacity?:number
  /** 默认的弹出方向，顶部或者底部，默认是 bottom底部弹出 */
  direction?:"top"|"bottom"
  /**header是否自动吸顶，默认为 true */
  headerFixed?:boolean 
  /**层级，默认是99 */
  zIndex?:number 
  /**
   * 元素被关闭触发的事件
   * 一般点击背后的模态框会触发该事件
   */
  onClose?: (event?: CommonEvent) => void
} 

/** 获得arc的样式 */
const getArcPopupStyle = ({direction,arcRadius,maxHeight,minHeight})=> ({
  borderBottomLeftRadius:direction === 'top' ? arcRadius : 0,
  borderBottomRightRadius:direction === 'top' ? arcRadius : 0,
  borderTopLeftRadius:direction === 'bottom' ? arcRadius : 0,
  borderTopRightRadius:direction === 'bottom' ? arcRadius : 0,
  maxHeight,minHeight
})


const LArcPopup : React.FC<LArcPopupProps> = props=>{
  const {
    className,
    style,
    children,
    header,
    show=false,
    direction="bottom",arcRadius=9,maxHeight=300,minHeight=100,
    transition,
    opacity=0.4,
    locked=false,
    zIndex=99,
    onClose,
    headerFixed=true
  } = props
  const arcStyle = getArcPopupStyle({direction,arcRadius,maxHeight,minHeight})
  return <LPopup 
  show={show} 
  direction={direction} 
  transition={transition} 
  locked={locked} 
  opacity={opacity}
  zIndex={zIndex} 
  className={className}
  style={style}
  onClose={onClose}
>
  <ScrollView
    scrollY
    className="arc-popup l-panel-class" 
    style={arcStyle} 
  >
    <View className= {classnames('header-popup','l-header-class"',
    {'fixed':headerFixed})} >
     {header}
    </View>
    <View className="content-arc-popup">
      {children}
    </View>
  </ScrollView>
</LPopup>
}  

export {LArcPopup}