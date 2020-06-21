import React, { useState } from 'react'
import { View, Text } from '@tarojs/components'
import {LCard,LArcPopup,LList,LIcon,LButton,LGrid,LGridItem,LBadge} from 'taro-linui'
import './index.less'

const grids2 = [{
  image: 'cart',
  text: '我的购物车'
}, {
  image: 'help',
  text: '帮助中心'
}, {
  image: 'address',
  text: '地址管理'
}, {
  image: 'order',
  text: '我的订单'
}, {
  image: 'customer-service',
  text: '联系客服'
}, ]
function Index(){
  const [arc1,setArc1] = useState(false)
  const [arc2,setArc2] = useState(false)
  return (
    <View className='index'> 
    <View>列表测试</View> 
    <LList gap={10} title="消息" isLink icon="notification" />
    <LList title="客服中心" icon="notification"  desc="工作时间：8:00-18:00"  />
    <LList title="客厅" image={require("../../images/layout/wx_app_compass.png")} />
    <LList title="清除" image={require("../../images/layout/wx_app_clear.png")} />
    <LList title="设置" icon="setting" tagContent="我的" tagPosition="right" tagColor="#F4516c" />
    <LList title="消息" icon="notification" badgeCount="9" badgePosition="right" />
    <LList title="您有提醒" icon="notification" dotBadge/>


    <View>红点测试</View>
    <LBadge shape="circle" value="1000"/>
    <LBadge value="33"/> 
    <LBadge value="提醒"/>
      <View>Grid测试</View>
      <LGrid rowNum={4}   showBorder className="gridTest">
        {grids2.map(item=><LGridItem key={item.text} >
          <LIcon name={item.image} />
          <View className="text">{item.text}</View>
        </LGridItem> )}
      </LGrid>
      <LGrid rowNum={4} showRowBorder   className="gridTest">
        {grids2.map(item=><LGridItem key={item.text} >
          <View className="num">123</View>
          <View className="text">{item.text}</View>
        </LGridItem> )}
      </LGrid>
      <LArcPopup header={<View>这里是标题的位置</View> } onClose={()=>setArc1(false)} show={arc1}>这是好多的内容哦</LArcPopup>
      <LArcPopup
        header={<View>这里是标题的位置</View> }  onClose={()=>setArc2(false)} direction="top" show={arc2}>
        <View>这是好多的内容哦从上面弹出来哦</View>
        <View style={{backgroundColor:'green',height:'80vh'}}></View>
        <View>这是好多的内容哦从上面弹出来哦</View>
      </LArcPopup>
     <LButton onClick={()=>setArc1(true)}>显示弧形弹层,从下显示</LButton>
     <LButton onClick={()=>setArc2(true)}>显示弧形弹层,从上显示</LButton>
     <View>卡片</View>
     <LCard type="avatar"
     image="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1549711852726&di=6b454cec0b57f62d46089487454fa56f&imgtype=0&src=http%3A%2F%2Fimg3.duitang.com%2Fuploads%2Fitem%2F201609%2F14%2F20160914062816_SC8KU.jpeg"
     title="七月在夏天" describe="18个小时前">
      <View className="avter-content">
          很简单，豆瓣现在这样就给大家指了一条明路:以后凡是这种国产的风口浪尖的的片子，会涉及到各方背后利益关系的片子...
        </View>
        <View className="avter-share-container">
          <View className="like-container">
            <LIcon name="like" color="#666" size={28} />
            <View className="number">160喜欢</View>
          </View>
          <View className="like-container">
            <LIcon name="default" color="#666" size="28" />
            <View className="number">10评论</View>
          </View>
        </View>
     </LCard>
     <LCard  
     image="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1549711852726&di=6b454cec0b57f62d46089487454fa56f&imgtype=0&src=http%3A%2F%2Fimg3.duitang.com%2Fuploads%2Fitem%2F201609%2F14%2F20160914062816_SC8KU.jpeg"
     title="七月在夏天" describe="18个小时前">
      <View className="avter-content">
          很简单，豆瓣现在这样就给大家指了一条明路:以后凡是这种国产的风口浪尖的的片子，会涉及到各方背后利益关系的片子...
        </View>
        <View className="avter-share-container">
          <View className="like-container">
            <LIcon name="like" color="#666" size={28} />
            <View className="number">160喜欢</View>
          </View>
          <View className="like-container">
            <LIcon name="default" color="#666"   />
            <View className="number">10评论</View>
          </View>
        </View>
     </LCard>
    </View> 
  )
}
export default Index