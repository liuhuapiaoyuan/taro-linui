import React, { useState } from 'react'
import { View } from '@tarojs/components'
import { usePageScroll } from '@tarojs/taro'
import { LIndexList } from 'taro-linui'
import ContentTitle from '@/components/ContentTitle'
import { sideBarData, nameData } from './data'

import './index.less'



export default function LayoutList() {
  const [scrollTop, setScrollTop] = useState(0)
  usePageScroll((e) => {
    setScrollTop(e.scrollTop)
  })
  return <View> 下
    <ContentTitle name="IndexList" describe="索引列表" />
    <LIndexList sidebarData={sideBarData} scrollTop={scrollTop}></LIndexList>
  </View>
}