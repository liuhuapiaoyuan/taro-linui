import Taro from '@tarojs/taro'
const designWidth = 750
const px = (pxx)=>Taro.pxTransform(pxx*2,designWidth)

var containerStyle = function (urls, multipleSize, gapRow, gapColumn) {
    let width = 3 * multipleSize + 2 * gapRow
    if(urls.length === 2 || urls.length === 4){
        width = 2 * multipleSize + gapRow
    }
    //每列的间距，宽度 = 总宽度-2*gapRow
    return {
        width: px(width),
        // gridColumnGap:px(gapColumn),
        // gridRowGap:px(gapRow),
        // gridTemplateColumns:`repeat(auto-fit, ${px(multipleSize)})`
    } 
}

var blockClass = function (urls, horizontalScreen) {
    if (urls.length === 1) {
        if (horizontalScreen) {
            return 'l-single-image-class'
        } else {
            return 'vertical l-single-image-class'
        }
    } else {
        return 'l-multi-image-class'
    }
} 

var blockStyle = function (urls, horizontalScreen, shortSideValue, singleSize, multipleSize) {
    if (urls.length === 1) {
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
    } else {
        return {
            height:px(multipleSize),
            width:px(multipleSize),
            marginBottom:px(5),
            marginRight:px(5),
        } 
    }
}



export {containerStyle}
export {blockClass}
export {blockStyle}