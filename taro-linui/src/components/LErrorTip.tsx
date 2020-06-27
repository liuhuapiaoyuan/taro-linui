import React from 'react'
import {View} from '@tarojs/components'
import classnames from 'classnames'
import '../../style/LErrorTip.less'

export interface LErrorTipProps  {
  className?: string
  children?:React.ReactNode
  style?:string|React.CSSProperties|undefined
  errorText?:string
}

const LErrorTip : React.FC<LErrorTipProps> = props=>{
  const {
    errorText,className,style
  } = props
  
  if(!errorText) return  null
  return  <View className={classnames('error-tip','l-error-text','l-error-text-className',className)} style={style} >{errorText}</View>
}  

export {LErrorTip}