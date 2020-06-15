import React, { Component } from 'react'
import { View, Text } from '@tarojs/components'
import {LTag,LIcon} from 'taro-linui'

export default class Home extends Component {


  render () {
    return (
      <View className='index'>
        <Text>Hello HOME!</Text> 
        <LTag >骄傲是试试冬季ss是ss爱搜</LTag>
        <LTag >骄傲是试试冬季ss是ss爱搜</LTag>
        <LTag >骄傲是试试冬季ss是ss爱搜</LTag>
        <LTag icon='success' size="medium" plain >简单 </LTag>
        <LIcon name='success' size='60px' color='green'/>
      </View>   
    )
  }
}
  