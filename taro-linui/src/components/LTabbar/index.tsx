import React,{useState, useEffect} from 'react'
import { View ,Image,Text} from '@tarojs/components'
import Taro from '@tarojs/taro'
import classnames from 'classnames'

import mergeStyle from '../../mergeStyle'
import '../../../style/LTabbar.less'

export type TabbarItem = {
  style?:string|'circle'|'normal',
  iconSize?:number 
  text:string,
  redDot?:boolean 
  badge?:string|number
  selectedIconPath:string,
  iconPath:string,
  pagePath?:string
}
export interface LTabbarProps {
  className?: string
  style?:string|React.CSSProperties
  children?: React.ReactChild
  position?:'bottom'|'top'|'custom'
  show?:boolean
  selected?:number 
  /** 默认的字体颜色 */
  color?:string 
  /** 选中的字体颜色 */
  selectedColor?:string 
  /** border颜色 */
  borderStyle?:string
  /** 背景色 */
  backgroundColor?:string
  /** 背景图片 */
  backgroundImg?:string
  /** 字体大小 */
  fontSize?:number
  /** 数据 */
  list:TabbarItem[]

  isRedirectToTab?:boolean 
  isNav?:boolean
}

const LTabbar: React.FC<LTabbarProps> = props => {
  const {
    className,style,
    position='bottom',
    show = true,
    selected=0,
    color='#707070',
    selectedColor='#3963BC',
    borderStyle='#f6f6f6',
    backgroundColor='#fff',
    backgroundImg,
    fontSize=12,
    isRedirectToTab,
    isNav,
    list
  } = props
  const [selectIndex,setSelectIndex] = useState(selected)
  useEffect(() => {
    setSelectIndex(selected)
  }, [selected]);
  if(!show){ return null }
  const go = ({pagePath} : TabbarItem , index)=>{
    setSelectIndex(index)
    Taro.switchTab({
      url:pagePath as string,
      fail(){
        Taro.redirectTo({url:pagePath as string})
      }
    })
  }
  return <View
    className={classnames('tab-bar','tab-bar-'+position,className)}
    style={mergeStyle({
      background:backgroundImg? `url(${backgroundImg})` : backgroundColor
    },style)}
  >
    <View className='tab-bar-border' style={{background:borderStyle}}  />
    {
      list.map((item,index)=><View 
        onClick={()=>go(item,index)}
        key={index} 
        className={classnames('tab-bar-item',{circle:item.style === 'circle'})}
      >
        {item.style === 'circle' ?  <View    className='item-circle' /> : 
          <Image
            className='tab-bar-item-image'
            style={{
              height:item.iconSize,
              width:item.iconSize
            }}
            src={selectIndex === index ? item.selectedIconPath : item.iconPath}
          />
        } 
          
        {
          item.style === 'circle' && <>
            <View className='tab-bar-item-image' />
            <Image className='center-circle' 
              src={selectIndex === index ? item.selectedIconPath : item.iconPath}
            />
          </>
        }
          
        <View style={{
          fontSize,
          color:selectIndex === index ? selectedColor : color
        }}
        >{item.text}</View>
        {item.redDot &&<View  className='reddot' />}
        {item.badge &&<View   className='badge'>{item.badge} </View>}
      </View>)
    }
  
  </View>
}

export { LTabbar }