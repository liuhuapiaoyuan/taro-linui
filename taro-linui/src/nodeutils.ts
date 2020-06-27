import Taro from '@tarojs/taro'

const MAX_QUERY_COUNT = 10
export const getNodeRect = selector =>{
  //查询dom的宽度和高度，注意这里获得的是一个px单位 
  function getDOMRect(_selector){
    return new Promise((resolve,reject)=>{
      Taro.createSelectorQuery()
        .select(_selector)
        .boundingClientRect(r=>{
          if(!!!r){
            reject()
          }else{
            resolve(r)
          }
        })
        .exec()
    })  
  }
  let queryCount = 0
  function poll(promiseFunc){
    return promiseFunc().catch(()=>{
      queryCount+=1
      return new Promise((reslove,reject)=>{
        if(queryCount>MAX_QUERY_COUNT){
          return reject('查询超时')
        }
        Taro.nextTick(()=>reslove(poll(promiseFunc)))
      })
    })
  }
  return poll(()=>getDOMRect(selector))
}