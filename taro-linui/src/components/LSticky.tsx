import React from 'react'
import {View} from '@tarojs/components'
import classnames from 'classnames'
import '../../style/LSticky.less'


export interface LStickyProps  {
  className?: string
  children?:React.ReactNode
  style?:string|React.CSSProperties|undefined
  mode?:'js'|'css',
  scrollTop:number
}

const LSticky : React.FC<LStickyProps> = props=>{
  const {
    scrollTop=0,className,style,children,
    mode='css'
  } = props
  return  <View style={style} className={classnames('l-sticky',className)}>
    {React.Children.map(children,(child)=>{
      return React.cloneElement(child as any,{
        scrollTop,
        mode
      })
    })}
  </View>
}  

export {LSticky}