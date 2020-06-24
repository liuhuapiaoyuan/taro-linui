import React from 'react'
import Taro from '@tarojs/taro'
import {View,CoverView,CoverImage} from '@tarojs/components'
import deviceUtil from '../../device'

import '../../../style/LCapsuleBar.less'

export interface LCapsuleBarProps  {
  className?: string
  children?:React.ReactNode
  style?:React.CSSProperties
  /** 胶囊栏的颜色 默认是 white白色 */
  bgColor?:string 
  /** 状态栏颜色，默认是 transparent透明 */
  statusBarColor?:string
  /**标题栏颜色，默认是 transparent 透明 */
  titleBarColor?:string 
  /** 标题颜色，默认是 black 黑色 */
  titleColor?:string
  /** 胶囊按钮颜色，默认是  black */
  capsuleColor?:'white'|'black'
  /** 禁用胶囊左侧按钮，返回上一页 */
  disableBack?:boolean 
  /** 禁用胶囊右侧按钮返回主页 */
  disableHome?:boolean 
  /** 隐藏整个胶囊按钮 */
  hiddenCapsule?:boolean
  /** 首页路径 */
  homePage:string
  /** 页面标题 */
  title:string
  /** 是否有顶部填充 
   *  true:页面内容布局从胶囊栏下边缘开始，适用于胶囊栏有背景色时使用
   * false 时，页面内容布局从屏幕顶部下边缘开始，适用于胶囊栏背景透明时使用
  */
  hasPadding?:boolean

}
//  // 标题栏高度（单位px）
//  titleBarHeight: deviceUtil.getTitleBarHeight(),
//  // 状态栏高度（单位px）
//  statusBarHeight: deviceUtil.getStatusBarHeight(),
//  // 左侧胶囊按钮信息，根据右侧按钮去计算出来
//  capsuleButtonInfo: null
function getCapsuleButtonInfo() {
  const screenWidth = Taro.getSystemInfoSync().screenWidth;
  let capsuleButtonInfo = Taro.getMenuButtonBoundingClientRect();
  capsuleButtonInfo.left = screenWidth - capsuleButtonInfo.right;
  capsuleButtonInfo.right = capsuleButtonInfo.left + capsuleButtonInfo.width;
  return capsuleButtonInfo;
}
const LCapsuleBar : React.FC<LCapsuleBarProps> = props=>{
  const {
    bgColor="white",
    statusBarColor="transparent",
    titleBarColor="transparent",
    titleColor="black",
    capsuleColor="black",
    disableBack=false,
    disableHome=false,
    hiddenCapsule=false,
    hasPadding=false,
    homePage,
    children,
    title
  } = props
  const titleBarHeight = deviceUtil.rpx2px(deviceUtil.getTitleBarHeight())
  const statusBarHeight = deviceUtil.rpx2px(deviceUtil.getStatusBarHeight())
  const capsuleButtonInfo = getCapsuleButtonInfo()
 
  return  <View className="container" style={{paddingTop:hasPadding?titleBarHeight+statusBarHeight:0}}>
  {/* 胶囊栏 */}
  <CoverView className="capsule-bar" style={{backgroundColor:bgColor}}>
  {/* 状态栏 */}
  {/* 这里加4是因为不加4的时候statusBar和titleBar之间容易出现一条白线，所以加上4让两部分重叠，消除白线 */}
    <CoverView className="status-bar"
      style={{height:statusBarHeight+4,backgroundColor:statusBarColor}}
     />
 
    {/* <!--标题栏--> */} 
    <CoverView
      className="title-bar"
      style={{height:titleBarHeight,backgroundColor:titleBarColor}}
    >
      <CoverView className="title l-title-class" style={{color:titleColor}}>{title}</CoverView>
    </CoverView>

    {/* 胶囊按钮 */}
    {(!hiddenCapsule)&&<CoverView
      className="capsule-button"
      style={{
        borderColor:`rgba(${capsuleColor==='black'?'0,0,0,0.1':'255,255,255,0.25'})`,
        backgroundColor:`rgba(${capsuleColor==='black'?'255,255,255,0.6':'0,0,0,0.15'})`,
        width:capsuleButtonInfo.width,
        height:capsuleButtonInfo.height,
        left:capsuleButtonInfo.left,
        top:capsuleButtonInfo.top,
      }}
    >
      {/* 左侧按钮 */}
      <CoverView  onClick={()=>Taro.navigateBack()} hoverClass={`icon-wrapper-hover-${capsuleColor}`}  className="icon-wrapper"
          style={{width:capsuleButtonInfo.width/2,height:capsuleButtonInfo.height/2}} >
        <CoverImage className="icon-left" src={require(`../../../assert/icons/capsule-left-${capsuleColor}.png`)}></CoverImage>
      </CoverView>
      {/* 分割线 */}
      <CoverView className="line"/>
      {/* 右侧按钮 */}
      <CoverView   hoverClass={`icon-wrapper-hover-${capsuleColor}`} className="icon-wrapper"
            onClick={()=>Taro.switchTab({
              url:homePage,
              fail(){
                Taro.navigateTo({url:homePage})
              }
            })}
          style={{width:capsuleButtonInfo.width/2,height:capsuleButtonInfo.height/2}}>
        <CoverImage className="icon-right" src={require(`../../../assert/icons/capsule-right-${capsuleColor}.png`)}></CoverImage>
      </CoverView>
    </CoverView>}
  </CoverView>
  <View className="content-container">
    {children}
  </View>
</View>
}  
// /**
//  * 导航栏的转换方法，可以使得导航栏随着滚动条转换透明度
//  * @param scrollTop 
//  * @param maxScroll 
//  */
// LCapsuleBar.transformScrollTop = (scrollTop:number,maxScroll:number=130 ):string=>{
//   let opciaty = scrollTop / maxScroll;
//   if (opciaty >= 1) {
//     opciaty = 1;
//   } else if (opciaty <= 0) {
//     opciaty = 0;
//   }
//   return `rgba(255,0,0,${opciaty})`
// }
export {LCapsuleBar}