import React, { useState} from 'react'
import Taro from '@tarojs/taro'
import { View , Block,Label,CoverImage,CoverView,OpenData,Button,OfficialAccount} from '@tarojs/components'
import {LStatusShow,LMessage,LActionSheet, LAvatar,LSpin,LAlbum,LButton,LPopup,LLoading,LMask,LLoadMore} from 'taro-linui'
const Home =  ()=>{ 
  const [show,setShow] = useState(false) 
  const [showMask,setShowMask] = useState(false)
  const [actShow,setActShow] = useState(false)
  return ( 
    <View className='index'>   
    <View>状态栏：statusShow</View>
    <LStatusShow />
      <LButton  type="success" onClick={()=>{
        Taro.linMessage({
          content:'测试一下',
          type:'warning'
        }) 
      }}>打开message</LButton> 

      <LMessage />
      <LButton  type="warning" onClick={()=>setActShow(true)}>打开LActionSheet</LButton>
      <LActionSheet
        onClose={()=>setActShow(false)}
        title="测试一下标题"
        show={actShow} onCancel={()=>setActShow(false)} itemList={[
        {
          name:'测试',
          icon:'success'
        },
        {
          name:'分享一下',
          icon:'share',
          color:'green',
          openType:"share"
        }
      ]} />
      {/* <View>胶囊导航栏</View>  
      <LCapsuleBar  homePage="/pages/index/index" title="标题咯" /> */}
      <Label> 
        <Button></Button>
        <CoverImage></CoverImage>
        <CoverView></CoverView>
        <OpenData></OpenData>
      </Label>
      <Block>  
      <LLoadMore show line={true} type="end" loadingText="疯狂加载中..."/>
      </Block> 
      <LButton onClick={()=>setShowMask(true)}>测试mask组件，点击弹窗</LButton>
      <LMask show={showMask}  onClose={()=>setShowMask(false)}>
        <LLoading show/>
      </LMask>
      <View>loading组件</View>
      <LLoading show type="flip"/>
      <LLoading show type="change"/>
      <LLoading show type="flash"/>
      <LLoading show type="circle"/> 
      <View>按钮组件</View>
      <LPopup  direction="bottom" show={show} onClose={()=>setShow(false)}>
        <View style={{backgroundColor:'white'}}>
          阿斯哦对级啊搜ID囧很多
          <View>asjdoiasjdoia</View>
          <View>asjdoiasjdoia</View>
          <View>asjdoiasjdoia</View>
          <View>asjdoiasjdoia</View>
          <View>asjdoiasjdoia</View>
          <View>asjdoiasjdoia</View>
          <LButton onClick={()=>setShow(false)}>关闭弹窗</LButton>
        </View>
      </LPopup>
      <LButton type="warning" onClick={()=>setShow(true)}>打开弹窗</LButton>
      <LButton type="success">测试success按钮</LButton>
      <LButton loading type="error" size="large">loading大按钮</LButton>
      <LButton size="long" type="success">全屏按钮</LButton>
      <LButton shape="circle"  >circle按钮</LButton>
      <LButton shape="semicircle"  >semicircle按钮</LButton>
      <LButton onClick={console.log} plain>点击，查看console</LButton>
      <LButton 
      openType="share"
      size="long">开放功能：share</LButton>
      <View>查看头像组件</View>
      <LAvatar/>
      <LAvatar shape="square"/>
      <View>  
      =========查看Album组件,4列模式
      <LAlbum column={4} style={{width:'100vw'}}  urls={[
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
      =========查看Album组件,默认3列模式，并且限定宽度为300px
      <LAlbum style={{width:'600rpx'}} urls={[
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
        'http://qiniu.9981soft.com/FjBCDRqa-yvLYDNYElaa9ENaWc4X'
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
  
export default Home 