import React from 'react'
import {View} from '@tarojs/components'
import classnames from 'classnames'


import '../../style/LIcon.less'

export interface LIconProps  {
    className?: string
    style?: React.CSSProperties
    /** 图标名称 */
    name:string,
    /** 颜色，支持CSS颜色定义 */
    color?:string,
    /** 尺寸，可以是数字也是可以字符串，注意 如果是字符串请传入尺寸单位：px,rpx */
    size?:number|string
}
 
const LIcon : React.FC<LIconProps> = props=>{
    const {
        name,
        color='#3963bc',
        size='40px',
    } = props
    return (<View 
        className={classnames("l-class l-class-self l-self-class l-icon",{
            [`l-icon-${name}`]:name
        })}
        style = {{
            fontSize:(typeof(size)==='number')? (size+'rpx') : size,
            color
        }}
        />
  )
}  
 
export {LIcon}
 
