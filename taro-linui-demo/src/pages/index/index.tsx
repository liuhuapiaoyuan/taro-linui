import React, { useState } from 'react'
import { View } from '@tarojs/components'
import Taro from '@tarojs/taro'
import {LDialog,LRate,LCheckbox,LCheckboxGroup,LPrice,LCard,
  LStep,LSteps,LWaterFlow,LArcPopup,
  LCollapse,LCollapseItem
  //轮播
  ,LNoticeBar
  ,LList,LIcon,LButton
  ,LGrid,LGridItem,LBadge} from 'taro-linui'

import {WaterFlowItem} from '../../components/WaterFlowItem'
import './index.less'  
const waterFlowData = [{
  image: 'http://zhai-jia.oss-cn-hangzhou.aliyuncs.com/uploads/20200612/67dd0b12d30865963557be71b9ca2d74.jpg',
  title: '显瘦中长款系带风衣',
  describe: '柔软顺滑、上身挺括显瘦，垂坠飘逸、不易皱好打理。',
  count: '888',
  delCount: '666'
},{   
  image: 'http://zhai-jia.oss-cn-hangzhou.aliyuncs.com/uploads/20200612/67dd0b12d30865963557be71b9ca2d74.jpg',
  title: '显瘦中长款系带风衣',
  describe: '柔软顺滑、上身挺括显瘦，垂坠飘逸、不易皱柔软顺滑、上身挺括显瘦，垂坠飘逸、不易皱好打理。柔软顺滑、上身挺括显瘦，垂坠飘逸、不易皱好打理。柔软顺滑、上身挺括显瘦，垂坠飘逸、不易皱好打理。柔软顺滑、上身挺括显瘦，垂坠飘逸、不易皱好打理。柔软顺滑、上身挺括显瘦，垂坠飘逸、不易皱好打理。柔软顺滑、上身挺括显瘦，垂坠飘逸、不易皱好打理。柔软顺滑、上身挺括显瘦，垂坠飘逸、不易皱好打理。柔软顺滑、上身挺括显瘦，垂坠飘逸、不易皱好打理。柔软顺滑、上身挺括显瘦，垂坠飘逸、不易皱好打理。柔软顺滑、上身挺括显瘦，垂坠飘逸、不易皱好打理。好打理。',
  count: '888',
  delCount: '666'
},{
  image: 'http://zhai-jia.oss-cn-hangzhou.aliyuncs.com/uploads/20200612/67dd0b12d30865963557be71b9ca2d74.jpg',
  title: '显瘦中长款系带风衣',
  describe: '柔软顺滑、上身挺括显瘦，垂坠飘逸、不易皱好打理。',
  count: '888',
  delCount: '666'
},{
  image: 'http://zhai-jia.oss-cn-hangzhou.aliyuncs.com/uploads/20200612/67dd0b12d30865963557be71b9ca2d74.jpg',
  title: '显瘦中长款系带风衣',
  describe: '柔软顺滑、上身挺括显瘦，垂坠飘逸、不易皱好打理。柔软顺滑、上身挺括显瘦，垂坠飘逸、不易皱好打理。柔软顺滑、上身挺括显瘦，垂坠飘逸、不易皱好打理。柔软顺滑、上身挺括显瘦，垂坠飘逸、不易皱好打理。柔软顺滑、上身挺括显瘦，垂坠飘逸、不易皱好打理。柔软顺滑、上身挺括显瘦，垂坠飘逸、不易皱好打理。柔软顺滑、上身挺括显瘦，垂坠飘逸、不易皱好打理。柔软顺滑、上身挺括显瘦，垂坠飘逸、不易皱好打理。柔软顺滑、上身挺括显瘦，垂坠飘逸、不易皱好打理。柔软顺滑、上身挺括显瘦，垂坠飘逸、不易皱好打理。柔软顺滑、上身挺括显瘦，垂坠飘逸、不易皱好打理。柔软顺滑、上身挺括显瘦，垂坠飘逸、不易皱好打理。柔软顺滑、上身挺括显瘦，垂坠飘逸、不易皱好打理。',
  count: '888',
  delCount: '666'
},{
  image: 'http://zhai-jia.oss-cn-hangzhou.aliyuncs.com/uploads/20200612/67dd0b12d30865963557be71b9ca2d74.jpg',
  title: '显瘦中长款系带风衣',
  describe: '柔软顺滑、上身挺括显瘦，垂坠飘逸、不易皱好打理。柔软顺滑、上身挺括显瘦，垂坠飘逸、不易皱好打理。柔软顺滑、上身挺括显瘦，垂坠飘逸、不易皱好打理。柔软顺滑、上身挺括显瘦，垂坠飘逸、不易皱好打理。柔软顺滑、上身挺括显瘦，垂坠飘逸、不易皱好打理。柔软顺滑、上身挺括显瘦，垂坠飘逸、不易皱好打理。柔软顺滑、上身挺括显瘦，垂坠飘逸、不易皱好打理。柔软顺滑、上身挺括显瘦，垂坠飘逸、不易皱好打理。',
  count: '888',
  delCount: '666'
},{
  image: 'http://zhai-jia.oss-cn-hangzhou.aliyuncs.com/uploads/20200612/67dd0b12d30865963557be71b9ca2d74.jpg',
  title: '显瘦中长款系带风衣',
  describe: '柔软顺滑、上身挺括显瘦，垂坠飘逸、不易皱好打理。',
  count: '888',
  delCount: '666' 
}]
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
  const [showDialog,setShowDialog] = useState(false)
  const [cvalue,setCValue] = useState([])
  const [rateVlaue,setRateValue] = useState(0)
  const [exp,setExp] = useState(false)
  return ( 
    <View className='index'>
      <View>通告栏</View>
      <LNoticeBar onClose={()=>console.log('点击关闭')} close>茶几哦啥的教师节</LNoticeBar>
      <View>自动切换模式</View>
      <LNoticeBar type="swip" swipArr={["1奇偶iajsodi ","2阿善动i傲视窘境","3啥的奇偶艾索德军"]}/>
      <View>自动滚动默认是</View>
      <LNoticeBar type="roll">我是通告栏我是通告栏我是通告栏我是通告栏|||我是通告栏我是通告栏我是通告栏我是通告栏阿萨帝级啊搜i级地哦啊是DOI啊时间的</LNoticeBar>
      <LCollapseItem onClickTitle={()=>setExp(!exp)} expanded={exp} title="点击标题单独切换">单独控制</LCollapseItem>
      <View>一个Collapse组</View>
      <LCollapse className="expander-group">
        <LCollapseItem title="测试一下1">阿打算打算大所大叔大叔</LCollapseItem>
        <LCollapseItem title="测试一下2">阿打算打算大所大叔大叔</LCollapseItem>
        <LCollapseItem title="测试一下3">阿打算打算大所大叔大叔</LCollapseItem>
        <LCollapseItem title="测试一下4">阿打算打算大所大叔大叔</LCollapseItem>
        <LCollapseItem title="测试一下5">阿打算打算大所大叔大叔</LCollapseItem>
        <LCollapseItem title="测试一下6">阿打算打算大所大叔大叔</LCollapseItem>
        <LCollapseItem title="测试一下7">阿打算打算大所大叔大叔</LCollapseItem>
      </LCollapse>
      <View>测试rate评分组件</View>
      <LRate value={rateVlaue} onChange={setRateValue} count={6} />
      <View>小数点</View>
      <LRate value={3.2} count={6} />
      <LRate value={3.5} count={6} />
      {/* 测试一下分组 */}
      <View>分组的checkbox</View>
      <LCheckboxGroup placement="column" value={cvalue} onChange={e=>setCValue(e)}>
          <LCheckbox value="男" >男</LCheckbox>
          <LCheckbox value="女" >女</LCheckbox>
          <LCheckbox value="自定义" custom customIcon="是" customSelectIcon="否">自定义</LCheckbox>
          <LCheckbox disabled value="未知" >未知</LCheckbox>
      </LCheckboxGroup>
      <View>单独的CheckBox</View>
      <LCheckbox  disabled>测试单个</LCheckbox>
      <LCheckbox checked placement="right">测试单个2</LCheckbox>
      <View></View>
      <LPrice deleted value={100}/>
      <LPrice value={100}/>
      <LPrice value={100}/>
    <View>测试弹窗</View>
    <LButton onClick={()=>setShowDialog(true)}>点击弹窗测试</LButton>
    <LDialog type="confirm" show={showDialog} 
    onCancel={()=>{
      Taro.showToast({title:"点击了取消按钮",icon:"none"}) 
      setShowDialog(false)
    }}
    onConfirm={()=>{
      Taro.showToast({title:"点击了确定按钮"}) 
      setShowDialog(false)
    }} title="测试一下">阿的萨达啥大声道</LDialog>
    <View>测试步骤列表</View> 
    <LSteps color="red" direction="column" activeIndex={3}>
      <LStep  title="已支付" describe="11:30"></LStep>
      <LStep title="备餐中" describe="11:30"></LStep>
      <LStep title="已出餐" describe="11:30"></LStep>
    </LSteps>
    <LSteps dot activeIndex={1}>
      <LStep icon="cart" title="已支付" describe="11:30"></LStep>
      <LStep title="备餐中" describe="11:30"></LStep>
      <LStep title="已出餐" describe="11:30"></LStep>
      <LStep title="已评价" describe="11:30"></LStep>
    </LSteps>
    <View>测试瀑布流</View>
    <LWaterFlow>
    {waterFlowData.map((item,index)=><WaterFlowItem key={index} { ...item}/>)}
    </LWaterFlow>
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