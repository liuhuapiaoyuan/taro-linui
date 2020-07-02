import React from 'react'
import {View,Text} from '@tarojs/components'
import {LButton,LIcon} from 'taro-linui'
import ContentCard from '../../../../components/ContentCard'
import ContentTitle from '../../../../components/ContentTitle'
import './index.less'


/**
 * 按钮页面
 */
const  ButtonPage :any= () => (<View className='ButtonPage'>
<ContentTitle name="Button" describe="按钮">
<ContentCard name="按钮类型">
  <View className="style-content">
    <LButton style='margin-right:50rpx'>默认</LButton>
    <LButton type="success" style='margin-right:50rpx'>成功</LButton>
    <LButton type="error">错误</LButton>
    <LButton type="warning">警告</LButton>
  </View>
  <View className="style-content">
    <LButton plain style='margin-right:50rpx'>默认</LButton>
    <LButton plain type="success" style='margin-right:50rpx'> 成功</LButton>
    <LButton plain type="error">错误</LButton>
    <LButton plain type="warning">警告</LButton>
  </View>
</ContentCard>

<ContentCard name="按钮形状">
  <View className="content">
    <LButton shape="circle">圆弧按钮</LButton>

    <LButton shape="square">方形按钮</LButton>

    <LButton shape="semicircle">半圆按钮</LButton>
  </View>
</ContentCard>


<ContentCard name="按钮大小" cardPadding={false}>
  <View className="content">
    <LButton size="mini" style='margin-left:10rpx'>小按钮</LButton>
  </View>
  <View className="content">
    <LButton size="medium" style='margin-left:10rpx'>中按钮</LButton>
  </View>
  <View className="content">
    <LButton size="large" style='margin-left:10rpx'>大按钮</LButton>
  </View>
</ContentCard>

<ContentCard name="通栏按钮" cardPadding={false}>
  <LButton size="long">通栏按钮</LButton>
</ContentCard>

<ContentCard name="镂空按钮">
  <View className="content">
    <LButton plain={true} size="large">默认</LButton>
  </View>
  <View className="content">
    <LButton plain={true} type="success" size="large">成功</LButton>
  </View>
  <View className="content">
    <LButton plain={true} type="error" size="large">错误</LButton>
  </View>
  <View className="content">
    <LButton plain={true} type="warning" size="large">警告</LButton>
  </View>
</ContentCard>

<ContentCard name="图标按钮">
  <View className="content">
    <LButton icon="warning" size="large" iconColor="#fff" iconSize="32">图标按钮</LButton>
  </View>
</ContentCard>

<ContentCard name="禁用">
  <View className="content">
    <LButton disabled={true} size="large">禁用按钮</LButton>
  </View>
</ContentCard>

<ContentCard name="加载中">
  <View className="content">
    <LButton loading={true} size="large">加载中</LButton>
  </View>
  <View className="content">
    <LButton plain={true} loading={true} type="success" size="large">加载中</LButton>
  </View>
</ContentCard>

<ContentCard name="特殊用法">
  <View className="content-con">
    <View className="content">
      <LButton special={true} openType="share">
        <View className="share-box">
          <LIcon size="40" name="share" color="#3963bc" />
        </View>
      </LButton>
    </View>
    <View className="content">
      <LButton special={true} openType="contact">
        <View className="box">
          <LIcon size="40" name="customer-service" color="#3963bc" />
          <Text className="txt" style="margin-left:20rpx">客服</Text>
        </View>
      </LButton>
    </View>
    <View className="content">
      <LButton special={true} openType="getUserInfo" onGetUserInfo={console.log}>
        <View className="box">
          <Text className="txt">设置</Text>
        </View>
      </LButton>
    </View>
  </View>
</ContentCard>
</ContentTitle>
</View>
)  


export default ButtonPage 