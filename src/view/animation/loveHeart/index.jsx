import React from 'react'
import './index.scss'
export default function LoveHeater() {
  let list = []
  const operateList = () => {
    console.log(list)
    let str = ''
    for (let index = 0; index < 99; index++) {
      str = `
      <svg id='heart_${index}' + key={item} fill=${getRandomColor()} t="1587910011145" className="icon" viewBox="0 0 1024 1024" version="1.1"
      xmlns="http://www.w3.org/2000/svg" p-id="1253" width="32" height="32"
    >
      <path d="M677.51936 192.03072c113.1008 0 204.8 91.6992 204.8 204.77952 0 
     186.91072-370.3296 435.15904-370.3296 435.15904S141.68064 592.67072 141.68064 
     396.81024c0-140.78976 91.6992-204.77952 204.77952-204.77952 68.11648 0 
     128.28672 33.40288 165.5296 84.55168C549.24288 225.4336 609.41312 192.03072 
     677.51936 192.03072z" p-id="1254"
      ></path>
    </svg>
      `
      list.push(str)
    }
    // if (document.getElementById('heart')) document.getElementById('heart').innerHTML = list
  }
  const getRandomColor = () => {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    return 'rgba(' + r + ',' + g + ',' + b + ',0.8)';
  }
  operateList()
  // 动起来
  let getRandomNum = (scale) => Math.floor(Math.random() * scale + 1);
  const boxWidth = 300
  const boxHeight = 407
  const animateMove = () => {
    // setTimeout(() => {
    //   for (let i = 0; i < 99; i++) {
    //     const item = `heart_${i}`
    //     console.log(item)
    //     const width = getRandomNum(boxWidth)
    //     const height = getRandomNum(boxHeight)
    //     const cWidth = getRandomNum(1000) - width
    //     const cHeight = getRandomNum(1000) - height
    //     document.getElementById(item).animate([
    //       { transform: `scale(${getRandomNum(2)})`, left: '0px', top: '0px' },
    //       { transform: `scale(${getRandomNum(2)})`, left: `${boxWidth / 2}px`, top: `${boxHeight / 2}px` },
    //       { transform: `scale(${getRandomNum(2)})`, left: `${cWidth * 2}px`, top: `${cHeight * 2}px` }
    //     ], {
    //       duration: 9000,
    //       iterations: Infinity,
    //       easing: 'ease-in-out'
    //     })
    //   }
    // }, 1000)
  }
  animateMove()
  return (
    <div className='heart-view'>
      <div id='heart'>
        {
          list.map(item => {
            return <svg id={'heart_' + item} key={item} fill={getRandomColor()} t="1587910011145" className="icon" viewBox="0 0 1024 1024" version="1.1"
              xmlns="http://www.w3.org/2000/svg" p-id="1253" width="32" height="32"
            >
              <path d="M677.51936 192.03072c113.1008 0 204.8 91.6992 204.8 204.77952 0 
             186.91072-370.3296 435.15904-370.3296 435.15904S141.68064 592.67072 141.68064 
             396.81024c0-140.78976 91.6992-204.77952 204.77952-204.77952 68.11648 0 
             128.28672 33.40288 165.5296 84.55168C549.24288 225.4336 609.41312 192.03072 
             677.51936 192.03072z" p-id="1254"
              ></path>
            </svg>
          })
        }

      </div>
    </div>
  )
}