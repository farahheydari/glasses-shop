import React from 'react'
import Transitionimg from '../../TransitionImg/Transitionimg'
import TransitionText from '../../TransitionText/TransitionText'
export default function HomeSection2() {

    const imageUrl1="https://glasses-shop-1.vercel.app/_next/static/media/4.943c5381.jpg"
    const imageUrl2="https://glasses-shop-1.vercel.app/_next/static/media/5.3068c93b.jpg"
  return (
    <section className='w-full h-[120vh] flex'>
        <div className='hidden md:flex'>
            <div className='w-[50%] h-[200px]  mt-[400px] px-10' >
                    <TransitionText>
                    <p className='text-2xl text-[#9292a8]'>Europa is the eyewear company committed to staying independent. Operated by the 
                        second generation of our founding family, we’re proud to craft
                    products and policies focused on supporting likeminded, independent eye care professionals.</p>
                    </TransitionText>
            </div>
            <div className='md:flex relative w-[50%] h-full '>
                <div className='w-[350px] h-[500px] bg-[#b3b3c7] absolute right-[120px] top-[80px]'></div>
                    <Transitionimg src={imageUrl1} alt={'abazhor'} customStyle={{ width: '350px',height: '500px',position: 'absolute',right: '50px',top:'40px'}}/>
                    <Transitionimg src={imageUrl2} alt={'abazhor'} customStyle={{ width: '300px',height: '200px',position: 'absolute',right: '200px',top:'450px'}}/>
            </div>
        </div>
        <div className='flex flex-wrap md:hidden mt-5'>
              <div className='md:flex justify-center relative w-full'>
                    <Transitionimg src={imageUrl1} alt={'glasses'} customStyle={{ width: '200px',height: '300px',position: 'absolute',right: '10px',top:'0px'}}/>
                    <Transitionimg src={imageUrl2} alt={'glasses'} customStyle={{ width: '150px',height: '100px',position: 'absolute',right: '100px',top:'240px'}}/>
            </div>
            <div className='w-[full] h-[200px] mt-[100px] px-10' >
                    <TransitionText>
                    <p className='text-2xl text-[#9292a8]'>Europa is the eyewear company committed to staying independent. Operated by the 
                        second generation of our founding family, we’re proud to craft
                    products and policies focused on supporting likeminded, independent eye care professionals.</p>
                    </TransitionText>
            </div>
          
        </div>
    </section>
  )
}
