import React from 'react'
import { View ,Label, Textarea, CommonEvent } from '@tarojs/components'
import {TextareaProps} from '@tarojs/components/types/Textarea'
import classnames from 'classnames'
import {LErrorTip} from '../index'


import '../../style/LTextarea.less'

export interface LTextareaProps extends TextareaProps {
  className?: string
  children?: React.ReactNode
  style?:string|React.CSSProperties
  /* 占位符 */
  placeholder?:string
  /** 是否显示文字长度计数器 */ 
  indicator?:boolean 
  /** 自动计算高度 */
  autoHeight?:boolean 
  /** 是否显示文本输入框边框 */
  border?:boolean 
  errorText?:string 
  onChange?: (value: string, event?: CommonEvent | undefined) => void
}

const LTextarea: React.FC<LTextareaProps> = props => {
  const {
    autoHeight=false,
    border= true,
    onChange,
    onInput,
    disabled,
    value,
    maxlength=200,
    errorText,
    indicator=true,
    ...rest
  } = props
  const length = value ? value.length : 0
  return <>
    <Label className={classnames('form-item',{disabled})}>
      <View className={classnames('default-border',{border})}>
        {disabled && <View className='mask'  ></View>}
        <Textarea
          className={classnames('l-inner-class',autoHeight ? 'textarea-auto-height': 'textarea')}
          disabled={disabled}
          value={value}
          maxlength={maxlength}
          onInput={e=>{
            if(onChange) onChange(e.detail.value,e)
            if(onInput) onInput(e)
          }}
          autoHeight={autoHeight}
          {...rest}
        />
        {indicator &&  <View className='indicator' >{ length+ '/' +  maxlength}</View>}
      </View>
    </Label>
    {errorText && <LErrorTip className='l-error-text l-error-text-class' errorText={errorText} />
    }
  </>
}

export { LTextarea }