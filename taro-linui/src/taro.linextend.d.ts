declare namespace Taro  {
    /**
     * 显示一个linui的message
     * @param options 配置
     */
    function linMessage(options:LMessageOptions):void
 
    /**
     * LinUIMessage的配置
     */
    interface LMessageOptions {
         /**携带提示图标 */ 
        icon?:string  
        /** 图标的颜色，默认是#fff白色 */
        iconColor?:string
        /** 图标的尺寸，默认28px 像素 */
        iconSize?:string|number 
        /** 提示携带的图片 */
        image?:string,
        // /** 通知的内容 */
        content:string
        /** 通知的类型，默认是 primary */
        type?:'primary'| 'warning'| 'success'| 'error'
        /** 显示的持续时间 ，默认是1500ms */
        duration?:number
        /** 通知距离顶部的距离，默认是0，单位是px */
        top?:number,
        /**是否显示 */
        show?:boolean
    }
    /** 显示一个全屏的状态页 */
    function showStatusShow(options:any):void

    /** 隐藏全屏状态页 */
    function hideStatusShow(options:any):void
} 