import React from 'react'
import {View} from '@tarojs/components'
import classnames from 'classnames'
import { ViewProps } from '@tarojs/components/types/View'
import {px} from '../px'
import mergeStyle from '../mergeStyle'
import '../../style/LIcon.less'

export interface LIconProps  {
    className?: string
    style?: string|React.CSSProperties|undefined
    /** 图标名称 */
    name?:string,
    /** 颜色，支持CSS颜色定义 */
    color?:string,
    /** 尺寸，可以是数字也是可以字符串，注意 如果是字符串请传入尺寸单位：px,rpx */
    size?:number|string
    onClick?:ViewProps['onClick']
}
 
const LIcon : React.FC<LIconProps> = props=>{
  const {
    name,
    style={},className,
    color='#3963bc',
    size=40,onClick
  } = props
  return (<View onClick={onClick}
    className={classnames(className,'l-class l-class-self l-self-class l-icon',{
      [`l-icon-${name}`]:name
    })}
    style={mergeStyle({
      fontSize:(typeof(size)==='number')? (px(size)) : size,
      color
    },style)}
  />
  )
}  
 
export {LIcon}
 
