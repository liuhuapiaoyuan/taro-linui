import React, { useState } from 'react'
import { usePageScroll } from '@tarojs/taro'
import { View } from '@tarojs/components'
import classnames from 'classnames'


import { LSticky, LStickyItem } from 'taro-linui'

import ContentCard from '@/components/ContentCard'
import ContentTitle from '@/components/ContentTitle'

import { addresses } from './data'
import './index.less'


const StickyBase: React.FC<any> = props => {
  const [scrollTop, setScrollTop] = useState(0)
  usePageScroll(e => setScrollTop(e.scrollTop))
  return <View className="sticky-base">
    <ContentTitle name="Sticky" describe="吸顶容器">
      <ContentCard name="基本案例">
        <LSticky scrollTop={scrollTop} mode="js">
          {addresses.map(item => <LStickyItem
            header={<View className="index-header" >{item.index}</View>}
            key={item.index}>
            {item.items.map((sitem, index) => <View
              key={sitem + index}
              className="index-body-item">{sitem}</View>)}
          </LStickyItem>)}
        </LSticky>
      </ContentCard>
    </ContentTitle>
  </View>
}

export default StickyBase