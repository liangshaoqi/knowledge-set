import React, { useState, useEffect } from 'react'
export default function ClearEffect() {
  const [count, setCount] = useState(0)

  useEffect(() => {
    const timer = setTimeout(() => {
      setCount(count + 1)
    }, 15000)
    console.log('effect:', timer)
    return () => {
      console.log('clear:', timer)
      clearTimeout(timer)
    }
  })
  console.log('渲染之前')
  return (
    <div>{count}</div>
  )
}