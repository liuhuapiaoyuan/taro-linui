import React from 'react'
import { View } from '@tarojs/components'
import classnames from 'classnames'

import ContentTitle from '@/components/ContentTitle'
import ContentCard from '@/components/ContentCard'

import { LRate } from 'taro-linui'



import './index.less'


const RatePage: React.FC<any> = props => {
  const {
  } = props
  return <View className='rate-page'>
    <ContentTitle name="Rate" describe="评分">
      <ContentCard className="content" name="基本案例">
        <LRate />
      </ContentCard>

      <ContentCard className="content" name="设置默认选中的个数">
        <LRate value={3} />
      </ContentCard>

      <ContentCard className="content" name="设置默认选中的个数(小数类型)">
        <View>
          <LRate value={3.2} size={28} />
        </View>
        <View>
          <LRate value={3.3} size={28} />
        </View>
        <View>
          <LRate value={3.7} size={28} />
        </View>
      </ContentCard>

      <ContentCard className="content" name="自定义大小">
        <LRate size={28} />
      </ContentCard>

      <ContentCard className="content" name="自定义颜色">
        <LRate activeColor="#FFDD55" inActiveColor="#FFF5CE" />
      </ContentCard>



      <ContentCard className="content" name="自定义元素个数">
        <LRate value={3} count={10} />
      </ContentCard>

      <ContentCard className="content" name="禁用组件">
        <LRate value={5} count={10} disabled />
      </ContentCard>

      <ContentCard className="content" name="自定义图片">
        <LRate value={4}
          activeImage={require('../../images/smile-active.png')}
          inActiveImage={require('../../images/smile-inactive.png')}
        />
      </ContentCard>

      <ContentCard className="content" name="自定义图标">
        <View>
          <LRate value={4} name="like" />
        </View>
        <View className="box">
          <LRate
            value={4} name="shouye" activeColor="#F4516C"
            inActiveColor="rgba(244,81,108,0.1)"
            // l-class-icon="iconfont"
            className="l-class-icon"
          />
        </View>

      </ContentCard>
    </ContentTitle>
  </View>
}

export default RatePage