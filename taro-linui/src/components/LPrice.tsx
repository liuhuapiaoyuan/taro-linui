/**
 * 价格组件
 */
import React from 'react'
import {View,Text} from '@tarojs/components'
import classnames from 'classnames'

import '../../style/LPrice.less'

/**
 * 自动计算是否将数字格式化，并且保留一定的小数点
 * @param value 
 * @param mode 
 * @param reserveDigit 
 * @param autofix 
 */
const  reserveNumber=(value:string|number,mode:'number'|'Text',reserveDigit:number,autofix:boolean):string|number=>{
  const countToNumber = Number(value);
  // eslint-disable-next-line no-restricted-globals
  const isText = isNaN(countToNumber) || (mode === 'Text');
  if (!isText && autofix) {
    return countToNumber.toFixed(reserveDigit);
  } else {
    return value
  }
}

export interface LPriceProps  {
  className?: string
  children?:React.ReactNode
  style?:string|React.CSSProperties|undefined
  /** 单位，默认是￥ */
  unit?:string
  /** 尺寸，默认是 28px */
  size?:number|string 
  /** 字体颜色，默认是： #3963BC*/
  color?:string 
  /** 字体加粗，默认500 */
  bold?:number 
    /** 单位颜色 */
  unitColor?:string,
  /** 单位字体 */
  unitSize?:string|number
  /** 单位字体加粗 */
  unitBold?:number
    /** 显示的数值，比填 */
  value:string|number
  /** 显示的模式，默认是number */
  mode:'number'| 'Text'
  valueColor?:string,
  /** 保留的小数点位数，默认2 */
  reserveDigit?:number 
  valueSize?:number|string 
  valueBold?:number 
  /** 是否携带删除线，默认是 false */
  deleted?:boolean
  /** 删除线的颜色 */
  delColor?:string 
  /** 自动修正文本小数点？默认false */
  autofix?:boolean 
}

const LPrice : React.FC<LPriceProps> = props=>{
  const {
    color='#3963BC',
    unit='￥',
    size=14,
    delColor,
    unitSize,
    unitBold,
    bold=500,
    unitColor,
    deleted,
    reserveDigit=2,
    autofix=true,
    value,
    valueBold,
    valueSize,
    valueColor,
    mode='number'
  } = props
  const result = reserveNumber(value,mode,reserveDigit,autofix)
  return  <View className={classnames('price-container','l-class',deleted ? 'price-del l-deleted-class' : '')}
    style={{color:delColor?delColor:color}}
  >
    <Text className='l-unit-class'   style={{
      color:unitColor?unitColor:color,
      fontSize:unitSize?unitSize:size,
      fontWeight:unitBold?unitBold:bold
    }}
    >{unit}</Text>
    <Text className='l-value-class' style={{
      color:valueColor?valueColor:color,
      fontSize:valueSize?valueSize:size,
      fontWeight:valueBold?valueBold:bold
    }} 
    >{result}</Text>
  </View>
}  

export {LPrice}