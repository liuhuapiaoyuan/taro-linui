import React from 'react'
import { View ,ScrollView , Image} from '@tarojs/components'
import classnames from 'classnames'
import mergeStyle from '../mergeStyle'
import {LBadge,LIcon} from '../index'
import '../../style/LSegment.less'

export interface LSegmentProps {
  className?: string
  style?:React.CSSProperties 
  children?: React.ReactNode,
  width?:number|string 
  height?:number|string

  placement?:'top'|'left'|'bottom'|'right'|string
  scrollable?:boolean 
  transformY?:number 
  transformX?:number 
  /** 是否有下划线，默认true  */
  hasLine?:boolean 
  itemWidth?:string|number,
  itemHeight?:string|number,

  activeColor?:string
  inactiveColor?:string
/** d当前的激活 */
  activeKey?:string|number 
  even?:boolean
  /** 是否等宽 */
  equalWidth?:boolean
  /** 下划线动画 */
  animatedForLine?:boolean
  /** c选择 */
  onChange?:(keyName:any)=>void
}

const LSegment: React.FC<LSegmentProps> = props => {
  const {
    width,height,style,className,children,
    placement='top',
    scrollable=false ,
    transformY=1,
    transformX=1,
    even=true,
    hasLine=true,
    activeKey,
    activeColor='#333',
    inactiveColor,
    animatedForLine=true,
    itemWidth,
    itemHeight,
    equalWidth=true,
    onChange
  } = props
  let cstyle = {}
  if(width){ cstyle[width] = width}
  if(height){ cstyle[height] = height}
  return <View className={classnames(
    className,'l-tabs',
    'l-placement-'+placement,
    (placement==='left'||placement==='right')?'l-tabs-vertical':'l-tabs-horizontal' ,
    {'l-tabs-scroll' : scrollable} 
  )} style={mergeStyle(cstyle , style)}
  >
    <ScrollView 
      scrollX={(placement==='top'||placement==='bottom') && scrollable}
      scrollY={(placement==='left'||placement==='right') && scrollable}
      scrollTop={transformY} scrollLeft={transformX} 
      style={cstyle}
      className={classnames('l-tabsscroll','l-header-class',{
        'l-tabs-header-line':hasLine,
        'l-class-header-line':hasLine, 
        'l-header-line-class':hasLine
      })}
      scrollWithAnimation
    >
      <View className={classnames('l-tabs-header',( even && equalWidth)?'l-tabs-equal-header':'l-tabs-unequal-header')}>
        {React.Children.map(children,(item:any,index)=>{
          const {picPlacement,badgeMaxCount,
            badgeCountType,iconSize=24,
            tab,badgeCount,image={} ,  
            icon,dotBadge} = item.props
          const isActive = activeKey? activeKey==item.key : index==0
          const line = hasLine  ?   <View 
            className={classnames('l-tab-line',{
              'l-class-line l-line-class':isActive,
              'l-line-aminmated':animatedForLine
            })}
            style={{
              background:isActive?activeColor:inactiveColor
            }}
          /> : null
          if(tab){
            const tabBar = <>
              {(image.activeImage || image.defaultImage) && <Image src={isActive? image.activeImage:image.defaultImage} className='l-tab-image l-class-tabimage l-tab-image-class' />}
              {icon && <LIcon className='l-class-icon l-icon-class'  name={icon} color={isActive?activeColor:inactiveColor} size={iconSize} />}
              {tab}
            </>
            return <View 
              className={classnames('l-tabs-item' ,
                ( even && equalWidth)?'l-tabs-equal-width':'l-tabs-unequal-width',
                isActive ?'l-class-active l-active-class l-tabs-active':'l-class-inactive l-inactive-class l-tabs-inactive' ,
                'l-tab-image-placement-'+picPlacement
              )}
              style={{
                color:isActive?activeColor:inactiveColor,
                width:itemWidth,
                height:itemHeight
              }}
              onClick={()=>onChange && onChange(item.key)}
            >
              {
                (badgeCount > 0 || dotBadge ) ? 
                  <LBadge 
                    className='badge-view'   
                    value={badgeCount} 
                    dot={dotBadge} 
                    maxCount={badgeMaxCount} 
                    numberType={badgeCountType}
                  >
                    {tabBar}
                  </LBadge>
                  :
                  tabBar
              }
              
              {line}
            </View>
          }else{
            return <View
              onClick={()=>onChange && onChange(item.key)}
              className={classnames('l-tabs-item',
                (even && equalWidth)?'l-tabs-equal-width':'l-tabs-unequal-width',
                isActive ?'l-class-active l-active-class l-tabs-active':'l-class-inactive l-inactive-class l-tabs-inactive',
                'l-tab-image-placement-'+picPlacement
              )}
              style={{
                color:isActive?activeColor:inactiveColor
              }}
            >
              {item}
              {line}
            </View>
          } 
        })}
      </View>
    </ScrollView>
  </View>
}

export { LSegment }
 