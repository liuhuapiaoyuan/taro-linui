import React from 'react'
import Taro from '@tarojs/taro'
import { View } from '@tarojs/components'
import { LGrid, LGridItem, LIcon } from 'taro-linui'

import ContentCard from '@/components/ContentCard'
import ContentTitle from '@/components/ContentTitle'

import './index.less'

function onTapBase() {
  Taro.navigateTo({
    url: '/pages/components/layout/pages/sticky/pages/sticky-base/index'
  })
}

function onTapAppoint() {
  Taro.navigateTo({
    url: '/pages/components/layout/pages/sticky/pages/sticky-appoint/index'
  });
}

function onTapDynamic() {
  Taro.navigateTo({
    url: '/pages/components/layout/pages/sticky/pages/sticky-dynamic/index'
  });
}

const StickyIndex: React.SFC<any> = () => {

  return <View className="sticky-container">
    <ContentTitle name="Sticky" describe="吸顶容器">

      <ContentCard className="content" name="使用案例">
        <View className="View-container">
          <LGrid rowNum={3} className="grid-container">
            <LGridItem onClick={onTapBase} className="grid-item">
              <LIcon name="order" />
              <View className="text">基本案例</View>
            </LGridItem>
            <LGridItem onClick={onTapAppoint} className="grid-item">
              <LIcon name="order" />
              <View className="text">指定吸附位置</View>
            </LGridItem>
            <LGridItem onClick={onTapDynamic} className="grid-item">
              <LIcon name="order" />
              <View className="text">动态插入内容</View>
            </LGridItem>
          </LGrid>
        </View>
      </ContentCard >

    </ContentTitle >
  </View >

}

export default StickyIndex 