import React from 'react'
import {View} from '@tarojs/components'
import classnames from 'classnames'
import {LIcon} from './LIcon'
import '../../style/LStep.less'
/**
 * 步骤条
 */
export interface LStepProps  {
  className?: string
  children?:React.ReactNode
  /** ？？？ */
  dot?:React.ReactNode
  /** 自定义的文本描述组件 */
  describe?:React.ReactNode
  style?:string|React.CSSProperties|undefined
  /** 开启自定义模式，默认false */
  custom?:boolean
  /** 图标信息 */
  icon?:string 
  /** 图标尺寸，默认24px */
  iconSize?:number|string 
  /** 图标的颜色 */
  iconColor?:string 
  /** 标题信息 */
  title?:string 
  /** 标注颜色 */
  color?:string 
  /** 描述文本 */
  describeText?:string
  /** 当前的索引 */
  index?:number 
  activeIndex?:number 
  length?:number 
  direction?:any 
  /** 状态 */
  status?:'process'|'error'|'finish' 
  stepsWidth?:number,
  stepMinHeight?:number
}

var setStatus = function(activeIndex,index,status){
    if(activeIndex===index){
      return status || 'process'
    } else if(activeIndex>index){
      return 'finish'
    }else{
      return 'wait'
    }
  }
  
  var statusStyle = function(activeIndex,index,color,status){
    if(activeIndex===index){
      return status==='error'?'':('background-color:' + color)
    } else if(activeIndex>index){
      return ('border-color:' + color + ';color:' + color)
    }else{
      return ''
    }
  }
  
  var dotStyle = function(activeIndex,index,color){
    if(activeIndex>=index){
      return ('background-color:' + color)
    } else{
      return ''
    }
  }


const LStep : React.FC<LStepProps> = props=>{
  const {
    className,style={},children ,
    dot,
    /**标注的颜色 */
    color,
    describe,
    custom,
    title,describeText,
    icon,iconColor,iconSize=24,
    index=0,activeIndex=0,direction,length=1,status='process',
    stepMinHeight=120,stepsWidth=120,
  } = props
    const statusText = setStatus(activeIndex, index, status)
  let cstyle = {} as any 
  direction==='row'?cstyle.width=(100/length)+"%" :cstyle.minHeight = stepMinHeight
  return  <View className={classnames('step ','step-'+direction,'l-class',className)}  
      style={cstyle}>
  <View className={classnames("step-container", "l-step-class", 'step-container-'+direction)}>
    {custom ? <View   className="step-custom">
      {dot}
    </View> :<View className={classnames('l-step-class',dot && !icon?'step-dot-'+statusText+' step-dot':'step-'+statusText+' step-icon')}
          style={dot?dotStyle(activeIndex,index,color):statusStyle(activeIndex,index,color,status)}>
      {icon && <LIcon 
        name={icon} 
        size={iconSize} 
        color={statusText==='process'?'#3963BC':iconColor}/>}
        {
            !dot && !icon && <>
            {
              (  statusText==='error' || statusText==='finish') ? <View 
              className={classnames('iconfont',`icon-${statusText}`)} /> : (index+1)
            }
            </>
        } 
    </View>
}
  </View>
  <View className={classnames('step-content', 'step-content-'+direction)} >
    <View className={classnames("l-title-class",activeIndex===index?'step-title-process':'step-title')} >
      {title}
    </View>
    <View className="l-describe-class step-describe">
      {describeText}
      {describe}
    </View>
  </View>
 { length !== index+1 && <View className={classnames(
                "step-line","l-line-class",
                'step-line-'+ direction,
                activeIndex>index?'step-line-finish':'step-line-wait'
                )}
        style={activeIndex>index?('background-color:'+color):''} 
        >
  </View>}
</View>
}  

export {LStep}