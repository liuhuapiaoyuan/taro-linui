import React,{useState,useEffect} from 'react'
import Taro from '@tarojs/taro'
import {View,Swiper,SwiperItem} from '@tarojs/components' 
import { ViewProps } from '@tarojs/components/types/View'
import classnames from 'classnames'
import '../../style/LNoticeBar.less'
import {getNodeRect} from '../nodeutils'
import { LIcon } from './LIcon' 

export interface LNoticeBarProps  {
  className?: string
  children?:React.ReactNode
  /** 轮播广告内容组 */
  swipArr?:string[]|React.ReactNode
  style?:string|React.CSSProperties|undefined
  /** 展示类型，默认是still */
  type?:'still'|'swip'|'roll'
  /** 前置的图标 */
  frontIconName?:string
  /** 前置图标的尺寸，默认28px */ 
  frontIconSize?:number|string 
  /** 前置图标的颜色，默认#3683D6 */ 
  frontIconColor?:string 
  /** 后置图标 */
  endIconName?:string
  /** 后置图标的尺寸，默认28px */ 
  endIconSize?:string|number
  /** 后置图标的颜色 默认 #3683D6*/
  endIconColor?:string
  /** 背景颜色，默认 #DFEDFF */
  backgroundcolor?:string 
  /** 字体颜色，默认 #3683D6*/
  color?:string 
  /** 滚动速度，默认1500 */
  speed?:number
  /** 是否显示 */
  show?:boolean 
  /** 是否关闭 */
  close?:boolean 
  onClose?:ViewProps['onClick']
}
const startAnimation = (animation,width,wrapWidth,duration,setAnimation)=>{
  if (animation.option.transition.duration !== 0) {
    animation.option.transition.duration = 0;
    const resetAnimation = animation.translateX(wrapWidth).step();
    setAnimation(resetAnimation.export())
  }
  animation.option.transition.duration = duration;
  const animationData = animation.translateX(-width).step();
  setTimeout(() => setAnimation(animationData.export()), 100);
  const timer = setTimeout(() => {
    startAnimation(animation,width,wrapWidth,duration,setAnimation);
  }, duration)
  return timer
}
const LNoticeBar : React.FC<LNoticeBarProps> = props=>{
  const {
    swipArr,
    children,style={},className,
    show=true,close,
    speed=1500,color='#3683D6',
    backgroundcolor='#DFEDFF',
    endIconName,
    endIconSize=28,
    endIconColor='#3683D6',
    frontIconName,
    frontIconSize=28,
    frontIconColor='#3683D6',
    type='still',
    onClose
  } = props
  //计算动画数据
  const [animation,setAnimation] = useState<any>()
  const [id] = useState(`L_${Math.ceil(Math.random() * 10e5).toString(36)}`)
  const [wrapId] = useState(`L_${Math.ceil(Math.random() * 10e5).toString(36)}`)
  useEffect(()=>{
    if(type!=='roll'){return}
    let timer:any = null 
    Promise.all([
      getNodeRect('#'+wrapId),
      getNodeRect('#'+id)
    ])
      .then(([{width:wrapWidth},{width}])=>{
        const duration = width / 40 * speed;
        const _animation = Taro.createAnimation({
          duration: duration,
          timingFunction: 'linear',
        });
        // setAnimation(_animation.translateX(-wrapWidth).step().export())
        timer = startAnimation(_animation,width,wrapWidth,duration,setAnimation)
      })
    return ()=>{(!!timer) && clearTimeout(timer)}
  },[type,id,wrapId,speed])

  if(!show) return null
  return  <View  className={classnames('noticeBar',className)} 
    style={{color, backgroundColor:backgroundcolor,...style}}
  >
    {
      frontIconName && <LIcon size={frontIconSize} color={frontIconColor} name={frontIconName} className='noticeBar-icon'   />
    }
    {
      (type==='swip') ? <Swiper autoplay vertical interval={4*speed} className='noticeBar-content-wrap'>
        {
          React.Children.map(swipArr,(item,index)=><SwiperItem  key={index}>
            {item}
          </SwiperItem>)
        } 
      </Swiper> : <View id={wrapId} className='noticeBar-content-wrap noticeBar-content-wrap-View' >
        <View className='noticeBar-content' id={id} animation={animation}>
          {children}
        </View>
      </View>
    }
    {endIconName && !close &&<LIcon  size={endIconSize} color={endIconColor} className='noticeBar-operation' name={endIconName}  />}
    {close &&<LIcon onClick={onClose}  className='noticeBar-operation' name='close' size={endIconSize} color={endIconColor} />}
  </View>

}  

export {LNoticeBar}