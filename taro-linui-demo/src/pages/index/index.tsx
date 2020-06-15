import React, { Component } from 'react'
import { View, Text } from '@tarojs/components'
import {LTag} from 'taro-linui'
import './index.less'

export default class Index extends Component {


  render () {
    return (
      <View className='index'>
        <Text>Hello world!</Text> 
        <LTag >骄傲是试试冬季ss是ss爱搜</LTag>
        <LTag >骄傲是试试冬季ss是ss爱搜</LTag>
        <LTag >骄傲是试试冬季ss是ss爱搜</LTag>
        <LTag size="large">测试ss </LTag>
      </View> 
    )
  }
}
 