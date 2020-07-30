import React from 'react'
import { View } from '@tarojs/components'
import classnames from 'classnames'

import {LErrorTip} from '../index'
import '../../style/LRadioGroup.less'

export interface LRadioGroupProps {
  className?: string
  children?: React.ReactNode
  style?:React.CSSProperties | string 
  errorText?:string 
  placement?:'row'|'column',
  //数值
  value?:string|number
  onChange?:(value:any)=>void
}
//以key作为标准?
const LRadioGroup: React.FC<LRadioGroupProps> = props => {
  const {
    errorText,
    children,
    placement='column',
    value,onChange
  } = props
  return <>
    <View className={classnames('l-class','radio-group',`radio-group-${placement}`)}>
      {React.Children.map(children,(child :any,index)=>{
        return React.cloneElement(child as any,{
          checked:value===child.key,
          onChange:sv=>{
            console.log(sv)
            if(sv && onChange){
              onChange(child.key)
            }
          }
        })
      })}
    </View>
    {errorText && <LErrorTip className='l-error-text l-error-text-class' errorText={errorText} />}
  </>
}

export { LRadioGroup }