import Taro from '@tarojs/taro' 

const MAX_QUERY_COUNT = 10
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

export function getNodeRect(selector){  
  let queryCount = 0
  function poll(promiseFunc){
    return promiseFunc().catch(()=>{
      queryCount=queryCount+1
      return new Promise((resolve,reject)=>{
        if(queryCount>MAX_QUERY_COUNT){
          return reject('查询超时')
        }
        setTimeout(()=>poll(promiseFunc).then(resolve),10)
      })
    })
  }
  return poll(()=>getDOMRect(selector))
}
 