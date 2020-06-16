import React from 'react'
import {View} from '@tarojs/components'
import classnames from 'classnames'
import { CommonEvent } from '@tarojs/components/types/common'

import '../../style/LPopup.less'

/** 弹层组件 */
export interface LPopupProps  {
  className?: string
  children?:React.ReactChild,
  style?: React.CSSProperties,
  /** 是否显示 */
  show?:boolean 
  /** 是否带有动画效果,默认开启 */
  animation?:boolean 
  /** 是否用transition 替代animation ，默认为null */
  transition?:boolean 
  /** 弹出的方向 ，默认为center*/
  direction?:"top"| 'right'| 'left'| 'bottom'| 'center'
  /** 是否锁定 */
  locked?:boolean 
    /** 弹层的层级，默认为777 */
  zIndex?:number
/**
 * 元素被关闭触发的事件
 * 一般点击背后的模态框会触发该事件
 */
onClose?: (event?: CommonEvent) => void
}

const LPopup : React.FC<LPopupProps> = props=>{
  const {
    show=false ,
    animation=true ,
    transition=null,
    zIndex=777,
    direction='center',
    children,
    onClose=()=>1
  } = props
  const status = show?'show':'hide'
  return  <View className={classnames('container-popup',"l-popup-" + direction,{
      'popup-show':show
  })} 
  style={{zIndex}}>
<View   className='container-bg l-bg-class'　/>
{show &&<View onClick={onClose}  className={classnames('popup-content','l-panel-class'
    ,`popup-fade-${direction}-active-${(transition===null?animation:transition) ? status:''}`
    ,{
      [direction]:show,
  })}  
　>
    <View onClick={e=>e.stopPropagation()}>
    {children}
    </View>
</View>
}  
</View>
}

export {LPopup}