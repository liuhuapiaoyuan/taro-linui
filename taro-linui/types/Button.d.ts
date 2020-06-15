import { MouseEvent, ComponentClass } from 'react'
import { CommonEvent } from '@tarojs/components/types/common'


export interface LButtonProps {
  /**
   * 是否默认开启
   * @default false
   */
  open?: boolean
  /**
   * 标题
   */
  title?: string
 
  /**
   * 是否开启动画
   * @default true 
   */
  isAnimation?: boolean
  /**
   * 是否有头部下划线
   * @default true
   */
  hasBorder?: boolean
  /**
   * 描述信息
   */
  note?: string
  /**
   * 点击头部触发事件
   */
  onClick?: (open: boolean, event: CommonEvent) => void
}
 

 
export default LButtonProps