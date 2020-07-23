import {useState,useEffect} from 'react'



function useControlled<S>(initialState?: S | (() => S)) : [S|undefined, any]{
  const [value,setValue] = useState(initialState)
  //监听数据的改变
  useEffect(()=>{
    setValue(initialState)
  },[initialState])
  return [value,setValue]
}


export {useControlled}