import React, { useState } from 'react'
import Taro from '@tarojs/taro'
import { View } from '@tarojs/components'
import ContentTitle from '@/components/ContentTitle'
import ContentCard from '@/components/ContentCard'
import { LButton, LProgress } from 'taro-linui'



import './index.less'


const ProgressIndex: React.FC<any> = props => {
  return <View className='container'>

    <ContentTitle name="Progress" describe="进度条">

      <ContentCard className="content" name="动画">
        <LProgress percent={50} active={true}
          header={<View style="width:25rpx;height:25rpx;borderRadius:50%;background-color:red;display:block;"></View>}
        />
        <View style="margin-top:40rpx;">
          <LProgress percent={100} active={true}
            header={<View style="width:25rpx;height:25rpx;background-color:green;display:block;"></View>}
          />
        </View>
      </ContentCard>


      <ContentCard className="content" name="基本使用方法">
        <LProgress percent={20}></LProgress>
        <View style="margin-top:10rpx;">
          <LProgress percent={50}></LProgress>
        </View>
      </ContentCard>
      <ContentCard className="content" name="自定义宽度">
        <LProgress percent={20}></LProgress>
        <View style="margin-top:10rpx;">
          <LProgress percent={50} strokeWidth={10}></LProgress>
        </View>
      </ContentCard>
      <ContentCard className="content" name="设置圆角">
        <LProgress percent={20} strokeWidth={10} borderRadius={4}></LProgress>
        <View style="margin-top:10rpx;">
          <LProgress percent={50} strokeWidth={10} borderRadius={8}></LProgress>
        </View>
      </ContentCard>
      <ContentCard className="content" name="已选进度条颜色">
        <LProgress percent={20}></LProgress>
        <View style="margin-top:10rpx;">
          <LProgress percent={50} activeColor='red'></LProgress>
        </View>
      </ContentCard>
      <ContentCard className="content" name="背景颜色">
        <LProgress percent={20}></LProgress>
        <View style="margin-top:10rpx;">
          <LProgress percent={50} backgroundColor='#FF00FF'></LProgress>
        </View>
      </ContentCard>
      <ContentCard className="content" name="显示数值">
        <View style="height:45rpx;">
          <LProgress percent={20} showInfo={true}></LProgress>
        </View>
        <View style="height:45rpx;">
          <LProgress percent={50} showInfo={true} textPosition="left"></LProgress>
        </View>
        <View style="height:45rpx;">
          <LProgress percent={50} showInfo={true} textColor='red'></LProgress>
        </View>
      </ContentCard>
      <ContentCard className="content" name="自定义header">
        <LProgress header={<View style="width:25rpx;height:25rpx;borderRadius:50%;background-color:red;display:block;" />}></LProgress>
        <View style="margin-top:40rpx;">
          {/* <LProgress percent="50">
                  <image src="cloud://env-9eb476.656e-env-9eb476-1258886794/images/components/progress/imoji.jpg" slot='header' style="width:30rpx;height:30rpx;borderRadius:50%;display:block;" />
              </LProgress> */}
        </View>
        <View style="margin-top:40rpx;">
          <LProgress percent={100}
            header={<View style="width:25rpx;height:25rpx;background-color:green;display:block;"></View>}
          />
        </View>
      </ContentCard>

    </ContentTitle>
  </View>
}

export default ProgressIndex