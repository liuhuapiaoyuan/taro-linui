import React,{useState,useEffect} from 'react'
import {View} from '@tarojs/components'
import classnames from 'classnames'
import  {getNodeRect} from '../nodeutils'
import '../../style/LStickyItem.less'

export interface LStickyItemProps  {
  className?: string
  children?:React.ReactNode
  header?:React.ReactNode
  style?:string|React.CSSProperties|undefined
  top?:number  


  //内置的props,需要通过外部的LSticky进行计算 
  mode?:'js'|'css'
  scrollTop?:number

}

//通过该方法去计算高度
const Calculate =  async(stickyItemId:string,stickyItemHeaderId:string)=>{
  const [stickyItemNodeRect,stickyItemHeaderNodeRect] = await Promise.all([
    getNodeRect( '.' +stickyItemId),getNodeRect('.' +stickyItemHeaderId)
  ])
  return {
    stickyItemHeight: stickyItemNodeRect.height,
    stickyItemWrapperHeight: stickyItemHeaderNodeRect.height
  }
}

//计算距离顶部的距离
const CalculateTop = async (scrollTop:number,stickyItemId:string)=>{
  const stickyItemNodeRect = await getNodeRect( '.' +stickyItemId)
  return stickyItemNodeRect.top + scrollTop
}

const getRandomId = ()=>{
  return 'S' + '_' +( Math.round(Math.random()*1000+1000))
}

/**
 * 和吸顶容器 LSticky搭配使用
 * @param props 
 */
const LStickyItem : React.FC<LStickyItemProps> = props=>{
  const [stickyItemId] = useState(getRandomId) 
  const [stickyItemHeaderId] = useState(getRandomId)
  const [stickyItemTop,setStickyItemTop] = useState(0)
  const [stickyState,setStickyState] = useState({stickyItemWrapperHeight:0,stickyItemHeight:0})
  const {
    children,header,
    top=0, 
    mode='js',
    scrollTop=0,
  } = props

  useEffect(() => {  
    if(mode==='js'){
      CalculateTop(scrollTop,stickyItemId).then(data=>setStickyItemTop(data))
    }
  }, [scrollTop,stickyItemId,mode]);
  useEffect(()=>{
    Calculate(stickyItemId,stickyItemHeaderId)
      .then(data=>setStickyState(data))
  },[stickyItemId,stickyItemHeaderId])

  const {stickyItemHeight,stickyItemWrapperHeight} = stickyState 
  const isFixedTop = (scrollTop > (stickyItemTop - top) )&& (scrollTop < (stickyItemHeight + stickyItemTop - top));
  
  return  <View className={`l-sticky-item l-class ${stickyItemId}`}>
    {/* <!-- sticky-item-header-wrapper用于占位，因为sticky-item-header吸顶后脱离文档流，导致sticky-item组件高度减小 --> */}
    <View
      className='l-sticky-item-header-wrapper l-header-wrapper-class'
      style={{
        height: (isFixedTop&&mode==='js')?stickyItemWrapperHeight:'auto'
      }}
    ></View>
    <View 
      style={{
        position: (mode==='js'&&isFixedTop) ?'fixed' : undefined,
        top
      }} 
      className={classnames(stickyItemHeaderId,'l-sticky-item-header','l-header-class',{
        'l-sticky-item-header-fixed':mode==='js' && isFixedTop,
        'l-header-sticky-class':(mode==='js' && isFixedTop )|| mode==='css',
        'l-sticky-item-header-sticky':mode==='css',
      })}
    >
      {header} 
    </View>
    <View className='l-sticky-item-body l-body-class'>
      {children}
    </View>
  </View>

}  

export {LStickyItem}