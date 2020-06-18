import React,{useRef,useState,useEffect} from 'react'
import Taro from '@tarojs/taro'
import {View,Text,Image,Block} from '@tarojs/components'
import {LIcon} from './LIcon'
import classnames from 'classnames'
import '../../style/LMessage.less'

/**
 * 消息组件
 */
export interface LMessageProps  {
  className?: string
  children?:React.ReactChild
  style?:React.CSSProperties
  /**是否显示 */
  // show?:boolean
  /** 层级，默认888 */
  zIndex?:number
}

 
// 绑定函数
// console.log(Taro.atMessage)  

Taro.linMessage = Taro.eventCenter.trigger.bind(Taro.eventCenter, 'LinuiMessage')

const LMessage : React.FC<LMessageProps> = props=>{
  const {
    children,
    zIndex=888,
  } = props
  const timerRef = useRef<any>()
  const [{ show, type, content,image,icon,iconColor,iconSize,top }, setState] = useState({
    top:0
  } as Taro.LMessageOptions)
  const atMessageHandler = (options = {} as Taro.LMessageOptions) => {
    clearTimeout(timerRef.current)
    const { type='primary', content,image,icon,iconColor='#fff',iconSize=28,top=0,duration=1500 } = options
    setState(prev => ({ ...prev, show: true, content, type, duration,image,icon,iconColor,iconSize,top }))
    timerRef.current = setTimeout(() => setState(prev => ({ ...prev, show: false })), duration)
}

useEffect(() => {
    Taro.eventCenter.on('LinuiMessage', atMessageHandler)
    return () => Taro.eventCenter.off('LinuiMessage', atMessageHandler)
}, [])

  return  <View  className={classnames('l-message','l-message-'+type,{
    'l-message-show':show 
  })}
   style={{zIndex,top:top+'px'}}>
     {
       show && <Block >
       <View style={{marginRight:15}}>
         <LIcon name={icon?icon:type} size={iconSize} color={type==='warning'?'#333':iconColor} />
       </View>
       {image && <Image  src={image} className="l-message-Image l-class-Image"/>}
       <Text>{content}</Text>
       {children}
     </Block>
     }
</View>
}  
export const show =  Taro.eventCenter.trigger.bind(Taro.eventCenter, 'LinuiMessage')

export {LMessage}