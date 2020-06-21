import React from 'react'
import Taro from '@tarojs/taro'
import {View,Image} from '@tarojs/components'
import { ViewProps } from '@tarojs/components/types/View'

import classnames from 'classnames'
import {LTag} from './LTag'
import {LIcon} from './LIcon'
import {LBadge} from './LBadge'

import '../../style/LList.less'

export interface LListProps  {
  className?: string
  children?:React.ReactNode
  /** 左侧自定义内容 */
  leftSection?:React.ReactNode
  /** 右侧自定义内容 */
  rightSection?:React.ReactNode
  style?:React.CSSProperties
  /** 图标 */
  icon?:string
  /** 图标颜色 */
  iconColor?:string
  /** 图标尺寸 */
  iconSize?:string|number
  /** 图片 */
  image?:string
  /** 标题 */
  title?:string 
  /** 附加描述文本 */
  desc?:string
  /** 标签的位置 默认：left*/
  tagPosition?:'left'|'right'
  /** 标签内容 */
  tagContent?:string
  /** 标签形状 */
  tagShape?:'square'|'circle'
  /**标签颜色 */
  tagColor?:string,
  /** 标签镂空 默认：false*/
  tagPlain?:boolean
  /** 打开红点提示，默认false */ 
  dotBadge?:boolean 
  /** 红点位置，默认left */
  badgePosition?:'left'|'right'
  /** 红点提示数量 */
  badgeCount?:number|string
  /** 红点提示数字最大数量 ，默认99*/
  badgeMaxCount?:number
  /** 红点数字的type，默认为overflow */
  badgeCountType?:'overflow'| 'limit'| 'ellipsis'
  /** 右侧描述文本 */
  rightDesc?:string 
  /** 间距，默认左右间距 10个px */
  gap?:number
  /** 左间距 */
  leftGap?:number 
  /** 右间距*/
  rightGap?:number 
  /** 是否可点击,默认为true */
  isLink?:boolean 
  /** 导航类型，默认为 navigateTo */
  linkType?:'navigateTo'|'redirectTo'|'switchTab'
  /** 跳转的链接 */
  url?:string
  /** 点击 */
  onClick?:ViewProps['onClick']
}

const LList : React.FC<LListProps> = props=>{
  const {
    className,
    style={},
    gap = 10,
    leftGap,
    rightGap,
    linkType='navigateTo',
    url,
    badgeCount=0,
    dotBadge,
    badgePosition='left',
    badgeCountType='overflow',
    badgeMaxCount=99,
    rightDesc,isLink=true,
    leftSection,rightSection,
    tagShape="circle",tagPlain=false,
    image,icon,title,desc,tagContent,tagPosition='left',tagColor,iconSize,iconColor,
    onClick
  } = props
  const leftProps = {image,icon,title,desc,tagContent,tagPosition,tagColor,tagShape,tagPlain,iconSize,iconColor}
  const rightProps = {rightDesc,tagContent,tagPosition,isLink,tagColor,tagShape,tagPlain}

  if(gap){style.padding = `0 ${gap}px`}
  if(leftGap){style.paddingLeft = `${leftGap}px`}
  if(rightGap){style.paddingRight = `${rightGap}px`}
  return  <View className={classnames("l-list","l-class",className)} 
    hoverClass='l-list-hover' 
    hoverStartTime={20}
    hoverStayTime={50}  
    style={style}
    onClick={e=>{
      isLink ? (url && Taro[linkType]({url}) )
      :(onClick && onClick(e))
    }}
    >
    {
      ((badgeCount > 0 || dotBadge ) && badgePosition ==='left' ) ?  <LBadge
        className="l-list-badge"
      value={badgeCount}
      dot={dotBadge}
      maxCount={badgeMaxCount}
      numberType={badgeCountType}
      >
        <CellLeft {...leftProps}>{leftSection}</CellLeft>
      </LBadge> :　<CellLeft {...leftProps}>{leftSection}</CellLeft>
    }
    {
      ((badgeCount > 0 || dotBadge ) && badgePosition ==='right' ) ?  <LBadge
        className="l-list-badge l-list-badge-right"
        value={badgeCount}
        dot={dotBadge}
        maxCount={badgeMaxCount}
        numberType={badgeCountType}>
        <CellRight  {...rightProps}>{rightSection}</CellRight>
      </LBadge> :　<CellRight  {...rightProps}>{rightSection}</CellRight>
    }
  </View>
}  

/**
 * 左侧文本
 * @param props 
 */
const CellLeft : React.FC<any> = ({image,icon,title,desc,tagContent,tagPosition,tagColor,tagShape,tagPlain,iconSize,iconColor,children}) =>(
  <View className="left-section ">
    {image && <Image  className="l-image l-class-image l-image-class" src={image} mode={'aspectFit'} />}
    {icon && <LIcon   className="l-class-icon l-icon-class" name={icon} size={iconSize} color={iconColor} />}
    <View className="l-text">
        <View className="l-content l-class-content l-content-class">{title}</View>
        {desc && <View className="l-desc l-class-desc l-desc-class" >{desc}</View>}
    </View>
    {tagContent && tagPosition ==='left' && !tagPlain && <LTag size="mini"  shape={tagShape} bgColor={tagColor} className="celLTag">{tagContent}</LTag>}
    {tagContent && tagPosition ==='left' && tagPlain && <LTag size="mini" shape={tagShape} plain={tagPlain} fontColor={tagColor} l-className="celLTag">{tagContent}</LTag>}
   {children}
  </View>
)
/**
 * 右侧模板
 * @param props 
 */
const CellRight: React.FC<any> = ({children,rightDesc,tagContent,tagPosition,isLink,tagColor,tagShape,tagPlain}) =>(
  <View className="right-section l-class-right l-right-class">
       {children}
        {tagContent && tagPosition ==='right' && !tagPlain && <LTag size="mini" shape={tagShape} bgColor={tagColor} className="celLTag">{tagContent}</LTag>}
        {tagContent && tagPosition ==='right' && tagPlain && <LTag size="mini" shape={tagShape} plain={tagPlain} fontColor={tagColor} className="celLTag">{tagContent}</LTag>}
        {(!!rightDesc) && <View className="l-text">{rightDesc}</View>}
        {isLink && <LIcon className="l-arrow" name="right"  />}
    </View>
)
export {LList}