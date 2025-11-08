import React from 'react'

export default function AboutLastSection() {
  return (
<div className='w-full h-[160vh] md:h-auto'>
      <div className='w-full md:flex h-[80vh]  '>
      <div className='w-full md:w-[50%] h-full flex md:flex-wrap justify-center items-center relative'>
        <img src='https://glasses-shop-1.vercel.app/_next/image?url=%2F13.jpg&w=1920&q=75' className='w-full h-full object-cover '/>
        <div className='w-[60%]  flex justify-center items-center flex-wrap h-[400px] absolute  top-[20px]'>
            <h1 className='text-3xl'>CAREERS</h1>
            <p className='text-center'>Interested in joining the Europa Family? We don’t call it a family to be cute; we mean it.
                 We’re proud to have mothers and daughters, brothers and sisters working alongside 
                each other in our sales force, office, and factory. Learn about the latest opportunities…</p>
            <div className='w-[350px] h-[60px]  hover:bg-gray-400 border border-amber-50 rounded-3xl flex justify-center items-center'>
                <h3 className='text-[18px] ml-10 md:ml-0'>start your career with Europa</h3>
            </div>
        </div>
      </div>

            <div className='w-full md:w-[50%] h-full flex md:flex-wrap  justify-center items-center relative'>
        <img src='https://glasses-shop-1.vercel.app/_next/image?url=%2F14.jpg&w=1920&q=75' className='w-full h-full object-cover '/>
        <div className='w-[60%]  flex justify-center items-center flex-wrap h-[400px] absolute  top-[20px]'>
            <h1 className='text-3xl'>BRANDS</h1>
            <p className='text-center'>No logo plaques, just independent eyewear. Learn about our ten diverse brands,
                 offering everything from adult eyewear to kid’s glasses to polarized sunwear.</p>
            <div className='w-[350px] hover:bg-gray-400 h-[60px] border border-amber-50 rounded-3xl flex justify-center items-center'>
                <h3 className='text-[18px]'>Explore Our Brands</h3>
            </div>
        </div>
      </div>
    </div>
</div>
  )
}
