import React, { useCallback } from 'react'
import classNames from 'classnames'
import { View } from '@tarojs/components'
import { CommonEvent } from '@tarojs/components/types/common'

import '../../style/LActionSheet.less'

export interface LActionSheetProps  {
    className?: string
    /**自定义样式 */
    style?: React.CSSProperties 
     /** 是否显示 默认为false*/
     show?: boolean 
     /** 是否显示取消按钮 */
     showCancel:boolean
     /** 取消按钮的文本 */
     cancelText?: React.ReactNode
    /** 标题 */
    title?: React.ReactNode
    /** 展示层级，默认是777 */
    zIndex:number
     /**
     * 元素被关闭触发的事件
     */
    onClose?: (event?: CommonEvent) => void
    /**
     * 点击了底部取消按钮触发的事件
     */
    onCancel?: (event?: CommonEvent) => void
}

export const LActionSheet: React.FC<LActionSheetProps> = props => {
    const { className,
        zIndex=777,
        style = {}, show, title, cancelText = '取消', children } = props

    const onClose = useCallback(
        e => {
            if (props.onClose) {
                props.onClose(e)
            }
        },
        [props.onClose]
    )

    const onCancel = useCallback(
        e => {
            if (props.onCancel) {
                props.onCancel(e)
            }
            onClose(e)
        },
        [onClose, props.onCancel]
    )

    const onTouchMove = useCallback(e => {
        e.stopPropagation()
        e.preventDefault()
    }, [])

    return (
        <View
            className={classNames('at-action-sheet', { 'at-action-sheet--active': isOpened }, className)}
            style={style}
            onTouchMove={onTouchMove}
        >
            <View onClick={onClose} className="at-action-sheet__overlay" />
            <View className="at-action-sheet__container">
                {title && <View className="at-action-sheet__header">{title}</View>}
                <View className="at-action-sheet__body">
                    {children}
                    {cancelText && (
                        <View className="at-action-sheet__footer" onClick={onCancel}>
                            {cancelText}
                        </View>
                    )}
                </View>
            </View>
        </View>
    )
}
