import React,{useEffect,useState, useRef} from 'react'
import { View ,Text } from '@tarojs/components'
import classnames from 'classnames'


import '../../style/LCountdown.less'

export interface LCountdownProps {
  className?: string
  style?:string|React.CSSProperties 
  children?: React.ReactChild
  /** 输入时间的格式 ，默认是 datetime*/
  timeType?:'datetime'|'second'
  /** 倒计时的计时状态,可以控制暂停，默认true	 */
  status?:boolean
  /** 自定义格式化，默认是{%d}天{%h}时{%m}分{%s}秒 */ 
  format?:string 
  /** 一位数值时，是否自动补零,默认true */
  isZeroPadd?:boolean 
  /** 结束文本：默认是 已结束 */
  doneText?:string
  /** 倒计时模式，支持纪念日模式 */
  countdownType?:'normal'|'anniversary',
  /** 倒计时结束，触发事件 */
  onEnd?:()=>void
  /** 倒计时时间，可以是时间(时间字符串)，也可以是数字(单位：秒)  ， 默认是当前时间+24小时 */
  time?:number|string
}

/** 自动补0 */
function zeroPadding(num:string|number) {
  num = num.toString();
  return num[1] ? num : '0' + num;
}
/** 时间格式化 , time 是秒，不是ms */
function formatTime(formatPattern:string , time:number , isZeroPadd = true ){
  const date : any[] = [];
  const fomatArray = formatPattern.split(/(\{.*?\})/);
  const formatType = [{
    key: '{%d}',
    type: 'day',
    count: 86400
  }, {
    key: '{%h}',
    type: 'hour',
    count: 3600
  }, {
    key: '{%m}',
    type: 'minute',
    count: 60
  }, {
    key: '{%s}',
    type: 'second',
    count: 1,
  }];
  let diffSecond = time;
  formatType.forEach(format => {
    let index = fomatArray.indexOf(format.key) 
    index = index === -1 ? -1 : index+1
    if (index === -1) return;
    const name = fomatArray[index];
    const value = Math.floor(diffSecond / format.count)
    const formatItem = {
      type: format.type,
      name,
      //四舍五入
      value: isZeroPadd?zeroPadding(value) : value 
    }; 
    diffSecond %= format.count;
    date.push(formatItem);
  }); 
  return date;
}

//转换字符换到date，主要修正ios的 - 转换为 / 否则无法识别
function str2Date(dateStr:string){
  return new Date(dateStr.replace(/-/g, '/'))
}

const LCountdown: React.FC<LCountdownProps> = props => {
  //记录已经跑过去的时间
  const [addTime,setAddTime] = useState(0)
  const statusRef = useRef(props.status)
  const {
    className,style,
    countdownType='normal',
    doneText='已结束',
    isZeroPadd=true,
    status=true,
    timeType='second',
    format='{%d}天{%h}时{%m}分{%s}秒',
    time= 86400,
    onEnd
  } = props

  let showTime = (timeType =='datetime'|| countdownType==='anniversary') ? (Math.abs(str2Date(time as string).getTime() - Date.now()))/1000 : Number(time)
  
  //每次time改变，则重启代码
  useEffect(()=>{
    setAddTime(0)
    const timer = setInterval(()=>{
      //执行调用
      countdownType=='normal' && statusRef.current && setAddTime(v=>{
        if(v>showTime){
          clearInterval(timer)
          onEnd && onEnd()
        }
        return v+1 
      })
    },1000)
    return ()=>clearInterval(timer)
  },[showTime,onEnd,countdownType]) 
  useEffect(()=>{
    statusRef.current = status
  },[status])
  const stime = showTime - addTime
  return <View style={style} className={classnames(className,'l-countdown')}>
    {
      stime>=0 ? formatTime(format,stime,isZeroPadd).map((item:any,index)=><View className='l-countdown-item' key={index}>
        <Text className='l-class-time l-time-class l-countdown-time'>
          {item.value}
        </Text>
        {item.name}
      </View>) : <View className='l-countdown-donetext'>{doneText}</View>
    }
  </View>
}

export { LCountdown }