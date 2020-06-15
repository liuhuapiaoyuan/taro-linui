import React from 'react'
import {View} from '@tarojs/components'
import {LButtonProps} from '../../types/Button'

import '../../style/Button.less'
  
 

const LButton : React.FC<LButtonProps> = props=>{
    const {title,children} = props
    return (
    <View className='test-button'>{title}{children}</View>
    )
}  
LButton.defaultProps ={
    title:'测试标题'
}
export {LButton}
 
