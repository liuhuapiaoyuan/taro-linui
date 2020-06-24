import React from 'react'
import {View} from '@tarojs/components'
import Taro from '@tarojs/taro'
import classnames from 'classnames'
import { CommonEvent } from '@tarojs/components/types/common'
import {LPopup} from './LPopup'
import '../../style/LDialog.less'

export interface LDialogProps  {
  className?: string
  children?:React.ReactNode
  style?:string|React.CSSProperties|undefined
  /** 控制是否显示，默认false */
  show?:boolean 
  /** 弹窗类型， 【 alert: 提示框， confirm: 确认框 】,默认alert */
  type?:  'alert'|'confirm'
  /** 弹窗标题，默认 提示 */
  title?:string 
  /** 标题文本颜色，默认#333 */
  titleColor?:string,
  /** 是否显示标题，默认true */
  showTitle?:boolean 
  /**弹窗文本内容 */
  content?:string
  /** 是否锁定背景，默认true */
  locked?:boolean 
  /** 确定按钮的文本 */
  confirmText?:string 
  /** 确定按钮的颜色，默认是 '#3683d6' */
  confirmColor?:string 
  /** 取消按钮的文本 */
  cancelText?:string 
  /** 取消按钮的颜色 */
  cancelColor?:string
  /** 内容文本的颜色，默认 rgba(89,108,142,1)*/
  contentColor?:string 
  /** 是否注入到Taro全局api中使用 */
  openApi?:boolean 
  /** 弹窗层级，默认888 */
  zIndex?:number|string
    /** 确定事件 */
  onConfirm?:(event?: CommonEvent) => void
  /** 取消事件 */
  onCancel?:(event?: CommonEvent) => void
}
/**
 * 弹窗组件，暂时没有支持openApi，也就是说暂时还是只能通过props来控制显示内容
 * 
 * @param {LDialogProps} props 
 */
const LDialog : React.FC<LDialogProps> = props=>{
  const {
    className,children,style,
    show=false,
    type='alert',
    title='提示',
    titleColor='#333',
    showTitle=true,
    content='',
    locked=true,
    confirmText='确定',
    cancelText='取消',
    confirmColor='#3683d6',
    cancelColor='#45526b',
    zIndex=888,
    contentColor='rgba(89,108,142,1)',
    onCancel,onConfirm
  } = props
  const { windowHeight, screenHeight } = Taro.getSystemInfoSync();
  const distance = screenHeight-windowHeight

  return  <LPopup  style={style}  show={show}
            animation
            direction="center"
            locked={locked}
            onClose={()=>1}  
            className={classnames(className,"l-bg-class")}
            z-index={zIndex}>
 <View className="dialog-container l-class" style={{marginBottom:distance}}>
        {showTitle && <View className="dialog-title l-title-class" style={{color:titleColor}} >{title}</View>}
        <View className="dialog-content l-content-class" style={{color:contentColor}}>
            {children}
            {content}
        </View> 
        <View className="dialog-btn-group">
            {type==='confirm' && <View
                className="dialog-btn-cancel l-cancel-class"
                style={{color:cancelColor}}
                onClick={onCancel}
                hoverClass='group-hover'
                >{cancelText}</View>}
            <View
                className="dialog-btn-confirm l-confirm-class"
                style={{color:confirmColor}}
                hoverClass='group-hover'
                onClick={onConfirm}
            >{confirmText}</View>
        </View>
    </View>
  </LPopup>
}  

export {LDialog}