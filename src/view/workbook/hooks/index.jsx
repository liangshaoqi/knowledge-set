import React, { useState, useEffect } from 'react'
export default function RHook() {
  const [list] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(_ => {
    
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