import React from 'react'
import Transitionimg from '../../TransitionImg/Transitionimg'

export default function HomeBrands() {
    const imageUrlBrands="https://glasses-shop-1.vercel.app/_next/static/media/6.df98196d.jpg"
    const image=[
        "https://glasses-shop-1.vercel.app/_next/static/media/4.83cb999f.svg",
        "https://glasses-shop-1.vercel.app/_next/static/media/1.cab2567a.svg",
        "https://glasses-shop-1.vercel.app/_next/static/media/02.4169f6e2.svg", 
        "https://glasses-shop-1.vercel.app/_next/static/media/3.80aae85a.svg", 
        "https://glasses-shop-1.vercel.app/_next/static/media/05.85e00b65.svg", 
        "https://glasses-shop-1.vercel.app/_next/static/media/06.933f1b3e.svg", 
        "https://glasses-shop-1.vercel.app/_next/static/media/7.c4235fe1.svg",
        "https://glasses-shop-1.vercel.app/_next/static/media/8.c2849234.svg", 
        "https://glasses-shop-1.vercel.app/_next/static/media/09.3b8b7159.svg",
        "https://glasses-shop-1.vercel.app/_next/static/media/10.d2e6ab58.svg",
        "https://glasses-shop-1.vercel.app/_next/static/media/11.1b4c27d8.svg",        
    ]
  return (
    <section className='w-full  md:h-[150vh] flex'>
        <div className='w-[50%] h-full'>
            <Transitionimg src={imageUrlBrands} alt={'glasses'} customStyle={{ width: '700px'}}/>
        </div>
        <div className='w-[50%] h-[300px] md:h-[120vh] flex items-center justify-center md:mt-[100px]  bg-[#d7d7e2]'>
            <ul className='w-[50%] md:h-[70%] flex flex-wrap  *:w-[100px] md:*:h-[80px] md:*:ml-[50px]'>
                {image.map((val , i)=>{
                    return(
                    <li key={i}><img src={val} className='w-[50px] my-2 md:w-auto'/></li>
                    )
                })}
            </ul>
        </div>
    </section>
  )
}
