
import Taro from '@tarojs/taro'

console.warn(Taro)
/**
 * 设备工具类
 * 可以获取一些与设备相关的信息
 * 该类获取到的所有设备信息单位均为 rpx
 */
class DeviceUtil {
    systemInfo:any
    /**
     * 构造函数
     * @param systemInfo 设备信息
     */
    constructor(systemInfo) {
      this.systemInfo = systemInfo;
    }
  
    /** 
     * px 转 rpx
     * @param px 像素值
     */
    px2rpx(px) :number{
      const windowWidth = this.systemInfo.windowWidth;
      return 750 / windowWidth * px;
    }
  
    /**
     * rpx 转 px
     * @param rpx
     */
    rpx2px(rpx):number {
      const windowWidth = this.systemInfo.windowWidth;
      return windowWidth / 750 * rpx;
    }
  
    /**
     * 获取导航栏高度（单位rpx）
     */
    getNavigationBarHeight() {
      const titleBarHeight = this.getTitleBarHeight();
      const statusBarHeight = this.getStatusBarHeight();
      return titleBarHeight + statusBarHeight;
    }
  
    /**
     * 获取状态栏高度（单位rpx）
     */
    getStatusBarHeight() {
      return this.px2rpx(this.systemInfo.statusBarHeight);
    }
  
    /**
     * 获取标题栏高度（单位rpx）
     */
    getTitleBarHeight() {
      const statusBarHeight = this.systemInfo.statusBarHeight;
      const capsuleButtonInfo = Taro.getMenuButtonBoundingClientRect();
      const gap = capsuleButtonInfo.top - statusBarHeight;
      return this.px2rpx(gap * 2 + capsuleButtonInfo.height);
    } 
  }
  
  const deviceUtil = new DeviceUtil(Taro.getSystemInfoSync());
  export default deviceUtil;
  