import React from 'react'
import { View } from '@tarojs/components' 
import classnames from 'classnames' 

import '../../../style/LIndexList.less'

export interface LIndexListProps {
  className?: string
  children?: React.ReactChild
  scrollTop?:number 
  /** 是否自动吸附 */
  isStick?:boolean 
  /** sidebar 显示的索引内容 */
  sidebarData?:any[]
  /** 是否显示sidebar */
  showSidebar?:boolean 
  /** Anchor 吸附时距离顶部的距离（单位 rpx） */
  stickOffsetTop?:number

}

const LIndexList: React.FC<LIndexListProps> = props => {
  const {
    scrollTop=0,
    showSidebar=true,
    children,
    sidebarData,
    
  } = props
  const tipText='11'
  const showTip = false 
  const activeSidebarItem = 1
  const tipHeight = 1
  const  tipHeightOverflow = 2
  return <View className='index-list'>
    {/* <!--Sidebar 侧栏--> */}
    { showSidebar && <View   className='sidebar l-sidebar-class' > 
      {
      sidebarData?.map((item,index)=><View 
        key={item}
        className={classnames('sidebar-item','l-sidebar-item-class',
          activeSidebarItem===index?'sidebar-item-active l-selected-class':'l-unselected-class'
        )}
      >
        {item}
      </View>
      )
      }
      {/* <!--Tip 提示--> */}
      <View className='tip l-tip-class' 
        style={{
          top:1,
          opacity:showTip?1:0,
          transform: `rotate(-45deg) translateY(${-tipHeight/2-tipHeightOverflow}px)`, 
        }}
      >
        <View className='tip-text l-tip-text-class'>{tipText}</View>
      </View>
    </View>}
    {children}
  </View>

}

export { LIndexList }