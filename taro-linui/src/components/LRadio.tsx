import React from 'react'
import { View,Label,Radio } from '@tarojs/components'
import {RadioProps} from '@tarojs/components/types/Radio'
import classnames from 'classnames'


import '../../style/LRadio.less'

export interface LRadioProps extends RadioProps {
  className?: string
  children?: React.ReactNode 
  style ?: string| React.CSSProperties
  size?:string|number 
  /** 自定义组件样式 */
  custom?:boolean 
  /** 自定义图标 */
  customIcon?:React.ReactNode
  /** 配色 */
  color?:string
  /** 选中的颜色 */
  selectColor?:string
  /** 禁用后的颜色 */
  disabledColor?:string
  /** 布局方式 */
  placement?:'left'|'right'|string
  /** 动画 */
  transition?:boolean 
  onChange?:(value:boolean)=>void
}

const LRadio: React.FC<LRadioProps> = props => {
  const {
    className,style,
    checked,
    color='#ccc',
    selectColor='#3963BC',
    disabledColor='#ccc',
    placement='left',
    transition=true ,
    disabled=false,
    custom=false,
    size,
    customIcon,
    children,
    onChange
  } = props
  return <View  
    className={classnames(className,'label','label-' + placement,
      disabled?'label-disabled l-disabled-class':'l-class'
    )}
    style={style}
    onClick={()=>{
      if((!disabled) && onChange) onChange(!checked)
    }}
  >
    <View className='radio'
      style={{
        color:checked?selectColor:(disabled?disabledColor:color) , 
        fontSize:size
      }}
    >
      {custom ? customIcon : <View
        className={classnames('l-radio-iconfont',checked?'icon-select':'icon-unselect')}
      />}
    </View>
    {children}
  </View>
}

export { LRadio }