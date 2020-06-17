import React from 'react'
import {View,Text,Image,OfficialAccount} from '@tarojs/components'

import './about.less'

 

const About : React.FC<any> = props=>{
  const {
  
  } = props
  return   <View className='container'>
    <View className='logo-container'>
      <Image className='logo-img' src='cloud://env-9eb476.656e-env-9eb476-1258886794/Images/other/logo.png'></Image>
      <View className="version-container">
        <Image src="https://img.shields.io/npm/v/lin-ui.svg" className="version-img"></Image>
        <Image src="https://img.shields.io/npm/dt/lin-ui.svg" className="download-img"></Image>
      </View>
    </View>
    <View className='address-container'>
      <View className='dot' />
      <View className='doc-container'  data-link="http://doc.mini.7yue.pro">
        <Text className='doc-txt'>Web端文档</Text>
        <Text className='address'>http://doc.mini.7yue.pro</Text>
      </View>
    </View>
    <View className='address-container'>
      <View className='dot' />
      <View className='doc-container'   data-link="https://github.com/Talelin/lin-ui">
        <Text className='doc-txt'>Github</Text>
        <Text className='address'>https://github.com/Talelin/lin-ui</Text>
      </View>
    </View>
    <View className='address-container'>
      <View className='dot' />
      <View className='doc-container'  data-link="https://gitee.com/talelin/lin-ui">
        <Text className='doc-txt'>码云</Text>
        <Text className='address'>https://gitee.com/talelin/lin-ui</Text>
      </View>
    </View>
    <View className='attribute-container'>
      <View className='attribute-title'>贡献人员</View>
      <View className='attribute-item'>
        <View className='attribute-code-container'>
          <View className='code-circle'></View>
          <View className='code-name'>策划</View>
          <View className='coder'>七月</View>
        </View>
        <View className='attribute-code-container'>
          <View className='code-circle'></View>
          <View className='code-name'>团队成员</View>
          <View className='coder'>娜娜</View>
          <View className='coder'>寸起</View>
          <View className='coder'>洪晨</View>
          <View className='coder'>句号</View>
          <View className='coder'>桔子</View>
          <View className='coder'>木荣</View>
        </View>
              <View className='attribute-code-container'>
          <View className='code-circle'></View>
          <View className='code-name'>贡献人员</View>
          <View className='coder'>宁缺</View>
        </View>
        <View className='attribute-code-container'>
          <View className='code-circle'></View>
          <View className='code-name'>设计</View>
          <View className='coder'>瓜瓜</View>
        </View>
      </View>
    </View>
    <Image   src='cloud://env-9eb476.656e-env-9eb476-1258886794/Images/other/wechat-official-accounts-qr-code.jpg' className='code'></Image>
    <Text className='desc'>关注林间有风公众号</Text>
    <Text className='desc'>点击图片可保存二维码识别</Text>
    <OfficialAccount className="account"></OfficialAccount>
  </View>
  
}  

export default About