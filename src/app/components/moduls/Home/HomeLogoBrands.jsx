import React from 'react'

export default function HomeLogoBrands() {

    const imgBrands=[
        "https://glasses-shop-1.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F41.e60ac20a.png&w=256&q=75",
        "https://glasses-shop-1.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F40.863ec92b.png&w=256&q=75",
        "https://glasses-shop-1.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F43.2be18703.png&w=256&q=75",
        "https://glasses-shop-1.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F42.160d0908.png&w=256&q=75",
    ]
  return (
    <div className='w-full h-[60vh] flex'>
      <ul className='w-full h-full justify-evenly items-center hidden md:flex'>
        {imgBrands.map((val , i)=>{
            return(
                <li key={i}><img src={val}/></li>
            )
        })}
      </ul>
    <ul className='w-full h-full *:flex *:w-full *:justify-center flex flex-wrap items-center  *:flex-wrap md:hidden'>
        {imgBrands.map((val , i)=>{
            return(
                <li key={i}><img src={val}/></li>
            )
        })}
      </ul>
    </div>
  )
}
