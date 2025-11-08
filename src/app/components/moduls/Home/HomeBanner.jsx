import Image from 'next/image'
import React from 'react'
export default function HomeBanner() {
  return (
    <div className='w-[full] h-[100vh] bg-amber-50  overflow-x-hidden'>
        <img src='https://glasses-shop-1.vercel.app/_next/static/media/2.71c24d90.jpg' className='w-full h-[100%] object-right object-cover md:object-cover relative' />
        <div className='absolute left-1.5 md:left-[10%] top-[20%]  w-[full] *:my-20'>
            <h3 className='text-2xl'>Explore Color with</h3>
            <h1 className='text-7xl'>SCOTT HARRIS</h1>
            <div className='flex justify-center items-center w-[300px] h-[50px] border-2 rounded-4xl hover:bg-gray-400'>
                <h3 className='text-2xl'>View the collection</h3>
            </div>
        </div>
    </div>
  )
}
