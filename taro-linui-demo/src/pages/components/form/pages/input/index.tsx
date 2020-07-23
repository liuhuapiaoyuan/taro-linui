import React, { useState } from 'react'
import { View, Image } from '@tarojs/components'
import ContentTitle from '@/components/ContentTitle'
import ContentCard from '@/components/ContentCard'
import { LInput, LIcon } from 'taro-linui'
import './index.less'


const InputPage: React.FC<any> = props => {
  const [v, setV] = useState<string>()
  const [c, setC] = useState<string>()
  return <View className='input-page'>
    <ContentTitle name="Input" describe="输入框">
      <ContentCard
        className="content"
        name="基本案例"
      >
        <View className='buttun-wrapper'>
          <LInput
            width={375}
            label="用户名"
            clear
            placeholder="请输入用户名"
            labelWidth={85} />
          <LInput
            colon
            label="密码"
            width={375}
            type="password"
            labelWidth={85}
            showEye
            value={v}
            onChange={setV}
            placeholder="请输入密码" />
        </View>
      </ContentCard>

      <ContentCard
        className="content"
        name="对齐方式（居右）"
      >
        <View className='buttun-wrapper'>
          <LInput
            label="用户名"
            width={375}
            placeholder="请输入用户名"
            labelLayout="right"
            labelWidth={85} />
          <LInput
            label="密码"
            width={375}
            labelLayout="right"
            labelWidth={85}
            placeholder="请输入密码" />
        </View>
      </ContentCard>

      <ContentCard
        className="content"
        name="输入框类型"
      >
        <View className='buttun-wrapper'>
          <LInput
            label="文本"
            width={375}
            type="text"
            clear={true}
            placeholder="请输入文本"
            labelWidth={85} />
          <LInput
            label="数字"
            width={375}
            type="number"
            placeholder="请输入数字"
            labelWidth={85} />
          <LInput
            label="密码"
            width={375}
            type="password"
            labelWidth={85}
            placeholder="请输入密码，不少于6位" />
          <LInput
            label="身份证"
            width={375}
            type="idcard"
            labelWidth={85}
            placeholder="身份证号码" />
          <LInput
            label="小数"
            width={375}
            type="digit"
            placeholder="请输入小数"
            labelWidth={85} />
        </View>
      </ContentCard>


      <ContentCard
        className="content"
        name="带有状态"
      >
        <View className='buttun-wrapper'>
          <LInput
            label="必填"
            width={375}
            placeholder="这里是必填项"
            required
            labelWidth={85} />
          <LInput
            label="清除按钮"
            width={375}
            clear={true}
            value={c}
            onChange={setC}
            labelWidth={85}
            placeholder="输入后可以清除" />
          <LInput
            label="禁用"
            width={375}
            disabled
            labelWidth={85}
            placeholder="禁止输入" />
        </View>
      </ContentCard>

      <ContentCard
        className="content"
        name="隐藏左侧label"
      >
        <View className='buttun-wrapper'>
          <LInput
            label="标题"
            width={375}
            placeholder="这里没有隐藏标题"
            labelWidth={85} />
          <LInput
            label="清除按钮"
            width={375}
            clear={true}
            labelWidth={85}
            hideLabel
            placeholder="这里隐藏了标题" />
        </View>
      </ContentCard>

      <ContentCard
        className="content"
        name="经典案例"
      >
        <View className='buttun-wrapper'>
          <LInput
            placeholder="请输入手机号"
            showRow={false}
            width={300}
            className='input-phone'
            labelWidth={60}
            clear={true}
            left={<LIcon className='input-icon' name="phone" />}
          >
          </LInput>
        </View>
        <View className='buttun-wrapper'>
          <LInput
            showRow={false}
            width={300}
            className='input-phone'
            clear={true}
            placeholder="请输入验证码"
            labelWidth={60}
            left={<LIcon className='input-icon' name="picture" />}
            right={<Image className='img' src="cloud://env-9eb476.656e-env-9eb476-1258886794/images/components/input/yzm.png" />}
          />
        </View>
        <View className='buttun-wrapper'>
          <LInput
            placeholder="请输入密码"
            showRow={false}
            width={300}
            className='input-phone'
            labelWidth={60}
            clear={true}
            left={<LIcon className='input-icon' name="password" />}
          />
        </View>
      </ContentCard>
    </ContentTitle>
  </View>

}

export default InputPage