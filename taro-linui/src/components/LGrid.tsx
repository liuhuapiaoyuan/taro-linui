import React from 'react'
import {View} from '@tarojs/components'

import classnames from 'classnames'
import {LGridItem} from './LGridItem'
import '../../style/LGrid.less'

export interface LGridProps  {
  className?: string
  children?:React.ReactNode,
  style?:React.CSSProperties
  /** 每行显示的数量，默认是3 */
  rowNum?:number
    /** 显示外边框 */
    showBorder?:boolean
    /** 显示列边框 */
    showColBorder?:boolean
    /** 显示行border边框 */
    showRowBorder?:boolean
      /**
     * 元素被关闭触发的事件
     * 一般点击背后的模态框会触发该事件
     */
    onClickItem?: (index:number,e?:any) => void
}

const LGrid : React.FC<LGridProps> = props=>{
  const {
    children,className,style
    ,rowNum=3,showBorder=false,showColBorder=false,showRowBorder=false
    ,onClickItem
  } = props
  const isHover= false  
  return  <View className={classnames('l-grid','l-class',className)} style={style}>
      {
          children && React.Children.map(children,(child,index)=>React.cloneElement(child as any,{
            className:classnames("l-grid-item","l-class-grid","l-grid-class",{
                'side-grid':index%rowNum !== rowNum-1 &&(showBorder||showColBorder),
                'center-grid':(index<React.Children.count(children)-(React.Children.count(children)%rowNum||rowNum)) &&(showBorder||showRowBorder)
              }),
            style:{
                minWidth:100/rowNum + "%"
            },
            onClick:e=>onClickItem && onClickItem(index,e)
          }))
      }
      {
        //   children && children.map((item,index)=><LGridItem 
        //   className={classnames("l-grid-item","l-class-grid","l-grid-class",{
        //     'side-grid':index%rowNum !== rowNum-1 &&(showBorder||showColBorder),
        //     'center-grid':(index<children.length-(children.length%rowNum||rowNum)) &&(showBorder||showRowBorder)
        //   })}
        //   style={{
        //       minWidth:100/rowNum + "%"
        //   }}
        //   onClick={e=>onClickItem && onClickItem()}
        //   key={item.key} {...item} />
        //   )
      }
</View>
}  

export {LGrid}
export {LGridItem} 