import React,{useState,useLayoutEffect} from 'react'
import Taro from '@tarojs/taro'
import {View,Image} from '@tarojs/components'
import { ImageProps } from '@tarojs/components/types/Image'
import {containerStyle,blockClass,blockStyle} from './LAlbumLayout'
import classnames from 'classnames'
import {px} from '../px'
import '../../style/LAlbum.less'



/** 计算单行图片的样式 */
const singleStyle = (horizontalScreen,shortSideValue,singleSize)=>{
  if (horizontalScreen) {
      return {
          height:px(shortSideValue),
          width:px(singleSize)
      }  
  } else {
      return {
          height:px(singleSize),
          width:px(shortSideValue)
      } 
  }
}

export interface LAlbumProps  {
  className?: string
  style?: React.CSSProperties 
  children?:React.ReactChild
  /** 图片链接 ,老模式：url数组，新模式则传入一个对象 */
  urls:string[]
  /** 是否点击打开预览 */
  preview?:boolean
  /** 多图时，图片水平间隔  默认为10px*/
  gapRow?:number
  /** 多图时，图片垂直间隔 默认为：10px*/
  gapColumn?:number
  /** 每行展示几列产品 ,默认是3列显示*/
  column?:number,
  /** 单图片的 图片长边大小 默认360像素 */
  singleSize?:number
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
//查询dom的宽度和高度，注意这里获得的是一个px单位
async function getDOMRect(id){
  const query = Taro.createSelectorQuery();
  return new Promise((reslove,reject)=>{
    query.select('#'+id).boundingClientRect()
    query.exec(res=>{
      if(res[0]==null){return reject('Cannot find the #'+id+' selector')}
      reslove({
        width:res[0].width,
        height:res[0].height,
      })
    })
  })  
}

//不断查询直到有结果
function poll(promiseFunc){
  return promiseFunc().catch(()=>new Promise(reslove=>Taro.nextTick(()=>reslove(poll(promiseFunc)))))
}
const LAlbum : React.FC<LAlbumProps> = props=>{
  const {
    className,
    style={},
    urls,
    singleSize, gapRow=10, gapColumn=10,
    singleMode,multipleMode,
    preview,
    column=3,
    onImageClick
  } = props
  //图片最多9张
    if(urls.length<1){
        return null
    }
  const showUrls= urls.slice(0, 9)
  //计算horizontalScreen,shortSideValue
  const [calValues,setCalValues] = useState({horizontalScreen:0,shortSideValue:0})
  const [containerWidth,setContainerWidth] = useState(750)
  const [id] = useState("L"+Date.now()+"" + Math.round(Math.random()*1000)) 
  useLayoutEffect(()=>{
    horizontalOrVertical(urls[0],singleSize)
    .then(setCalValues)
    .catch(e=>console.warn('图片加载失败：',e)) 
    if(urls.length > 9){
        console.warn('超过9张图片,只能显示9张图片！');
    }
    poll(()=>getDOMRect(id)).then(e=>setContainerWidth(e.width))
  },[urls[0]]) 
  //计算每一项目的宽度   w*column + (column-1)*gapColumn = containerWidth
  const itemWidth  = (containerWidth - (column+1)*gapColumn )/column
  return  <View  id={id}  style={style}>
    <View className={classnames("container",className)}
      style={{paddingLeft:gapColumn,paddingRight:gapColumn}} 
      // style={containerStyle(showUrls,multipleSize, gapRow, gapColumn)}
      >
    {
      showUrls.map((url,index)=><Image
      key={index+url}   
      className={blockClass(showUrls, calValues.horizontalScreen)}
      style={
        (urls.length<2)?singleStyle(calValues.horizontalScreen,calValues.shortSideValue,singleSize)
          :
          {
            width:itemWidth,
            height:itemWidth,
            marginBottom:gapRow,
            marginRight:((index+1)%column == 0 )?0 : gapColumn
          }
      } 
      src={url}
      mode={showUrls.length === 1?singleMode:multipleMode} 
      onClick={()=>{
          preview && Taro.previewImage({current: url,urls:showUrls});
          (!!onImageClick) && onImageClick(index,url,showUrls)
      }}
      />)
    }
  </View>
  </View>

}  

LAlbum.defaultProps = {
    preview:true,
    gapRow:10,
    gapColumn:10,
    singleSize:360,
    singleMode:'aspectFit',
    multipleMode:'aspectFill',
    urls:[],
    column:3,
    onImageClick:undefined
}
export {LAlbum}