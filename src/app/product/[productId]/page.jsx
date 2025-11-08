import React from 'react'
import getData from '@/app/components/Services/DataFetch'
import Link from 'next/link'
import AddToBasket from '@/app/components/moduls/Shop/addTobasket'
export default async function page({params}) {
  let tempId = await params
  tempId=parseInt(tempId.productId)

  const data = await getData('https://69065d93ee3d0d14c135a19b.mockapi.io/products/'+tempId)
  if(!data) return<h1>Loading...</h1>
  return (
    <div className='w-full flex  md:h-[100vh] flex-wrap justify-center pt-[50px]'>
      <div className='hidden md:flex w-[90%] flex h-[90%] px-10  bg-gray-300 '>
          <div className='w-[40%] h-[full]  flex justify-center items-center'>
              <img src={data.img} className='w-[450px] h-[250px]'/>
          </div>
          <div className='w-[50%] h-[full] mx-10 my-20  *:text-gray-800  '>
            <h1 className='text-4xl'>{data.title}</h1>
            <h3 className='my-5'>{data.category}</h3>
            <p className='text-2xl my-10'>{data.brand}</p>
            <span className='text-[18px] my-10'>{data.price}$</span>
            <div className='flex *:hover:mx-10 *:mx-2' >
            <AddToBasket   
            id={data.id}
            title={data.title}
            brand={data.brand}
            category={data.category}
            img={data.img}
            price={data.price} />
            
             <Link  href='/basket' className='w-[200px] h-[40px] flex justify-center hover:rounded-2xl group duration-700 my-10 items-center  bg-[#a2a2d4]'>
              <div>
                  <h3 className='group-hover:text-blue-800 font-bold'>Go to Basket</h3>
              </div>
             </Link>
              <Link href='/shop'  className='w-[200px] h-[40px] flex justify-center hover:rounded-2xl group duration-700 my-10 items-center  bg-[#a2a2d4]'>
                <div>
                    <h3 className='group-hover:text-blue-800 font-bold'>Go to Shop</h3>
                </div>
              </Link>
            </div>
          </div>

      </div>
      


      {/* md */}

      <div className='flex md:hidden w-[90%] flex flex-wrap  mt-10 md:mt-0 h-[150vh] px-10 bg-gray-300 '>
          <div className='w-full h-[full] mt-5 flex justify-center items-center'>
              <img src={data.img} className='w-[450px] h-[250px]'/>
          </div>
          <div className='w-[50%] h-[full]  mx-10 my-20  *:text-gray-800  '>
            <h1 className='text-4xl'>{data.title}</h1>
            <h3 className='my-5'>{data.category}</h3>
            <p className='text-2xl my-10'>{data.brand}</p>
            <span className='text-[18px] my-10'>{data.price}$</span>
            <div className=' *:hover:mx-10 *:mx-2' >
            <AddToBasket   
            id={data.id}
            title={data.title}
            brand={data.brand}
            category={data.category}
            img={data.img}
            price={data.price} />
            
             <Link  href='/basket' className='w-[200px] h-[40px] flex justify-center hover:rounded-2xl group duration-700 my-5 items-center  bg-[#a2a2d4]'>
              <div>
                  <h3 className='group-hover:text-blue-800 font-bold'>Go to Basket</h3>
              </div>
             </Link>
              <Link href='/shop'  className='w-[200px] h-[40px] flex justify-center hover:rounded-2xl group duration-700 my-5 items-center  bg-[#a2a2d4]'>
                <div>
                    <h3 className='group-hover:text-blue-800 font-bold'>Go to Shop</h3>
                </div>
              </Link>
            </div>
          </div>

      </div>
    </div>
  )
}
