import React from 'react'
import { View ,ScrollView , Block} from '@tarojs/components'
import classnames from 'classnames'
import mergeStyle from '../mergeStyle'

import '../../style/LSegment.less'

export interface LSegmentProps {
  className?: string
  style?:React.CSSProperties 
  children?: React.ReactChild,
  width?:number|string 
  height?:number|string
  placement?:'top'|'left'|'bottom'|'right'
  scrollable?:boolean 
  transformY?:number 
  transformX?:number 
  /** 是否有下划线，默认true  */
  hasLine?:boolean 
}

const LSegment: React.FC<LSegmentProps> = props => {
  const {
    width,height,style,className,
    placement='top',
    scrollable=false ,
    transformY=1,
    transformX=1,
    hasLine=true 
  } = props
  let cstyle = {}
  if(width){ cstyle[width] = width}
  if(height){ cstyle[height] = height}
  return <View className={classnames(className,'l-tabs','l-placement-'+placement,placement==='left'||placement==='right'?'l-tabs-vertical':'l-tabs-horizontal' ,{'l-tabs-scroll' : scrollable} )} style={mergeStyle(cstyle , style)}>
    <ScrollView 
      scrollX={placement==='top'||placement==='bottom' && scrollable}
      scrollY={placement==='left'||placement==='right' && scrollable}
      scrollTop={transformY} scrollLeft={transformX} 
      style={cstyle}
      className={classnames('l-tabsscroll','l-header-class',hasLine?'l-tabs-header-line l-class-header-line l-header-line-class':'')}
      scrollWithAnimation
    >
      <View className={classnames('l-tabs-header',( even && equalWidth)?'l-tabs-equal-header':'l-tabs-unequal-header')}
        className='l-tabs-header {{}}'
      >
          
      </View>
    </ScrollView>
  </View>
}

export { LSegment }