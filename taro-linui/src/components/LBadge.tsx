import React from 'react'
import {View} from '@tarojs/components'
import { ViewProps } from '@tarojs/components/types/View'

import classnames from 'classnames'
 
import '../../style/LBadge.less'

/**
 * 对数字进行格式化显示
 * @param value 
 * @param maxCount 
 * @param numberType 
 */
const calculateNumberShow = (value:number,maxCount:number,numberType?:'overflow'| 'limit'| 'ellipsis')=>{
  switch (numberType) {
  case 'overflow':
    return  value > maxCount ? `${maxCount}+` : value
  case 'ellipsis':
    return  value > maxCount ? '...' : value
  case 'limit':
    return  value > 999 ? (value >= 9999 ? Math.floor(value / 10000 * 100) / 100 + 'w' : Math.floor(value / 1000 * 100) / 100 + 'k') : value
  default:
    return value
  }
}

export interface LBadgeProps  {
  className?: string
  children?:React.ReactNode
  style?:React.CSSProperties
  /** 只显示红点，默认false */
  dot?:boolean
  /** 红点形状，默认为horn */
  shape?:'horn'|'circle'
  /** 显示内容，默认是0 */
  value?:string|number
  /** 模式，默认为数字number模式 */
  mode?:'number'|'text'  
  /** 最大的显示数字，超出则显示... 默认：99*/
  maxCount?:number 
  /** 数字展现形式，默认 overflow */
  numberType?:'overflow'| 'limit'| 'ellipsis'
  /** 显示/隐藏。 默认为true，显示 */
  show?:boolean ,
  onClick?:ViewProps['onClick']
}

const LBadge : React.FC<LBadgeProps> = props=>{
  const {
    mode='number',
    value='0',
    show=true,
    numberType='overflow',
    maxCount=99,
    shape='horn',
    dot=false,
    style,
    className,
    onClick,
    children
  } = props
  const isNumber = mode=='number' && (!isNaN(Number(value)))
  const finalCount = isNumber ? calculateNumberShow(Number(value),maxCount,numberType) : value
  return  <View  className={classnames('l-badge',className)} style={style} onClick={onClick}>
    {children}
    {
      show && <>
        {dot && <View  className='l-badge-dot  l-class l-class-self l-self-class' />}
        {!dot && <View  
          className={classnames('l-badge-content-'+shape,'l-class','l-badge-content','l-class-self','l-self-class')}
        >{finalCount}</View>}
      </>
    } 
  </View> 
}  

export {LBadge}