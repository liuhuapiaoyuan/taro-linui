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
            onClear={() => setC("")}
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
            right={<Image className='img' src="data:image/gif;base64,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" />}
          />
        </View>
        <View className='buttun-wrapper'>
          <LInput
            placeholder="请输入密码"
            showRow={false}
            width={300}
            type="password"
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