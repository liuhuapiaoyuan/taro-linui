import React from 'react'
import {View} from '@tarojs/components'
import classnames from 'classnames'

import '../../style/LLoading.less'

export interface LLoadingProps  {
  className?: string
  children?:React.ReactNode
  /**内容插槽 */
  content?:React.ReactChild
  style?:React.CSSProperties
  /** 显示或者隐藏 */
  show?:boolean
  /** 透明度，注意这里是string类型，默认为1 */
  opacity?:string
    /** 背景颜色 */
  bgColor?:string
 /**组件的层级，默认为 776 */
  zIndex?:number,
  /** 展示形态，默认为rotate */
  type?:'flash'| 'flip'| 'change'| 'rotate'| 'circle'
    /** 动画颜色 */
  color?:string
  /** 组件的尺寸 */
  size?:'medium'|'large'
  /**  是否完全自定义 */
  custom?:boolean 
    /** 全屏loading模式，默认为false */
  fullScreen?:boolean
  distance?:number 
}

const LLoading : React.FC<LLoadingProps> = props=>{
  const {
    fullScreen=false,
    custom=false,
    type='rotate',
    size='medium',
    opacity='1',
    show=false,
    children,
    content,
    bgColor,
    zIndex=776,
    distance=0,
    color
  } = props
  return  <>
  {show && fullScreen && (
      <View 
      //show && fullScreen
          style={{backgroundColor:bgColor,opacity,zIndex}}
          className={classnames('container-loading','l-container-class',{
              'content':fullScreen
          })} >
    <View 
          //wx:if="{{show}}"
          className={classnames('l-class',type + '-spinner',{
              ['spinner-' + type + '-' + size]:type==='change'||custom 
          })}
          style={{marginBottom:distance}}>
      {custom && children}
      {
          !custom && (<>
              {(type==='flash' || type==='change' || type==='flip') && <View  
                  style={{ backgroundColor:color?color:'' }} 
                  className={classnames(type+'-bounce1','spinner-'+ type + '-' + size)}
                  />}
              {(type==='flash' || type==='change' ) && <View  
                  style={{ backgroundColor:color?color:'' }} 
                  className={classnames(type+'-bounce2','spinner-'+ type + '-' + size)}
                  />}
              {( type==='change' ) && <View  
                  style={{ backgroundColor:color?color:'' }} 
                  className={classnames(type+'-bounce3','spinner-'+ type + '-' + size)}
              />}
              {( type==='rotate' ) && <View  
                  style={{ backgroundColor:color?color:'' }} 
                  className={classnames('rotate','rotate-' + size)}
              />}
              {( type==='circle' ) && <View   className={classnames('spinner-circle','spinner-circle-' + size)}>
                  <View className="spinner-container container1">
                  <View className={classnames('circle1','container-view',type + '-' + size)}  style={{backgroundColor:color}} />
                  <View className={classnames('circle2','container-view',type + '-' + size)}  style={{backgroundColor:color}} />
                  <View className={classnames('circle3','container-view',type + '-' + size)}  style={{backgroundColor:color}} />
                  <View className={classnames('circle4','container-view',type + '-' + size)}  style={{backgroundColor:color}} />
                  </View>
                  <View className="spinner-container container2">
                  <View className={classnames('circle1','container-view',type + '-' + size)}  style={{backgroundColor:color}} />
                  <View className={classnames('circle2','container-view',type + '-' + size)}  style={{backgroundColor:color}} />
                  <View className={classnames('circle3','container-view',type + '-' + size)}  style={{backgroundColor:color}} />
                  <View className={classnames('circle4','container-view',type + '-' + size)}  style={{backgroundColor:color}} />
                  </View>
                  <View className="spinner-container container3">
                  <View className={classnames('circle1','container-view',type + '-' + size)}  style={{backgroundColor:color}} />
                  <View className={classnames('circle2','container-view',type + '-' + size)}  style={{backgroundColor:color}} />
                  <View className={classnames('circle3','container-view',type + '-' + size)}  style={{backgroundColor:color}} />
                  <View className={classnames('circle4','container-view',type + '-' + size)}  style={{backgroundColor:color}} />
                  </View>
              </View>
              }
          </>)
      }
    </View>
  </View>
  )}
{!fullScreen && (
    <View className="l-container-class" style="position: relative">
        {content}
    { show && <>
        <View className="inner-loading-container" style={{backgroundColor:bgColor,opacity,zIndex}} />
        <View  className="l-class loading-icon-container" style={{zIndex:zIndex+1}}>
            <View 
            className={classnames(type+'-spinner',{
              ['spinner-' + type + '-' + size]:!(type==='change'||custom)
            })}  >
                {custom && children}
                {
                    !custom && (<>
                        {(type==='flash' || type==='change' || type==='flip') && <View  
                            style={{ backgroundColor:color?color:'' }} 
                            className={classnames(type+'-bounce1','spinner-'+ type + '-' + size)}
                            />}
                        {(type==='flash' || type==='change' ) && <View  
                            style={{ backgroundColor:color?color:'' }} 
                            className={classnames(type+'-bounce2','spinner-'+ type + '-' + size)}
                            />}
                        {( type==='change' ) && <View  
                            style={{ backgroundColor:color?color:'' }} 
                            className={classnames(type+'-bounce3','spinner-'+ type + '-' + size)}
                        />}
                        {( type==='rotate' ) && <View  
                            style={{ backgroundColor:color?color:'' }} 
                            className={classnames('rotate','rotate-' + size)}
                        />}
                        {( type==='circle' ) && <View   className={classnames('spinner-circle','spinner-circle-' + size)}>
                            <View className="spinner-container container1">
                            <View className={classnames('circle1','container-view',type + '-' + size)}  style={{backgroundColor:color}} />
                            <View className={classnames('circle2','container-view',type + '-' + size)}  style={{backgroundColor:color}} />
                            <View className={classnames('circle3','container-view',type + '-' + size)}  style={{backgroundColor:color}} />
                            <View className={classnames('circle4','container-view',type + '-' + size)}  style={{backgroundColor:color}} />
                            </View>
                            <View className="spinner-container container2">
                            <View className={classnames('circle1','container-view',type + '-' + size)}  style={{backgroundColor:color}} />
                            <View className={classnames('circle2','container-view',type + '-' + size)}  style={{backgroundColor:color}} />
                            <View className={classnames('circle3','container-view',type + '-' + size)}  style={{backgroundColor:color}} />
                            <View className={classnames('circle4','container-view',type + '-' + size)}  style={{backgroundColor:color}} />
                            </View>
                            <View className="spinner-container container3">
                            <View className={classnames('circle1','container-view',type + '-' + size)}  style={{backgroundColor:color}} />
                            <View className={classnames('circle2','container-view',type + '-' + size)}  style={{backgroundColor:color}} />
                            <View className={classnames('circle3','container-view',type + '-' + size)}  style={{backgroundColor:color}} />
                            <View className={classnames('circle4','container-view',type + '-' + size)}  style={{backgroundColor:color}} />
                            </View>
                        </View>
                        }
                    </>)
                }
            </View>
        </View>
    </>}
</View>

)}
  </>
}  

export {LLoading}