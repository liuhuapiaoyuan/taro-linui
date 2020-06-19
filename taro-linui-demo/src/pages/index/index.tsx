import React, { useState } from 'react'
import { View, Text } from '@tarojs/components'
import {LTag,LArcPopup,LButton} from 'taro-linui'
import './index.less'


function Index(){
  const [arc1,setArc1] = useState(false)
  const [arc2,setArc2] = useState(false)
  return (
    <View className='index'>
      <LArcPopup header={<View>这里是标题的位置</View> } onClose={()=>setArc1(false)} show={arc1}>这是好多的内容哦</LArcPopup>
      <LArcPopup
        header={<View>这里是标题的位置</View> }  onClose={()=>setArc2(false)} direction="top" show={arc2}>
        <View>这是好多的内容哦从上面弹出来哦</View>
        <View style={{backgroundColor:'green',height:'80vh'}}></View>
        <View>这是好多的内容哦从上面弹出来哦</View>
      </LArcPopup>
     <LButton onClick={()=>setArc1(true)}>显示弧形弹层,从下显示</LButton>
     <LButton onClick={()=>setArc2(true)}>显示弧形弹层,从上显示</LButton>
    </View> 
  )
}
export default Index