import React from 'react'
import { View } from '@tarojs/components'
import { LTabbar } from 'taro-linui'

import ContentTitle from '@/components/ContentTitle'
import ContentCard from '@/components/ContentCard'
import { data } from './data'

import './index.less'

const { config, config2, config3, config4, config5 } = data

const TabbarPage: React.FC<any> = props => {
  const {
  } = props
  return <View className='container'>
    <ContentTitle name="TabBar" describe="自定义标签页">
      <ContentCard className="content" name="基本使用">
        <View className='tabbar-wrapper'>
          <LTabbar
            position="custom"
            color={config.color}
            selectedColor={config.selectedColor}
            borderStyle={config.borderStyle}
            backgroundColor={config.backgroundColor}
            list={config.list} />
        </View>
      </ContentCard>

      <ContentCard className="content" name="更改尺寸">
        <View className='tabbar-wrapper'>
          <LTabbar
            position="custom"
            color={config2.color}
            selectedColor={config2.selectedColor}
            borderStyle={config2.borderStyle}
            fontSize={config2.fontSize}
            backgroundColor={config2.backgroundColor}
            list={config2.list} />
        </View>
      </ContentCard>

      <ContentCard className="content" name="经典案例-虾米音乐APP">
        <View className='tabbar-wrapper'>
          <LTabbar
            position="custom"
            selectedColor={config3.selectedColor}
            list={config3.list} />
        </View>
      </ContentCard>

      <ContentCard className="content" name="经典案例-闲鱼APP">
        <View className='tabbar-wrapper'>
          <LTabbar
            position="custom"
            list={config4.list} />
        </View>
      </ContentCard>

      <ContentCard className="content" name="经典案例-淘宝APP">
        <View className='tabbar-wrapper'>
          <LTabbar
            position="custom"
            color={config5.color}
            selectedColor={config5.selectedColor}
            backgroundImg={config5.backgroundImg}
            list={config5.list} />
        </View>
      </ContentCard>
    </ContentTitle>
  </View>
}

export default TabbarPage 