import React from 'react'
import {View} from '@tarojs/components'
import classnames from 'classnames'

import '../../style/LCheckboxGroup.less'
/** 多项选择器，内部由多个checkbox组成。 */
export interface LCheckboxGroupProps  {
  className?: string
  children?:React.ReactNode
  style?:string|React.CSSProperties|undefined
  /** 数值发生改变 */
  onChange?:(value?:any[])=>void,
  /** 选中的数值 */
  value?:any[],
  placement?:'row'|'column'
  maxSelected?:number,
  minSelected?:number
}

//收集所有的checkbox，value,每一项也有value，是否选中就是value相等
const LCheckboxGroup : React.FC<LCheckboxGroupProps> = props=>{
  const {
    children,
    value=[],
    placement='row',
    onChange,
  } = props
  return  <>
    <View className={classnames('l-class','checkbox-group','checkbox-group-'+placement)}>
      {React.Children.map(children,(child)=>{ 
        let cindex = value.indexOf(child.props.value)
        return child && React.cloneElement(child as any,{
          checked:cindex>=0,
          onClick:()=>onChange && onChange(cindex>=0?value.slice(0,cindex).concat(
            value.slice(cindex+1,value.length)
          ) : [...value,child.props.value])
        })
      })}
    </View>
    {/* <l-error-tip l-error-text-class="l-error-text l-error-text-class" errorText="{{errorText}}" wx:if="{{errorText}}"/> */}
  </>
}  

export {LCheckboxGroup}