import React from 'react'
import {View,Image,Text} from '@tarojs/components'
import Taro from '@tarojs/taro'
import NaviCard from '../../components/NaviCard'
import {LCard} from 'taro-linui'

import './index.less'

const naviConfigs = {
  baseConfig: [{
    icon: require('../../images/navigator/icon-basic.png'),
    title: '基础组件',
    navigateMark: 'basic'
  },
  {
    icon: require('../../images/navigator/icon-basic.png'),
    title: '动画组件',
    navigateMark: 'animation'
  },
  {
    icon: require('../../images/navigator/icon-flex.png'),
    title: '布局组件',
    navigateMark: 'layout'
  },
  {
    icon: require('../../images/navigator/icon-navigator.png'),
    title: '导航组件',
    navigateMark: 'nav'
  },
  {
    icon: require('../../images/navigator/icon-View.png'),
    title: '视图组件',
    navigateMark: 'View'
  },
  {
    icon: require('../../images/navigator/icon-action.png'),
    title: '操作反馈',
    navigateMark: 'response'
  },
  {
    icon: require('../../images/navigator/icon-form.png'),
    title: '表单组件',
    navigateMark: 'form'
  }
  ],
  shopConfig: [{
    icon: require('../../images/navigator/icon-shop.png'),
    title: '电商专题',
    navigateMark: 'shopping'
  }]
};


const onClickItem = ({title,navigateMark})=> Taro.navigateTo({
  url:`/pages/content/index?title=${title}&navigateMark=${navigateMark}`
})

const Index : React.FC<any> = props=>{
  const {
  
  } = props
  return   <View className="container">
    <View className="header">
      <Image className='header-bg' src={require('../../images/static/index_bg.png')} />
      <Text className='header-desc'><Text className='header-name'>Lin UI </Text>原生小程序组件库</Text>
    </View>
  
    <View className="main">
      {
        naviConfigs.baseConfig.map(({title,icon,navigateMark})=>(
          <NaviCard
          onClick={()=>onClickItem({title,navigateMark})}
          key={navigateMark} title={title} icon={icon} />
        ))
      } 
    </View>
    {
        naviConfigs.shopConfig.map(({title,icon,navigateMark})=>(
          <LCard position="right" className="index-card"
          onClick={()=>onClickItem({title,navigateMark})}
          key={navigateMark} 
          title={title} 
          image={icon}>
             <View className="shop-dec">
                专题包含电商小程序常用的组件
            </View>
          </LCard> 
        ))
      }  
  </View>
}  

export default Index