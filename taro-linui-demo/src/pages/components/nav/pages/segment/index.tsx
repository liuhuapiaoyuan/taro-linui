import React, { useState } from 'react'
import { View } from '@tarojs/components'
import Taro from '@tarojs/taro'
import classnames from 'classnames'
import { LButton, LSegment, LSegmentItem } from 'taro-linui'

import ContentTitle from '@/components/ContentTitle'
import ContentCard from '@/components/ContentCard'

import { data } from './data'

import './index.less'

const SegmentIndex: React.FC<any> = props => {
  const {
  } = props
  const [a, seta] = useState('one')
  const [b, setb] = useState('one')
  const [c, setc] = useState('one')
  const [d, setd] = useState('one')
  const [e, sete] = useState('cart')
  const [f, setf] = useState('one')
  const [g, setg] = useState('one')
  const [cate, setCate] = useState('dining')
  const [placement, setPlacement] = useState('right')
  return <View className='SegmentIndex'>
    <ContentTitle name="Segment" describe="选项卡">
      <ContentCard className="content" name="等宽选项卡">
        <LSegment activeKey={a} onChange={seta} className="aaa">
          <LSegmentItem tab="客厅" key="one" />
          <LSegmentItem tab="卧室" key="two" />
          <LSegmentItem tab="厨房" key="three" />
        </LSegment>
      </ContentCard>

      <ContentCard className="content" name="非等宽选项卡">
        <LSegment
          activeKey={b}
          onChange={setb} even={false} scrollable animatedForLine={true}>
          <LSegmentItem tab="精选" key="one">
            <View className="tab-content">精选</View >
          </LSegmentItem>
          <LSegmentItem tab="居家生活" key="two">
            <View className="tab-content">居家生活</View >
          </LSegmentItem>
          <LSegmentItem tab="美食厨房" key="three">
            <View className="tab-content">美食厨房</View >
          </LSegmentItem>
          <LSegmentItem tab="美妆护肤" key="four">
            <View className="tab-content">美妆</View >
          </LSegmentItem>
          <LSegmentItem tab="运动女装" key="five">
            <View className="tab-content">运动女装</View >
          </LSegmentItem>
          <LSegmentItem tab="家用电器" key="six">
            <View className="tab-content">家用电器</View >
          </LSegmentItem>
          <LSegmentItem tab="厨房用品" key="seven">
            <View className="tab-content">厨房用品</View >
          </LSegmentItem>
          <LSegmentItem tab="卫生清洁" key="eight">
            <View className="tab-content">卫生清洁</View >
          </LSegmentItem>
          <LSegmentItem tab="客厅" key="123" />
          <LSegmentItem tab="卧室" key="456" />
          <LSegmentItem tab="厨房" key="789" />
          <LSegmentItem tab="浴室" key="1011" />
        </LSegment>
      </ContentCard>

      <ContentCard className="content" name="选项卡宽高">
        <LSegment activeKey={c} onChange={setc} scrollable
          width={180}
          height={250} itemHeight={45} placement="left" even={false}>
          <LSegmentItem tab="客厅" key="one" />
          <LSegmentItem tab="卧室" key="two" />
          <LSegmentItem tab="厨房" key="three" />
          <LSegmentItem tab="浴室" key="four" />
        </LSegment>
      </ContentCard>


      <ContentCard className="content" name="选项卡位置">

        <LButton
          className="toggle-button"
          icon="ellipsis" iconSize="36"
          iconColor="#333"
          onClick={() => {
            Taro.showActionSheet({
              itemList: data.placementArr,
              success: (res) => {
                setPlacement(data.placementArr[res.tapIndex])
              },
              fail(res) {
                console.error(res.errMsg);
              }
            })
          }}
        />
        <View className={classnames("segment-placecontainer", {
          'segment-placecontainer-right': placement == 'right',
          'segment-placecontainer-left': placement == 'left',
          'segment-placecontainer-bottom': placement == 'bottom',
          'segment-placecontainer-top': placement == 'top',
        })}
        >
          <LSegment activeKey={d} onChange={setd}
            placement={placement}
            itemHeight={35}
            width={180}
          >
            <LSegmentItem tab="客厅" key="one" />
            <LSegmentItem tab="卧室" key="two" />
            <LSegmentItem tab="厨房" key="three" />
            <LSegmentItem tab="浴室" key="four" />
          </LSegment>
          <View className="segment-placecontainer-content"></View>
        </View>

      </ContentCard>

      <ContentCard className="content" name="图标选项卡">
        <LSegment
          activeKey={e} onChange={sete}
          activeColor="#FF783C" inactiveColor="#333333" >
          {data.iconTabs.map(item => {
            return <LSegmentItem tab={item.tab} key={item.key}
              icon={item.icon}
              picPlacement={item.picPlacement}
            />
          })}
        </LSegment>
      </ContentCard>

      <ContentCard className="content" name="图片标签">
        <LSegment activeKey={cate} onChange={setCate}
          className="tab-image" hasLine={false}>
          {data.imagesTabs.map(item => {
            return <LSegmentItem tab={item.tab} key={item.key}
              image={item.image}
              picPlacement={item.picPlacement}
            />
          })}
        </LSegment>
      </ContentCard>

      <ContentCard className="content" name="徽标选项卡">
        <LSegment activeKey={f} onChange={setf}>
          <LSegmentItem tab="客厅" key="one" dotBadge />
          <LSegmentItem tab="卧室" key="two" badgeCount={data.brageCount} />
          <LSegmentItem tab="厨房" key="three" badgeCount={900} l-class-badge="badge-View " />
          <LSegmentItem tab="浴室" key="four" />
        </LSegment>
      </ContentCard>

      <ContentCard className="content" name="自定义选项卡">
        <LSegment
          // l-class-tabimage="tab-image"
          hasLine={false}
          className="segment-view "
          activeKey={g}
          onChange={setg}>
          <LSegmentItem key="one" >
            <View className="tab-item">
              <View >2月12日 10：00</View >
              <View >已开抢</View >
            </View >
          </LSegmentItem>
          <LSegmentItem key="two" >
            <View className="tab-item">
              <View >2月13日 10：00</View >
              <View >即将开始</View >
            </View >
          </LSegmentItem>

          <LSegmentItem key="three" >
            <View className="tab-item">
              <View >2月14日 10：00</View >
              <View >即将开始</View >
            </View >
          </LSegmentItem>
        </LSegment>
      </ContentCard>
    </ContentTitle>
  </View >

}

export default SegmentIndex