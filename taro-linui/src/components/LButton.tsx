import React from 'react'
import {View,Label,Button} from '@tarojs/components'
import { ButtonProps as _ButtonProps } from '@tarojs/components/types/Button'
import classnames from 'classnames'
import {LIcon} from './LIcon'
import { px } from '../px'
import '../../style/LButton.less'


export interface LButtonProps  extends Omit<_ButtonProps, 'size' | 'type'>{
    className?: string
    children?:React.ReactNode
    style?: React.CSSProperties|string|undefined
    /** 组件的类型 */
    type?:'warning'|'success'|'error'|'default'
    /** 是否是镂空按钮 */
    plain?:boolean 
    /** 按钮尺寸 */
    size?:'medium'|'large'|'mini'|'long'
    /** 按钮形状 方形，圆弧形，半圆形，默认为圆弧形 */
    shape?:'square'| 'circle'| 'semicircle'
    /** 是否禁用 */
    disabled?:boolean 
    /** 是否自定义按钮内容 */
    special?:boolean
    /** 加载状态 */
    loading?:boolean
     // 微信原生接口
     /** 按钮的宽度 */
     width?: number
     /** 按钮的高度 */
     height?: number
     /** 图标 */
     icon?: string
     /** 自定义图片图标 */
     image?: string
     /** 按钮背景色 */
     bgColor?: string
     /** 图标颜色 */
     iconColor?: string
     /** 图标尺寸,默认为24rpx */
     iconSize?: string|number
    //  /** 是否绑定opentype */
    //  openType?: string
    //  appParameter?: string
    //  lang?: string
    //  hoverStopPropagation?: ViewProps['hoverStopPropagation']
    //  hoverStartTime?: number
    //  hoverStayTime?: number
    //  sessionFrom?: string
    //  sendMessageTitle?: string,
    //  sendMessagePath?: string,
    //  sendMessageImg?: string,
    //  showMessageCard?: boolean,
    //  formType?: string
  }
   

const LButton : React.FC<LButtonProps> = props=>{
  const {
    // name
    shape='circle'
    ,type='default'
    ,size='medium'
    ,plain=false
    ,disabled=false
    ,special=false
    ,loading=false
    ,icon
    ,iconColor 
    ,iconSize=24
    ,hoverStartTime
    ,hoverStayTime
    ,hoverStopPropagation
    ,width
    ,height
    ,bgColor
    ,children
    ,style
    ,className
    ,...rest
  } = props
  let btnStyle:any = {
    backgroundColor:bgColor
  }
  if(size=='long'){
    btnStyle.borderRadius = 0
  }
  if(width){
    btnStyle.minWidth = px(width)
  }
  if(height){
    btnStyle.minHeight = px(height)
    btnStyle.lineHeight = px(height)
  }
  return (
    <Label 　className={classnames('l-label-class',className)} style={style}>
      {special &&<View className='special-container l-class'>
        {children}
      </View>}
      {!special &&<View 
        className={classnames('l-btn','l-btn-' + size,'l-btn-' + type
          ,'l-btn-' + shape
          ,{
            'l-btn-plain':plain,
            'l-btn-disabled':disabled,
          })}
        hoverClass={disabled?'':'btn-hover l-hover-class'}
        hoverStopPropagation={hoverStopPropagation}
        hoverStartTime={hoverStartTime}
        hoverStayTime={hoverStayTime}
        style={btnStyle}
      >
        {loading && <View className={
          classnames('l-btn-loading','margin-'+size,{
            [`l-btn-loading-${type}`]:plain
          })}
        />}
        {icon && <LIcon  className={classnames('l-icon-class',)}   name={icon} color={iconColor} size={iconSize} />}
        {children}
      </View>} 
      <Button {...rest}
        style='position: absolute;top: -999px;left: -999px;'
      />
    </Label>
  )
}  
LButton.defaultProps ={
}
export {LButton}
 
