import React, { useCallback } from 'react'
import Taro from '@tarojs/taro'
import classnames from 'classnames'
import { View,Image,Text } from '@tarojs/components'
import { CommonEvent } from '@tarojs/components/types/common'
import { ImageProps } from '@tarojs/components/types/Image'
import { ButtonProps } from '@tarojs/components/types/Button'
import {LIcon} from './LIcon'
import {LPopup} from './LPopup'
import {LButton} from './LButton'

import '../../style/LActionSheet.less'

type ActionSheetListItem = {
    /**按钮的显示文本，请注意name必须是唯一的 */
    name:string,
    /** 文本按钮颜色 */
    color?:string,
    image?:string,
    icon?:string,
    imageStyle?:string,
    imageMode?:keyof ImageProps.mode,
    iconSize?:string|number,
    iconColor?:string,
    openType?: keyof ButtonProps.openType,
}

export interface LActionSheetProps  {
    className?: string
    /**自定义样式 */
    style?: React.CSSProperties|string|undefined 
     /** 是否显示 默认为false*/
     show?: boolean 
     /** 是否显示取消按钮 */
     showCancel?:boolean
     /** 是否指向 */
     isHover?:boolean
     /** 按钮数组 */
     itemList:ActionSheetListItem[],
     /** 锁定弹窗，不可点击背景 */
     locked?:boolean
     /** 取消按钮的文本 */
     cancelText?: React.ReactNode
    /** 标题 */
        title?: React.ReactNode
        /** 展示层级，默认是777 */
        zIndex?:number
     /**
     * 元素被关闭触发的事件
     */
    onClose?: (event?: CommonEvent) => void
    /**
     * 点击了底部取消按钮触发的事件
     */
    onCancel?: (event?: CommonEvent) => void
    /** 点击了莫一项 */
    onClickItem?: (index:number,event?: CommonEvent) => void
}

export const LActionSheet: React.FC<LActionSheetProps> = props => {
  const { 
    className,
    style = {}, 
    zIndex=777,
    show=false, 
    title,
    locked=false,
    showCancel=true, 
    itemList=[],
    cancelText = '取消', 
    onClickItem,
    isHover=false,
    onClose,onCancel
  } = props
  const isIphoneX = Taro.getSystemInfoSync().model === 'iPhone X'
  const _onClose = useCallback(
    e => onClose && onClose(e),
    [onClose]
  )

  const _onCancel = useCallback(
    e => onCancel?onCancel(e):_onClose(e),
    [_onClose, onCancel]
  )

  return (
    <LPopup show={show}  onClose={_onClose} direction='bottom' locked={locked}  z-index={zIndex}>
      <View className={classnames('l-action-sheet',className)} style={style}>
        {title &&<View  className='l-item-button l-class-title l-title-class'>{ title }</View>}
        {
          itemList.map((item,index)=>(
            <View key={item.name} hoverClass={isHover?'list-hover':''}>
              <LButton onClick={e=>onClickItem&& onClickItem(index,e)}   openType={item.openType} icon={item.icon} type='default' size='long' special >
                <View style={item.color ? 'color: ' + item.color : ''} 
                  className={classnames('l-item-button','l-class-item','l-item-class',{
                    'l-image-button':item.image || item.icon
                  })}
                >
                  {
                    item.image && <Image  className='l-button-image' src={item.image} style={item.imageStyle} mode={item.imageMode} />
                  }
                  {
                    item.icon &&  <LIcon
                      name={item.icon}
                      l-className='l-item-button'
                      size={item.iconSize}
                      color={item.iconColor?item.iconColor:item.color}
                    />
                  }
                  <Text className='l-button-text'>{ item.name }</Text>
                </View>
              </LButton>
            </View>
          ))
        }
        {showCancel && <View
          className={classnames('l-cancel','l-class-cancel','l-cancel-class',{
            'l-cancel-x':isIphoneX
          })}
          hoverClass={isHover?'list-hover':''}
        >
          <LButton type='default' size='long' onClick={_onCancel} special>
            <View className='l-item-button l-cancel-button'>{cancelText}</View>
          </LButton>
        </View>}
      </View>
    </LPopup>
  )
}
