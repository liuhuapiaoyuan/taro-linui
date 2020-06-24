/**
 * 加载更多
 */

import React from 'react'
import {View,Block} from '@tarojs/components'
import classnames from 'classnames'
import {px} from '../px'
import '../../style/LLoadMore.less'
 
export interface LLoadMoreProps  {
   className?: string
   /** 相当于内容插槽 content */
   children?:React.ReactNode
   /** 加载完成插槽，前提是customer:true */
   end?:React.ReactChild
   /** 加载中插槽，前提是customer:true */
   loading?:React.ReactChild
   style?:React.CSSProperties
   /** 是否显示 */
   show?:boolean 
   /** 自定义内容 */
   custom?:boolean
   /** line */
   line?:boolean
   /** 颜色 */ 
   color?:string
   /** 图标尺寸，默认为28rpx */
   size?:number
   /** 加载类型，加载中，加载完成 */
   type?:'loading'|'end'
   /** 加载完成提示文本，默认为：我是有底限的 */
   endText?:string
   /**加载提示文本：加载中 */
   loadingText?:string
 }
 
const LLoadMore : React.FC<LLoadMoreProps> = props=>{
  const {
    children,end,loading,
    custom = false,
    line = true,
    color = '',
    size = 28,
    show = false,
    type = 'loading',
    endText = '我是有底线的',
    loadingText = '加载中...'
  } = props

  const fontSize = px(size)
  return  <Block>
    {children}
    {show && <View >
      {custom && type==='end' &&  <View>{end}</View>}
      {custom && type==='loading'&& <View>{loading}</View>}
      {!custom && (
        <View className='loading l-class'>
          {line && <View className='line loading-View'  style={{backgroundColor:color}} />}
          {type=='loading' &&<View className='rotate loading-View' style={{
            borderColor:color,width:fontSize,height:fontSize
          }}
          />}
          {type=='loading' &&<View className='loading-text l-loading-class loading-View' style={{color,fontSize}}>{loadingText}</View>}
          {type=='end' && <View className='loading-text l-end-class loading-View'  style={{color,fontSize}}>{endText}</View>}
          {line && <View className='line l-line-class loading-View' style={{backgroundColor:color}}  />}
        </View>
      )}
    </View>}
  </Block>
}  
 
export {LLoadMore}