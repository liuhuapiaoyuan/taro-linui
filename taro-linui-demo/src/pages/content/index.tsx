import React from 'react'
import {View} from '@tarojs/components'
import {useRouter} from '@tarojs/taro'
import NaviTitle from '../../components/NaviTitle'
import DetailNaviCard from '../../components/DetailNaviCard'
import Config from './config'

import './index.less'
 
const Content : React.FC<any> = ()=>{
  const {params:{title,navigateMark}} = useRouter()
  const config = Config[navigateMark]
  return  <View className="content-page">
  <View className="section">
    <NaviTitle title={title} count={config.length}/>
    <View className="section-content">
      {
        config.map(({componentsPath,icon,title,desc})=>(
          <DetailNaviCard key={title} 
          title={title}
          desc={desc}
          icon={icon} componentsPath={componentsPath} />
        ))
      }
    </View>
  </View>

  </View>
}  
 
export default Content