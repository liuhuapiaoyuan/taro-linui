import React, { useState } from 'react'
import { View, Text } from '@tarojs/components'
import {LTag,LArcPopup,LButton} from 'taro-linui'
import './index.less'


function Index(){
  const [arc1,setArc1] = useState(false)
  const [arc2,setArc2] = useState(false)
  return (
    <View className='index'>
      <LArcPopup onClose={()=>setArc1(false)} show={arc1}>这是好多的内容哦</LArcPopup>
      <LArcPopup onClose={()=>setArc2(false)} direction="top" show={arc2}>这是好多的内容哦从上面弹出来哦</LArcPopup>
     <LButton onClick={()=>setArc1(true)}>显示弧形弹层,从下显示</LButton>
     <LButton onClick={()=>setArc2(true)}>显示弧形弹层,从上显示</LButton>
    </View> 
  )
}
export default Index