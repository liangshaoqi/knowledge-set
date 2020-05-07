import React, { useState, useEffect } from 'react'
export default function RHook() {
  const [list, setList] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(_ => {
    console.log(isLoading)
    if (isLoading) {
      setTimeout(_ => {
        setList([1, 2, 3])
        setIsLoading(false)
      }, 2000)
    }
  }, [isLoading])
  return (
    <div>
      {list.map(item => {
        return (
        <div key={item}>{item}</div>
        )
      })}
      <div><button onClick={() => setIsLoading(true)}>点击刷新</button></div>
    </div>
  )
}