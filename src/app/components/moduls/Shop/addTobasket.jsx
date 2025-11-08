'use client'
import React from 'react'
import useShop from '@/app/store/store'

export default function AddToBasket({ id, title, img, category , brand,price }) {
  const updateBasket = useShop((state) => state.updateBasket);

  const handleClick = () => {
    updateBasket({ id, title, img, category , brand,price });
  };

  return (
            <div className='w-[200px] h-[40px] flex justify-center hover:rounded-2xl group duration-700 my-10 items-center  bg-[#f5a43b]'>
                <button onClick={handleClick} className='group-hover:text-white font-bold'>Add to Basket</button>
            </div>
  )
}





