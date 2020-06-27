import React,{useState} from 'react'
import {View} from '@tarojs/components'

export interface LCollapseProps  {
  className?: string
  children?:React.ReactNode
  style?:string|React.CSSProperties|undefined
}
//维持一组状态，并且状态只能激活一个
// 激活ID，
const LCollapse : React.FC<LCollapseProps> = props=>{
  const {
    children,style,className
  } = props
  //默认不激活
  const [actIndex,setActIndex] = useState(-1)
  return  <View style={style}  className={className}>
    {React.Children.map(children,(child,index)=>{
      return React.cloneElement(child as any,{
        onClickTitle:()=>setActIndex(actIndex===index ? -1 : index),
        expanded:actIndex===index
      })
    })}
  </View>
}  

export {LCollapse}