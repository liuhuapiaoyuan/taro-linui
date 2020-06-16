/**
 * 进行像素转化
 */
import Taro from '@tarojs/taro'
const designWidth = 750

export const px = (size:number):string=>Taro.pxTransform(size,designWidth)