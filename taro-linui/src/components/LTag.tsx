import React from 'react'
import {View,Image} from '@tarojs/components'
import classnames from 'classnames'

import {LIcon} from './LIcon'

import '../../style/LTag.less'

export interface LTagProps  {
    className?: string
    style?: React.CSSProperties|string|undefined
    children?:React.ReactNode
    /** 标签图片 */
    image?:string
    /** 标识：name */
    name?:string
    /** 标识：对象 */
    cell?:object
    /** 是否可点击 */
    type?:'reading'| 'touch',
    /** 背景色 */
    bgColor?:string,
    /** 字体色 */
    fontColor?:string,
    /** 点击触发回调 */ 
    onClick?:(any)=>void
    /** 标签尺寸 */
    size?:'large'| 'medium'| 'mini'| 'super-mini'
    /** 标签形状 */
    shape?:'square'|'circle',
    /** icon图标位置 */
    location?:'left'|'right'
    /** 是否是简洁版 */
    plain?:boolean,
    /** 是否选中标识 */
    select?:boolean
    /** 是否不可用标识 */
    disable?:boolean,
    /**图标 */
    icon?:string,
    /** 图标尺寸 */
    iconSize?:string|number,
    /** 图标颜色 */
    iconColor?:string,
    /** 标签高度 */
    height?:number
}

const LTag : React.FC<LTagProps> = props=>{
  const {
    style={},className,
    image,name,cell
    ,type='reading',children,onClick
    ,size='medium'
    ,plain=false,
    disable=false,
    select=false,
    shape='circle'
    ,icon
    ,iconSize=28
    ,iconColor
    ,height
    ,fontColor
    ,bgColor
    ,location
  } = props
  const tagStyle :any= {color:fontColor}
  if(height){
    tagStyle.height = height
    tagStyle.lineHeight = height
  }
  plain ?  tagStyle.borderColor=fontColor : tagStyle.backgroundColor=bgColor
  return (<View style={{display:'flex',...style}} className={className}>
    <View style={tagStyle} className={classnames('l-tag','l-tag-'+size+'-'+ shape,{
      'l-tag-touch':type=='touch',
      [`l-tag-plain-${size}`]:plain,
      'l-tag-plain':plain,
      [`l-tag-${size}`]:!plain,
      'l-tag-disable':disable,
      'select l-select-class':select,
      'l-class':!select 
    })} onClick={()=>{
      if(disable){return}
      type=='touch' && onClick && onClick({name,select,cell})
    }}
    >
      <View 
        style={icon?'line-height:0':''}
        className={location==='left'?'content':'content-l'}
      >
        {icon && <LIcon 
          style={location==='left'?'margin-right:5rpx':'margin-left:5rpx'}
          name={icon} 
          size={iconSize} 
          color={iconColor}
        />}
        {image && <Image  
          style={location==='left'?'margin-right:5rpx':'margin-left:5rpx'}
          src={image} 
          className={`tag-image-${size} l-image-class`}
        />}
        {children}
      </View>
    </View>
  </View>
  )
}  
LTag.defaultProps ={
  onClick:()=>1,
  plain:false,
  disable:false,
  select:false,
  size:'medium',
  shape:'circle',
  iconSize:'20px',
  iconColor:'#3683D6'
} 
export {LTag}
 
