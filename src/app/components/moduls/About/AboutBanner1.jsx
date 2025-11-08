import Image from 'next/image'
import React from 'react'
export default function AboutBanner1() {
  return (
    <div className='w-[full] h-[100vh] bg-amber-50  overflow-x-hidden'>
        <img src='https://glasses-shop-1.vercel.app/_next/image?url=%2F10.jpg&w=3840&q=75' className='w-full h-[100%] object-right object-cover md:object-cover relative' />
        <div className='absolute left-1.5 md:left-[10%] top-[40%]  w-[full] *:my-20'>
            <h1 className='text-7xl'>OUR STORY.</h1>
        </div>
    </div>
  )
}
