const objectToString = (style: object | string): string => {
  if (style && typeof style === 'object') {
    let styleStr = ''
    Object.keys(style).forEach(key => {
      const lowerCaseKey = key.replace(/([A-Z])/g, '-$1').toLowerCase()
      styleStr += `${lowerCaseKey}:${style[key]};`
    })
    return styleStr
  } else if (style && typeof style === 'string') {
    return style
  }
  return ''
}

/**
 * 合并两组样式，主要用于组件和外部自定义的样式合并
 * @param style1 样式1
 * @param style2 样式2
 */
const mergeStyle = (
  style1: object | string,
  style2?: object | string
): object | string =>{
  if(!style2){return style1}
  if (
    style1 &&
      typeof style1 === 'object' &&
      style2 &&
      typeof style2 === 'object'
  ) {
    return Object.assign({}, style1, style2)
  }
  return objectToString(style1) + objectToString(style2)
}

export default mergeStyle
