'use client'
import React, { useState } from 'react'
import Link from 'next/link';

export default function ShopPage({data}) {
    
  return (
    <div className='w-full'>
        <div className='w-full h-[150px] flex justify-between bg-[#d7d7e2] px-5'>
            <h1 className='mt-[80px] text-4xl text-gray-900'>SHOP</h1>  
        </div>
        
   

        <div className='w-full flex flex-wrap justify-evenly px-10 mt-[50px]  '>
               {data&&data.map((val)=>{
          return(
              <div key={val.id} className='py-15 px-10 h-[280px] md:h-[400px] w-full md:w-[30%] my-10 text-slate-800 shadow-lg shadow-blue-300/100'>
                        <Link href={`/product/${val.id}`}>
                                <img src={val.img} alt={val.title} className='w-full h-3/4 object-contain' />
                                <p className='mt-4 mb-5 text-lg'>{val.title}</p>
                                <div className="flex items-center justify-between">
                                    <span className="text-gray-500">{val.price} $</span>
                                  <button className="text-sm py-0.5 px-1 text-gray-800 bg-slate-400 rounded-sm cursor-pointer">Add To Cart</button>
                              </div>
                        </Link>
              </div>)
          
        })}
         
        </div>
    </div>
  )
}
