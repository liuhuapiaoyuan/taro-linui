import React,{useState,useRef,useEffect,useLayoutEffect} from 'react'
import Taro from '@tarojs/taro'
import {View,Image} from '@tarojs/components'
import { ImageProps } from '@tarojs/components/types/Image'
import {containerStyle,blockClass,blockStyle} from './LAlbumLayout'
import '../../style/LAlbum.less'
import { reject } from 'lodash'

export interface LAlbumProps  {
  className?: string
  children?:React.ReactChild
  /** 图片链接 ,老模式：url数组，新模式则传入一个对象 */
  urls:string[]
  /** 是否点击打开预览 */
  preview?:boolean
  /** 多图时，图片水平间隔  默认为10*/
  gapRow?:number
  /** 多图时，图片垂直间隔 默认为：10*/
  gapColumn?:number
  /** 单图片的 图片长边大小 默认360像素 */
  singleSize?:number
  /** 多图片的 图片长边大小 默认158px */
  multipleSize?:number
  /** 单图片时，图片的显示模式 */
  singleMode?:keyof ImageProps.mode
  /** 多图片时，图片的显示模式 */
  multipleMode?:keyof ImageProps.mode,
  onImageClick?: (index: number, current: string,all:string[]) => void
}
 
//通过ImageInfo来获取图片的w 和 h
async function horizontalOrVertical(imgUrl,singleSize):Promise<any>{
    const {width,height} = await Taro.getImageInfo({src:imgUrl})
    const longSide = Math.max(width,height)
    const shortSide =Math.min(width,height)
    return {
        horizontalScreen: width >= height,
        shortSideValue: shortSide * singleSize / longSide
    }
} 
//查询dom的宽度和高度
async function getDOMRect(id){
  const query = Taro.createSelectorQuery();
  return new Promise(reslove=>{
    Taro.nextTick(()=>{
      console.log('0-000')
      query.select('#'+id).boundingClientRect()
      query.exec(res=>{
        console.log(res) 
        if(res[0]==null){return reject('Cannot find the #'+id+' selector')}
        reslove({
          width:res[0].width,
          height:res[0].height,
        })
      })
    })
  })  
}
const LAlbum : React.FC<LAlbumProps> = props=>{
  const {
    urls,
    singleSize,multipleSize, gapRow, gapColumn,
    singleMode,multipleMode,
    preview,
    onImageClick
  } = props
  //图片最多9张
    if(urls.length<1){
        return null
    }
  const showUrls= urls.slice(0, 9)
  //计算horizontalScreen,shortSideValue
  const [calValues,setCalValues] = useState({horizontalScreen:0,shortSideValue:0})
  const [id] = useState("L"+Date.now()+"" + Math.round(Math.random()*1000))
  const containerRef = useRef("");
  useLayoutEffect(()=>{
    horizontalOrVertical(urls[0],singleSize)
    .then(setCalValues)
    .catch(e=>console.warn('图片加载失败：',e)) 
    if(urls.length > 9){
        console.warn('超过9张图片,只能显示9张图片！');
    }
    getDOMRect(id).then(e=>console.log(e))
    .catch(console.error)

  },[urls[0]])
  useEffect(()=>{
    const query = Taro.createSelectorQuery();
    Taro.createSelectorQuery().select('#'+id).boundingClientRect(console.log)
  },[])
  return  <View ref={containerRef} id={id} className="container l-class" 
    style={containerStyle(showUrls,multipleSize, gapRow, gapColumn)}>
  {
    showUrls.map((url,index)=><Image
    key={index+url}   
    className={blockClass(showUrls, calValues.horizontalScreen)}
    style={blockStyle(showUrls, calValues.horizontalScreen, calValues.shortSideValue, 
        singleSize, multipleSize)} 
     src={url}
    mode={showUrls.length === 1?singleMode:multipleMode} 
    onClick={()=>{
        preview && Taro.previewImage({current: url,urls:showUrls});
        (!!onImageClick) && onImageClick(index,url,showUrls)
    }}
    />)
  }
</View>

}  

LAlbum.defaultProps = {
    preview:true,
    gapRow:10,
    gapColumn:10,
    singleSize:360,
    multipleSize:118,
    singleMode:'aspectFit',
    multipleMode:'aspectFill',
    urls:[],
    onImageClick:undefined
}
export {LAlbum}