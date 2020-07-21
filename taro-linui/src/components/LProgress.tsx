import React,{useEffect, useState} from 'react'
import { View } from '@tarojs/components'
import classnames from 'classnames'


import '../../style/LProgress.less'

export interface LProgressProps {
  className?: string
  children?: React.ReactChild
  style?:string|React.CSSProperties
  /** 百分比，默认是0 */
  percent?:number
  /** 宽度，默认12px */
  strokeWidth?:number
  /** 圆角，默认6px */
  borderRadius?:number 
  /** 激活的颜色 */
  activeColor?:string  
  /** 背景色，默认是：#EBEBEB */
  backgroundColor?:string
  /**是否显示信息 */
  showInfo?:boolean 
  /** 文本位置，默认right */
  textPosition?:'right'|'left'
  /**提示文本颜色 */
  textColor?:string 

  interval?:number 
  active?:boolean 
  duration?:number 

  /** 对应进度条前面的点 */
  header?:React.ReactNode
}

const LProgress: React.FC<LProgressProps> = props => {
  const [activePercent,setActivePercent] = useState(0)
  const {
    className,style,
    strokeWidth=6,percent=0,
    backgroundColor='#EBEBEB',
    showInfo=false,textPosition='right',
    active=false,duration=30,textColor,interval,
    activeColor,borderRadius=3,
    header
  } = props

  const marginLeft = 0
  const marginTop = 0
  useEffect(() => {
    if(!active) return 
    setActivePercent(0)
    const timer = setInterval(()=>{
      //步骤+1
      setActivePercent(v=>{
        if(v+1>=percent){
          clearInterval(timer)
          return v
        }
        return v+1
      })
    },duration)
    return () => clearInterval(timer);
  }, [active,duration,percent]);


  return <View style={style} className={classnames('l-progress',className)}>
    {showInfo && textPosition==='left' && <View 
      className='l-progress-text l-text-class'  
      style={{
        color:textColor?textColor:undefined,
        marginRight:interval
      }}
    >
      {percent}%
    </View>}
    <View className='l-progress-progress l-progress-short' style={{height:strokeWidth}}  >
      {header && <View className='l-progress-slot' 
        style={{
          left:`${active?activePercent : percent}%`
        }}
      >
        {header}
      </View>}
      <View className={classnames('l-progress-percent','l-active-class',{'l-progress-active':!activeColor})} 
        style={{
          width:`${active?activePercent : percent}%`,
          height:strokeWidth,
          borderRadius,
          backgroundColor:activeColor
        }}
      />
      <View className='l-progress-background l-background-class'
        style={{height:strokeWidth,borderRadius,backgroundColor}}
      />
    </View>
    {
      showInfo && textPosition==='right' && <View 
        className='l-progress-text l-text-class' 
        style={{
          color:textColor,
          marginLeft:interval
        }}
      >
        {percent}%
      </View>
    }
  
  </View>
}

export { LProgress }