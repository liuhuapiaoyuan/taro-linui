    import React from 'react'
import {View} from '@tarojs/components'
import classnames from 'classnames'
// import {LIcon} from './LIcon'
// import {LStep} from './LStep'
import '../../style/LSteps.less'

export interface LStepsProps  {
  className?: string
  children?:React.ReactNode
  style?:string|React.CSSProperties|undefined
    /** 方向，默认是row */
  direction?:"row"|"column"
  /** 当前的步骤索引，默认是0 */
  activeIndex?:number
  /** 整体配色 */
  color?:string 
  /** 默认的步骤高度，默认是60px */
  stepMinHeight?:number|string 
//   /** 方向为column的时候，配置默认的步骤宽度，默认60px */
//   stepMinWidth?:number|string 
    /** 步骤条状态，默认是process */
  status?:'process'|'error'|'finish'
  /** 是否开启红点 */
  dot?:boolean 
}

const LSteps : React.FC<LStepsProps> = props=>{
  const {
      style,className,children,
    stepMinHeight=60,
    direction='row',
    dot,status,color,activeIndex=0
} = props
    const stepMinWidth=60
  //stepsWidth: res[0].width
  //将所有的子类步骤条进行映射
  const length = React.Children.count(children)
  return  <View style={style} className={classnames('l-class','steps-container',className,'steps-container-'+direction)}>
        {React.Children.map(children,(child,index)=>React.cloneElement(child as any,{
            length,index,stepMinHeight,stepMinWidth,direction,dot,status,color,activeIndex
        }))}
  </View>
}   

export {LSteps}