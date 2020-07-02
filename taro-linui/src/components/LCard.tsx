import React from 'react'
import {View,Block,Image,Text} from '@tarojs/components'
import classnames from 'classnames'
import { ImageProps } from '@tarojs/components/types/Image'

import '../../style/LCard.less'

export interface LCardProps  {
  className?: string
  children?:React.ReactNode
  /** 显示更多的Node */
  more?:React.ReactNode
  style?:React.CSSProperties
  /** 图片URL */
  image?:string
  /** 标题 */
  title?:string
  /** 描述文本 */
  describe?:string
  /** s是否开启简单模式，没有图片 */
  plaintext?:boolean,
  /** 是否通栏，默认false */
  full?:boolean 
  /** 图片的位置 */
  position?:'left'|'right'
  /** 图片的类型 默认为primary*/
  type?:'primary'|'avatar'|'cover'
  /** 图片的显示mode */
  imageMode?:keyof ImageProps.mode,
  onClick?:ImageProps['onClick']
}

const LCard : React.FC<LCardProps> = props=>{
  const {
    onClick,children,more,className,style,full=false,
    type='primary',position='left',plaintext=false,
    title,imageMode='aspectFill',image,describe
  } = props
  return  <View onClick={onClick} style={style} className={classnames(className,'card-container','card-container-' + type,
    'card-container-' + type + '-' + position,full?'card-container-full':'card-container-unfull'
  )}
  >
    {(type ==='primary' || type ==='cover') && image && <Block>
      {!plaintext && <Image  
        className={classnames('l-img-class','card-img-' + type,'card-img-' + type + '-' + position,full?'cover-img-full':'cover-img-unfull')}
        mode={imageMode} lazyLoad src={image}
      />}
      <View className='card-content'>
        <Text className={classnames('l-title-class','card-title','card-title-' + type)}>{title}</Text>
        {children}
      </View>
    </Block>}
    {type ==='avatar' &&  <Block >
      <View className='card-avatar-top'>
        <View className='card-avatar-left'>
          {image && <Image mode={imageMode} 
            className={classnames('l-img-class','card-img-' + type)} 
            src={image}  
            lazyLoad
          />}
          <View className='card-avatar'>
            <Text className={classnames('l-title-class','card-title','card-title-' + type)}>{title}</Text>
            <Text className='describe'>{describe}</Text>
          </View>
        </View>
        {more}
      </View>
      {children}
    </Block>}
 
  </View>
}  

export {LCard}