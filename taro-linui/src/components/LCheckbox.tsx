import React, { Children } from 'react'
import {View,Label,Checkbox} from '@tarojs/components'
import classnames from 'classnames'
import { ViewProps } from '@tarojs/components/types/View'

 

import '../../style/LCheckbox.less'
/**
 * 选择框
 */
export interface LCheckboxProps  {
  className?: string
  children?:React.ReactNode
  /** 自定义的图标 */
  customIcon?:React.ReactNode
  /** 自定义选中的图标 */
  customSelectIcon?:React.ReactNode
  style?:string|React.CSSProperties|undefined
  /** 选择框的位置，默认是left*/
  placement?:'left'|'right'
  /** 是否允许自定义图标，默认false */
  custom?:boolean 
  // key,cell
  /**尺寸大小，默认 38px*/
  size?:number 
  /** 是否禁用 */
  disabled?:boolean 
  /** 选中后的颜色 默认#3963BC*/
  selectColor?:string 
  /** 禁用的颜色 默认#ccc*/
  disabledColor?:string 
  /** 正常颜色，默认#ccc */
  color?:string 
  /** 是否选中 */
  checked?:boolean ,
  value?:string|number,
  onClick?:ViewProps['onClick']
}

const LCheckbox : React.FC<LCheckboxProps> = props=>{
  const {
    children,
    custom=false,
    customIcon,
    customSelectIcon,
    checked=false,
    placement='left',
    disabled=false ,
    size=19,
    selectColor='#3963BC',
    disabledColor='#ccc',
    color='#ccc',
    onClick
  } = props
  //如果有value，则全部给value处理 ,否则交给checked处理

  return  <View onClick={e=>(!disabled) && onClick &&  onClick(e)} className={classnames(
    'label',
    'label-'+placement,
    'label-placement-'+placement,
    disabled ? 'label-disabled l-disabled-class' : 'l-class')}
  > 
    <View className='checkbox' style={{
      fontSize:size,
      color:checked ? selectColor : (disabled ? disabledColor : color),
    }}
    >
      {custom && (checked ? customIcon : customSelectIcon)}
      {!custom && <View style={{fontSize:size}}
        className={classnames('iconfont',checked? 'icon-select': 'icon-unselect')}
      />
      }
    </View>
    {children}
  </View>
}  

export {LCheckbox}