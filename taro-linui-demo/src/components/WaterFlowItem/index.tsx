import React from 'react'
import {View} from '@tarojs/components'
import classnames from 'classnames'
import {LCard} from 'taro-linui'
import './index.less'

const WaterFlowItem : React.FC<any> = props=>{
  const {
    describe,image,title,count,style,className
  } = props
  return  <View style={style} className={className}>
<LCard full type="cover" image={image} title={title} 
            className="life-container"
            imageMode="widthFix"
            >
  <View className='life-product-contianer'>
    <View className='art-content'>{describe}</View>
    <View className='price-container'>
        10.0
      {/* <l-price unit="￥" value="{{data.count}}" value-color="#ad0e11" unit-color="#ad0e11" value-size="36"></l-price>
      <l-price l-className="del-price" unit="￥" value="{{data.delCount}}" value-color="#ad0e11" unit-color="#ad0e11" deleted del-color="#666" value-color="#666" unit-color="#666"></l-price> */}
    </View>
  </View>
</LCard>
  </View>
}  

export {WaterFlowItem}