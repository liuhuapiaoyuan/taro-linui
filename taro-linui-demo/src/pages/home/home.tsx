import React, { Component } from 'react'
import { View, Text } from '@tarojs/components'
import {LTag,LIcon,LSpin,LAlbum} from 'taro-linui'

export default class Home extends Component {


  render () {
    return (
      <View className='index'>
        <Text>Hello HOME!</Text> 
        <LTag >骄傲是试试冬季ss是ss爱搜</LTag>
        <LTag icon='success' size="medium" plain >简单 </LTag>
        <LIcon name='success' size='60px' color='green'/>
        <View>
        =========查看Album组件
        <LAlbum urls={[
          'http://qiniu.9981soft.com/Ft976dxPRnGHeDrKaMfOmOTfIXLQ',
          'http://qiniu.9981soft.com/FmuYWs_OMWA3nYYb4l4hebf5PbbW',
          'http://qiniu.9981soft.com/FjBCDRqa-yvLYDNYElaa9ENaWc4X',
          'http://qiniu.9981soft.com/Ft976dxPRnGHeDrKaMfOmOTfIXLQ',
          'http://qiniu.9981soft.com/Ft976dxPRnGHeDrKaMfOmOTfIXLQ',
          'http://qiniu.9981soft.com/Ft976dxPRnGHeDrKaMfOmOTfIXLQ',
          'http://qiniu.9981soft.com/Ft976dxPRnGHeDrKaMfOmOTfIXLQ',
          'http://qiniu.9981soft.com/Ft976dxPRnGHeDrKaMfOmOTfIXLQ',
          'http://qiniu.9981soft.com/Ft976dxPRnGHeDrKaMfOmOTfIXLQ',
          'http://qiniu.9981soft.com/Ft976dxPRnGHeDrKaMfOmOTfIXLQ',
          'http://qiniu.9981soft.com/Ft976dxPRnGHeDrKaMfOmOTfIXLQ',
        ]}/>
        =========查看Album组件，但图片模式
        <LAlbum urls={[
          'http://qiniu.9981soft.com/FmuYWs_OMWA3nYYb4l4hebf5PbbW',
        ]}/>
        </View>
        <View>
        =========查看Spin组件
        </View>
        type:"flash"
        <LSpin show/>
        <View></View>
        size:mini
        <LSpin  size="mini" show/>
        size:large
        <LSpin  size="large" show/>
        type:"change",size:larget
        <LSpin type='change' size="large" show/>
      </View>   
    )
  }
}
  