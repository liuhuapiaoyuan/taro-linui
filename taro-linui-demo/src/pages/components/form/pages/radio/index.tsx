import React, { useState } from 'react'
import { View, Image, Text } from '@tarojs/components'
import ContentTitle from '@/components/ContentTitle'
import ContentCard from '@/components/ContentCard'
import { LRadio, LRadioGroup } from 'taro-linui'

import { data } from './data'
import './index.less'

const RadioPage: React.FC<any> = () => {
  const [a, seta] = useState(1)
  const [b, setb] = useState(1)
  const [c, setc] = useState(1)
  const [d, setd] = useState(1)
  const [e, sete] = useState(1)
  const [f, setf] = useState(1)
  const [g, setg] = useState(1)
  const [h, seth] = useState(1)
  return <View className='radio-page'>
    <ContentTitle name="Radio" describe="单选框">
      <ContentCard
        className="content"
        name="自定义样式"
      >
        <View className='buttun-wrapper'>
          <View className='title'>1. 2019年夏季赛冠军你认为是哪个队伍？</View>
          <LRadioGroup value={a} onChange={seta} className="l-radio-group" >
            {data.items6.map(item => <LRadio
              className="l-radio"
              key={item.id}
              custom
              customIcon={item.id == a ? <Image className="radio-img" src={require('./images/radiobutton.png')} /> : <Image className="radio-img" src={require('./images/radio.png')} />}
            >
              <Text>{item.name}</Text>
            </LRadio>)}
          </LRadioGroup>
        </View>
      </ContentCard>
      <ContentCard
        className="content"
        name="基本案例"
      >
        <View className='buttun-wrapper'>
          <View className='title'>2. 下面选项中，什么瓜不能吃？</View>
          <LRadioGroup value={b} onChange={setb} className="l-radio-group">
            {data.items1.map(item => <LRadio
              className="l-radio"
              key={item.id}
              placement={data.position}>
              {item.name}
            </LRadio>)}
          </LRadioGroup>
        </View>
      </ContentCard >

      <ContentCard
        className="content"
        name="更改布局方式"
      >
        <View className='buttun-wrapper'>
          <View className='title'>3.考试时候用什么铅笔？</View>
          <LRadioGroup value={c} onChange={setc} placement="row" className="l-radio-group" >
            {
              data.items2.map(item => <LRadio
                className="l-radio"
                key={item.id}
                placement={data.position}>
                {item.name}
              </LRadio>)
            }
          </LRadioGroup>
        </View>
      </ContentCard >
      <ContentCard
        className="content"
        name="自定义颜色"
      >
        <View className='buttun-wrapper' >
          <View className='title'>4. 在《魔兽世界》这款游戏里，巫妖王是谁？</View>
          <LRadioGroup className="l-radio-group" value={d} onChange={setd} >
            {data.items3.map(item => <LRadio
              className="l-radio"
              key={item.id}
              placement={data.position}
              selectColor='#FFE57F'>
              {item.name}
            </LRadio>)}
          </LRadioGroup>
        </View>
      </ContentCard >

      <ContentCard
        className="content"
        name="更改尺寸"
      >
        <View className='buttun-wrapper'>
          <View className='title'>5.自带消音器和4倍镜的狙击枪是？</View>
          <LRadioGroup className="l-radio-group" value={e} onChange={sete} >
            {
              data.items4.map(item => <LRadio
                className="l-radio"
                key={item.id}
                placement={data.position}
                shape="circle"
                size="36rpx">
                {item.name}
              </LRadio>)
            }
          </LRadioGroup>
        </View>
      </ContentCard >



      <ContentCard
        className="content"
        name="更改Radio的位置"
      >
        <View className='buttun-wrapper'>
          <View className='title'>6.盖伦的武器叫什么？</View>
          <LRadioGroup className="l-radio-gr oup" value={f} onChange={setf} >
            {data.items5.map(item => <LRadio
              className="l-radio"
              key={item.id}
              placement="right">
              {item.name}
            </LRadio>)}
          </LRadioGroup>
        </View>
      </ContentCard >

      <ContentCard
        className="content"
        name="设置禁用"
      >
        <View className='buttun-wrapper'>
          <View className='title'>7.程序猿最渴望拥有？</View>
          <LRadioGroup className="l-radio-group" value={g} onChange={setg} >
            {data.items7.map(item => <LRadio
              className="l-radio"
              key={item.id}
              disabled={item.disabled}>
              {item.name}
            </LRadio>)}
          </LRadioGroup>
        </View>
      </ContentCard >

      <ContentCard
        className="content"
        name="带下划线"
      >
        <View className='buttun-wrapper'>
          <View className='title'>8.《魔兽世界怀旧服》什么时候公测？</View>
          <LRadioGroup className="l-radio-group" value={h} onChange={seth} >
            {data.items8.map(item => <LRadio
              className="l-radio l-title-class-border"
              key={item.id}
              placement={data.position}>
              {item.name}
            </LRadio>)}
          </LRadioGroup>
        </View>
      </ContentCard >

    </ContentTitle >
  </View >

}

export default RadioPage 