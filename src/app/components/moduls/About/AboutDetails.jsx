import React from 'react'

export default function AboutDetails() {
  return (
    <div className='w-full h-[100vh] md:h-[120vh]'>
      <div className='hidden md:flex w-full h-full flex relative '>
        <div className=' w-[60%] mt-[100px]'>
          <img src='https://glasses-shop-1.vercel.app/_next/image?url=%2F11.jpg&w=750&q=75' className='w-full object-cover h-[100vh]'/>
        </div>
        <div className='w-[50%] h-[400px] p-15 bg-[#bebed8] absolute right-0 top-5'>
          <h1 className='text-black text-4xl  '>INDEPENDENT FOR <br/>THE INDEPENDENT</h1>
          <p className='mt-10  text-gray-500'>ndependence is in our DNA. You can chalk that up to the fact that Europa
            Eyewear is still owned and operated by its founding family, but it goes 
            further than that. It's a deep-seated belief that we share with independent-minded
              eye care professionals and eyeglass
            wearers - that independent offices are vital parts of their communities.</p>
        </div>
      </div>
      {/* md */}
      <div className='flex flex-wrap justify-center md:hidden w-full h-full  relative '>
        <div className=' w-full m-5 '>
          <img src='https://glasses-shop-1.vercel.app/_next/image?url=%2F11.jpg&w=750&q=75' className='w-[300px] object-cover h-[400px]'/>
        </div>
        <div className='w-[90%] h-[200px] p-5 bg-[#bebed8]'>
          <h1 className='text-black'>INDEPENDENT FOR <br/>THE INDEPENDENT</h1>
          <p className='mt-10 line-clamp-3 text-gray-500'>ndependence is in our DNA. You can chalk that up to the fact that Europa
            Eyewear is still owned and operated by its founding family, but it goes 
            further than that. It's a deep-seated belief that we share with independent-minded
              eye care professionals and eyeglass
            wearers - that independent offices are vital parts of their communities.</p>
        </div>
      </div>
    </div>
  )
}
