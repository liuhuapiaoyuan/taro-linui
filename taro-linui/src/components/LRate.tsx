/**
 * 评分组件
 */
import React from 'react'
import {View,Image} from '@tarojs/components'
import classnames from 'classnames'
import {LIcon} from './LIcon'
import '../../style/LRate.less'
// import { ViewProps } from '@tarojs/components/types/View'

export interface LRateProps  {
  className?: string
  children?:React.ReactNode
  style?:string|React.CSSProperties|undefined
  /** 评分的数量，默认5 */
  count?:number
  /** 当前评分 */ 
  value?:number
  /** 评分尺寸，默认36px */
  size?:number|string 
  /** 是否禁用，默认false */
  disabled?:boolean 
  /** 激活的颜色，默认#FF5252 */
  activeColor?:string
  /** 未激活的颜色，默认#FFE5E5 */
  inActiveColor?:string
  /**  图标icon名称，默认 favor-fill */
  name?:string 
  /** 激活的图片 */
  activeImage?:string 
  /** 未激活的图片 */
  inActiveImage?:string ,
  onChange?:(value:number)=>void
}

const LRate : React.FC<LRateProps> = props=>{
  const { 
    count=5,style,className,
    value:score=0,name='favor-fill',
    onChange,
    inActiveImage,activeImage,activeColor='#FF5252',inActiveColor='#FFE5E5',size=36
  } = props
  const showList   = Array.from({length:count}, (v,k) => Number(k) )
  return  <View style={style} className={classnames('l-rate','l-class',className)}>
    {
      showList.map(item=>(<View key={item} onClick={()=>onChange && onChange(item+1)} className='l-rate-star'>
        {
          score > item ? (
            <View className='icon-checked' hoverClass='none' 
              hoverStopPropagation={false}  
              style={{width:(score-item<1?(score-item)*100:100)+'%'}}
            >
              {(inActiveImage && activeImage ) ?  <Image 
                className='image-item l-class-image l-image-class'
                src={activeImage}
                mode='aspectFit' lazyLoad={false}
              /> : <LIcon  
                name={name} 
                l-className='l-class-icon l-icon-class' 
                size={size} 
                color={activeColor}
              />}
            </View>
          ):null 
        }
        {
          (inActiveImage && activeImage ) ?  <Image 
            className='image-item l-class-image l-image-class'
            src={inActiveImage}
            mode='aspectFit' lazyLoad={false}
          /> : <LIcon  
            name={name} 
            l-className='l-class-icon l-icon-class' 
            size={size} 
            color={inActiveColor}
          />
        }
      </View>))
    }
  </View>
}
export {LRate}