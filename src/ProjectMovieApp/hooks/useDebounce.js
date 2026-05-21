import React, { useState,useEffect } from 'react'

const useDebounce = ({search,delay=2000}) => {
    const [debounceValue,setDebounceValue]=useState("")
    useEffect(()=>{
        const timer =setTimeout(()=>{
            setDebounceValue(search)
        },delay)
        return () =>clearTimeout(timer)
},[search,delay])
  return {debounceValue}
  
}

export default useDebounce
