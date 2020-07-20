import React from 'react'
import { View,Image } from '@tarojs/components'
import classnames from 'classnames'

import {LBadgeProps} from './LBadge'
import { LIcon } from './LIcon'
import '../../style/LSegmentItem.less'


type LSegmentItemImage = {
  activeImage?:string 
  defaultImage?:string
}

export interface LSegmentItemProps {
  className?: string
  style?:React.CSSProperties
  children: React.ReactChild,
  tab?:string,
  key?:string,
  icon?:string,
  iconSize?:string,
  activeColor?:string,
  inactiveColor?:string 
  /** 设定激活/未激活的图标URl */
  image?:LSegmentItemImage
  /** 图片位置 */
  picPlacement?:'top'|'bottom'|'left'|'right'
  /** 显示红点 */
  dotBadge?:boolean 
  /** 红点数量 */
  badgeCount?:number 
  /** 最大红点数量，默认99 */
  badgeMaxCount?:number
  /** 数字展现形式，默认 overflow  */
  badgeCountType?:LBadgeProps['numberType']
  isActive?:boolean 
}

const LSegmentItem: React.FC<LSegmentItemProps> = props => {
  const {
    className,style,
    children,
    image,
    isActive=false,
    tab,
    icon,iconSize,activeColor,inactiveColor
  } = props
  return <View  style={style} className={classnames('SegmentItem',className)}>
    {
      image &&( image.activeImage && image.defaultImage) && <Image
        src={isActive ? image.activeImage : image.defaultImage}
        className='l-tab-image l-class-tabimage l-tab-image-class'
      />
    }

    {
      icon && <LIcon
        name={icon}
        color={isActive ?  activeColor : inactiveColor}
        size={iconSize}
        className='l-class-icon'
      />
    }
    {(!!!tab) ? children : tab } 
  </View>
}

export { LSegmentItem }