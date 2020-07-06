import React, {  } from 'react'
import './mask.scss'
export default function Mask() {
  return (
    <div className='mask-view'>
      <div className='mask_1'>
        <p>基本用法</p>
        <div className='mask_bg'></div>
      </div>
      <div className='mask_2'>
        <p>图片裁剪</p>
        <div className='mask_bg'></div>
      </div>
      <div className='mask_3'>
        <p>多图片用法</p>
        <div className='mask_bg'></div>
      </div>
      <div className='mask_4'>
        <p>多单个图片动画渐变</p>
        <div className='mask_bg'></div>
      </div>
      <div className='mask_5'>
        <p>多个图片动画渐变</p>
        <div className='mask_bg'></div>
      </div>
      <div className='mask_6'>
        <p>图片角度渐变</p>
        <div className='mask_bg'></div>
      </div>
    </div>
  )
}