import React  from 'react'
import {View} from '@tarojs/components'
import classnames from 'classnames'

import '../../style/LSpin.less'

export interface LSpinProps  {
  className?: string
  children?:React.ReactNode
  /**颜色 */
  color?:string
  /** 显示/隐藏 */
  show?:boolean
  /** 类型，默认为：flash */
  type?:'flash'|'change',
  /** 是否自定义内容 */
  custom?:boolean
  /** 尺寸，默认为：default */
  size?:'default'|'large'|'mini'
}

const LSpin : React.FC<LSpinProps> = props=>{
  const {
    children,
    color,show,type,custom,size
  } = props
  if(!show){return null }
  return  <View 
    className={classnames(`${type}-spinner`,{
      'l-class':'flash'==type,
      [`spinner-${type}-${size}`]:!(type==='change'||custom)
    })}
  >
    {custom && children}
    {(!custom)&&( <>
      <View 
        style={{backgroundColor:color}}
        className={classnames('l-class',type+'-bounce1','spinner-'+ type + '-' + size)}
      />
      {(type==='flash' || type==='change') && <View 
        style={{backgroundColor:color}}
        className={classnames(type+'-bounce2','spinner-'+ type + '-' + size)}
      />}
      {type==='change' && <View 
        style={{backgroundColor:color}}
        className={classnames(type+'-bounce3','spinner-'+ type + '-' + size)}
      />} 
    </> )}
  </View>
}  
LSpin.defaultProps = {
  color:'#3683D6',
  show:false,
  type:'flash',
  custom:false,
  size:'default'
}

export {LSpin}