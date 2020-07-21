import React, { useState } from 'react'
import Taro from '@tarojs/taro'
import { View } from '@tarojs/components'
import ContentTitle from '@/components/ContentTitle'
import ContentCard from '@/components/ContentCard'
import { LButton, LCountdown } from 'taro-linui'



import './index.less'


const CountDownIndex: React.FC<any> = props => {
  const [status, setStatus] = useState(true)
  return <View className='count-down-container'>
    <ContentTitle name="Countdown" describe="倒计时">
      <ContentCard className="content" name="基本倒计时">
        <LCountdown />
        {/* <LCountdown time="2020-5-1 18:30" /> */}
      </ContentCard>

      <ContentCard className="content" name="传入时间为秒">
        <LCountdown timeType="second" onEnd={() => Taro.showToast({
          title: '时间到',
          icon: 'none'
        })} time="10" />
        <LCountdown timeType="second" time="-1500" />
      </ContentCard>

      <ContentCard className="content" name="自定义显示日期格式">
        <LCountdown timeType="second" time="20" format="{%s}秒" isZeroPadd={false} />
        <LCountdown timeType="second" time="1500" format="{%m}:{%s}" />
        <LCountdown timeType="second" time="3690" format="{%h}:{%m}:{%s}" />
        <LCountdown timeType="second" time="-1500" />
      </ContentCard>

      <ContentCard className="content" name="切换计时状态">
        <LCountdown timeType="second" time={600} status={status} />
        <LButton onClick={() => setStatus(!status)} className="btn-toggle">{!status ? '播放' : '暂停'}</LButton>
      </ContentCard>

      <ContentCard className="content" name="纪念日模式计时">
        <LCountdown time="2020-04-24" countdownType="anniversary" />
      </ContentCard>

      <ContentCard className="content" name="自定义样式">
        <LCountdown className="countdown-blue" time="30" timeType="second" />
      </ContentCard>

    </ContentTitle>
  </View>
}

export default CountDownIndex