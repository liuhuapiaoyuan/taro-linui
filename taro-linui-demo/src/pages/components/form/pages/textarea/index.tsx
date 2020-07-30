import React, { useState } from 'react'
import { View } from '@tarojs/components'

import ContentTitle from '@/components/ContentTitle'
import ContentCard from '@/components/ContentCard'

import { LTextarea } from 'taro-linui'

import './index.less'


const TextarePage: React.FC<any> = () => {
  const [a, seta] = useState("")
  const [b, setb] = useState("")
  const [c, setc] = useState("")
  const [d, setd] = useState("")
  const [e, sete] = useState("")
  return <View className='container'>
    <ContentTitle name="Textarea" describe="文本域">
      <ContentCard
        className="content"
        name="基本案例"
      >
        <View className='buttun-wrapper'>
          <LTextarea
            errorText={a.length < 1 ? '请填写内容' : undefined}
            value={a} onChange={seta} style="width:100%" indicator={false} placeholder="说说你的想法吧..." />
        </View>
      </ContentCard>

      <ContentCard
        className="content"
        name="显示文本计数器"
      >
        <View className='buttun-wrapper'>
          <LTextarea value={b} onChange={setb} placeholder="说说你的想法吧..." />
        </View>
      </ContentCard>

      <ContentCard
        className="content"
        name="禁用"
      >
        <View className='buttun-wrapper'>
          <LTextarea value={c} onChange={setc} disabled placeholder="说说你的想法吧..." />
        </View>
      </ContentCard>

      <ContentCard
        className="content"
        name="自动增高"
      >
        <View className='buttun-wrapper'>
          <LTextarea value={d} onChange={setd} autoHeight placeholder="说说你的想法吧..." />
        </View>
      </ContentCard>

      <ContentCard
        className="content"
        name="不带border"
      >
        <View className='buttun-wrapper'>
          <LTextarea value={e} onChange={sete} border={false} placeholder="说说你的想法吧..." />
        </View>
      </ContentCard>
    </ContentTitle>
  </View>

}

export default TextarePage 