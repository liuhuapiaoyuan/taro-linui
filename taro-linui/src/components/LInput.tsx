import React,{useState} from 'react'
import classnames from 'classnames'
import { View ,Text,Label,Input} from '@tarojs/components'
import {InputProps} from '@tarojs/components/types/Input'
import {LIcon} from './LIcon'
import {LErrorTip} from './LErrorTip'

import mergeStyle from '../mergeStyle'
import '../../style/LInput.less'

export interface LInputProps extends Omit<InputProps ,'type'|'children'>{
  className?: string
  style?:string|React.CSSProperties
  // children?: React.ReactChild
  /** 标签标题 */
  label?:string 
  /** 是否显示标签 */
  hideLabel?:boolean 
  /** 是否自定义标签 */
  labelCustom?:boolean 
  /** 是否显示下划线 */
  showRow?:boolean 
  /** 是否显示必填的标记  */
  required?:boolean 
  placeholder?:string 
  // /** 文本框输入类型 */
  // type?:'Text'
  // value?:any 
  /** 标签文本是否显示冒号 */
  colon?:boolean
  /** 是否显示清除标记 */ 
  clear?:boolean 
  /** 文本内容长度限制，默认140 */
  maxlength?:number
  /** 宽度 */ 
  width?:number 
  /** 标签的宽度 */
  labelWidth?:number
  /** 标签内容的定位 */
  labelLayout?:'top'|'left'|'right'
  /** 是否禁用 */
  // disabled?:boolean
  /**是否显示隐藏密码的标记 */
  showEye?:boolean 
  // /** 占位符的样式 */
  // placeholderStyle?:string
  /** 右侧插槽 */
  right?:React.ReactNode 
  /** 左侧插槽 */
  left?:React.ReactNode,
  /** 字段类型，增加password的处理 */
  type?:InputProps['type']|'password',
  /** 错误文本 */
  errorText?:string ,
  /** 清空文本 */
  onClear?:()=>void
  onChange?:(v:any)=>void

} 

const LInput: React.FC<LInputProps> = props => {
  const {
    className,style,left,right,
    label,
    hideLabel=false,
    labelCustom=false ,
    showRow=true ,
    required=false,
    colon=false ,
    // value,type,
    maxlength=140,
    width,
    labelWidth=100,
    disabled=false ,
    showEye=false,
    //用于调整是否显示密码的标记
    type,
    labelLayout='left',
    value,
    clear=false,
    errorText,onClear,
    onChange,onInput,
    ...inputRest 
  } = props
  const [stype,setStype] = useState(type)
    

  return <Label 
    className={classnames(className,'l-input-form-item',`l-input-form-item-${labelLayout}`,{'l-input-disabled':disabled})}
    style={mergeStyle({width:width??'auto'},style)}
  >
    {disabled && <View className='l-input-mask'></View>}
    <View className={classnames('l-input-row',{'l-input-hidden':!showRow})}   style={{width}} />
    <View   
      className={classnames('l-label-class','l-input-form-label',`l-input-form-label-${labelLayout}`,{'l-input-hidden':hideLabel})}
      style={{
        width:labelLayout!=='top' ? labelWidth : undefined,
        height:labelLayout=='top' ? labelWidth : undefined,
      }}
    >
      {(label && !labelCustom ) ? <Text>
        {required && <Text className='l-input-text-require'>* </Text>}
        {label}{colon &&<Text>：</Text>}
      </Text> : left}
    </View>
    <Input
      className={classnames('l-input-input','l-input-class',{
        'l-input-hideLabel' : hideLabel
      })}
      type={stype==='password' ? 'text' : stype}
      password={stype=='password'}
      maxlength={maxlength}
      disabled={disabled}
      value={value}
      onInput={e=>{
        onChange && onChange(e.detail.value)
        onInput && onInput(e)
      }}
      {...inputRest}
    />
    {
      showEye&&value && <LIcon name='eye'
        onClick={()=>setStype(s=>s==='password' ? 'text' : 'password')}
        size={40}
        className={classnames('l-input-l-eye','l-input-l-eye-'+type)}
      />
    }
    {
      clear&&value && <View className='close' onClick={onClear} >
        <View  className='l-input-close-icon'>
          <LIcon  name='close' color='#fff' size={16} />
        </View>
      </View>
    }
  
    {right}
    {errorText && <LErrorTip errorText={errorText} />}
  </Label>

}

export { LInput }