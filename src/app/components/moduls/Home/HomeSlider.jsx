"use client"

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

import { FreeMode, Pagination } from 'swiper/modules';
import Link from 'next/link';

export default function HomeSlider({ data }) {
    return (
        <>
            <Swiper
                slidesPerView={4}
                spaceBetween={20}
                freeMode={false}
                // pagination={{
                //     clickable: true,
                // }}
                breakpoints={{
                    1024: {
                        slidesPerView: 3,
                    },
                    768: {
                        slidesPerView: 2,
                    },
                    0: {
                        slidesPerView: 1,
                    }
                }}
                modules={[FreeMode, Pagination]}
                className="mySwiper h-[65%] select-none"
            >
                {
                    data && data.slice(0, 10).map(val => {
                        let url = val.id +'-'+val.title
                        return (
                            <SwiperSlide key={val.id} className='p-5  text-slate-800   shadow-lg shadow-blue-300/100'>
                                <Link href={`/product/${val.id}`}>
                                    <img src={val.img} alt={val.title} className='w-full h-3/4 object-contain' />
                                    <p className='mt-4 mb-5 text-lg'>{val.title}</p>
                                    <div className="flex items-center justify-between">
                                        <span className="text-gray-500">{val.price} $</span>
                                        <button className="text-sm py-0.5 px-1 text-gray-800 bg-slate-400 rounded-sm cursor-pointer">Add To Cart</button>
                                    </div>
                                </Link>
                            </SwiperSlide>
                        )
                    })
                }
            </Swiper>
        </>
    )
}