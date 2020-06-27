import React, { useEffect,useState } from 'react'
import {View} from '@tarojs/components'
import { ViewProps } from '@tarojs/components/types/View'
import classnames from 'classnames'
import {LIcon} from './LIcon'
import {getNodeRect} from '../nodeutils'
import '../../style/LCollapseItem.less'

export interface LCollapseItemProps  {
  className?: string
  children?:React.ReactNode
  style?:string|React.CSSProperties|undefined
  title?:string
  /** 自定义的title */
  customTitle?:React.ReactNode
  /** 是否禁用内容展开 */
  disable?:boolean
  /** 内容区域展开动画速度，默认.3s */
  animationTime?:string 
  /** 是否展开 */ 
  expanded?:boolean 
  onClickTitle?:ViewProps['onClick']
}

const LCollapseItem : React.FC<LCollapseItemProps> = props=>{
  const {
    className,style,
    children,customTitle,title,
    disable=false,expanded=false,animationTime='0.3s',
    onClickTitle
  } = props
  const [id] = useState('L'+Date.now()+'' + Math.round(Math.random()*1000)) 
  //计算内容区域的高度，一旦动画结束，则显示区域就要为auto
  const [contentHeight,setContentHeight] = useState<number>(0)
  const [showContentHeight,setShowContentHeight] = useState<number|string>('auto')
  useEffect(()=>{
    getNodeRect('#'+id).then(({height})=>{
      setContentHeight(height)
      // setShowContentHeight(height)
    })
  },[id])
  useEffect(()=>{
    contentHeight>0 &&  setShowContentHeight(expanded?contentHeight:0)
  },[expanded,contentHeight])
  return  <View className={classnames('collapseItem',expanded?'expanded':'',className)} style={style}>
    <View onClick={onClickTitle} className='collapseItem-title l-title-class'>
      {
        !customTitle && <>
          <View style={disable?'color:#DEE2E6':''} >{title}</View> 
          <LIcon className='collapseItem-title-l-icon'   
            style={{
              transform:`rotate(${expanded?'-180':'0'}deg)`
            }}
            name='down' size={28}
            color={disable?'#DEE2E6':'#333'}
          />
        </>
      }
      {customTitle}
    </View>
    <View id={id} onTransitionEnd={()=>{
      setShowContentHeight(expanded?'auto':0)
    }} style={{height:showContentHeight,transitionDuration:animationTime}}  className='collapseItem-body'
    >
      <View className='collapseItem-body-wrapper l-body-class'>
        {children}
      </View>
    </View>
  </View>

}  

export {LCollapseItem}