import React, { Children } from 'react'
import {View} from '@tarojs/components'
import classnames from 'classnames'
import { CommonEvent } from '@tarojs/components/types/common'

import '../../style/LMask.less'

export interface LMaskProps  {
  className?: string
  children?:React.ReactNode
  style?:React.CSSProperties
  show?:boolean 
  /** 透明度  默认0.4 */
  opacity?:number
  /** 层级，默认为99 */
  zIndex?:number 
  /** 嵌套的内容是否居中显示，默认为true */
  center?:boolean
  /** 背景是否锁定 ，默认为false，若为true，则点击背景无法触发onClose事件*/ 
  locked?:boolean 
    /** 导航栏的颜色 */
  NavColor?:string
  /**
 * 元素被关闭触发的事件
 * 一般点击背后的模态框会触发该事件
 */
onClose?: (event?: CommonEvent) => void
}

const LMask : React.FC<LMaskProps> = props=>{
  const {
    zIndex=99,
    show=false,
    opacity=.4,
    center=true,
    locked=false,
    children,
    onClose
  } = props
  let containerStyle : any = {zIndex}
  if(show){
    containerStyle.background = 'rgba(0,0,0,' + opacity+ ')'
  }
  return <View
    onClick={()=>(!locked) && onClose && onClose()}
    className={classnames('container-mask',{center:center,'mask-hidden':!show})}
    style={containerStyle}
  >
    <View onClick={e=>e.stopPropagation()} className='mask-content l-mask-class' >
      {children}
    </View>
  </View>
}  

export {LMask}