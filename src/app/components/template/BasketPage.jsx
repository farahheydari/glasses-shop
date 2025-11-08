'use client'

import React, { useEffect, useState } from 'react'
import DeleteIcon from '@mui/icons-material/Delete';
import useShop from '@/app/store/store';

export default function BasketPage() {

    const { basket,plus, updateBasket, Minus, Del } = useShop()
    const[total , setTotal] = useState(0)

    

    useEffect(()=>{
        const allTotal=basket.reduce((acc , val)=>{
            const price = parseFloat(val.price.replaceAll('.' , ''))||0
            const quantitiy=parseInt(val.quantity)||0
            return acc +(price * quantitiy)


        }, 0)
        setTotal(allTotal)
    }, [basket])


        const realPrice = total.toLocaleString()


    console.log("innnner"+basket);
    
  return (
    <div className='w-full flex flex-wrap justify-center items-center '>
        
      <div className='hidden md:flex  w-[50%] mt-[100px]  flex-wrap justify-center items-center'>
      {basket.length===0 ?(
          <div className='w-full h-[100vh] flex justify-center items-center'><h1 className='text-black text-5xl'>empty your basket</h1></div>
      ):(
      basket.map((val)=>{
        return(
        <div key={val.id} className='w-full  flex flex-wrap'>
          <div className='w-full h-full flex justify-center '>
            <div className='w-[85%] h-[200px] flex  bg-[#d7d7e2] mt-5'>
              <div className='w-[350px] h-full flex mx-5   items-center'>
                <img src={val.img}/>
              </div>
              <div className='mx-5 my-10 w-[230px] h-full *:text-gray-800'>
                <h1 className='text-2xl'>{val.title}</h1>
                <h2>{val.brand}</h2>
                <h3>{val.category}</h3>
                <span className='mt-10'>{val.price}</span>
              </div>
              <div className='w-[200px] h-full flex justify-end'>
        
                <div className=' flex justify-evenly items-center'>
                  <button onClick={()=>Minus(val.id)}><span className='text-[30px] text-gray-800'>-</span></button>
                  <div className='w-[50px] h-[50px] flex justify-center items-center mx-5 border border-gray-700'>
                    <h3 className='text-2xl text-gray-900'>{val.quantity}</h3>
                  </div>
                  <button onClick={()=>plus(val.id)}><span className='text-[30px] text-gray-800'>+</span></button>
                </div>
                <div>
                  <button onClick={()=>Del(val.id)}>
                    <DeleteIcon sx={{color:'red', fontSize:'30px'}}/>
                  </button>
                </div>
              </div>
            </div>
          </div>
      
        </div>
      )
      }))}
      </div>
           <div className='hidden md:block  w-[40%] h-[400px] bg-[#cfc0c0] mr-[10px] mt-[100px] '>
                <div className='w-full h-[200px] *:text-gray-900 p-5'>
                    <div className='w-full h-[50px]'><h1 className='text-3xl text-gray-800'>total to pay</h1></div>
                    <div className='w-full h-[100px] flex items-center justify-between border-b border-b-gray-400'>
                        <span>{realPrice}$</span>
                        <h2 className='text-3xl'>total</h2>
                    </div>
                </div>
                <div  className='w-[93%] ml-5 h-[100px] flex items-center border-b border-b-gray-400 justify-between  *:text-gray-900'>
                    <span>{(Number(realPrice.replaceAll(',', '')) + 500).toLocaleString()}$</span>
                    <h1>Shipping cost</h1>
             
                </div>
                <div className='w-full h-[100px] flex justify-center items-center '>
                    <div className='w-[200px] h-[40px] bg-blue-700 flex rounded-2xl hover:w-[90%] duration-700 justify-center items-center'>
                        <button>pay</button>
                    </div>
                </div>
          </div>


          {/* md */}




          
    <div className='flex  md:hidden w-full mt-[50px]  flex-wrap justify-center '>
      {basket.length===0 ?(
          <div className='w-full  flex justify-center items-center'><h1 className='text-black text-5xl'>empty your basket</h1></div>
      ):(
      basket.map((val)=>{
        return(
        <div key={val.id} className='w-full   flex flex-wrap'>
          <div className='w-full h-full flex justify-center '>
            <div className='w-[85%]  flex flex-wrap bg-[#d7d7e2] mt-5'>
              <div className='w-[90%] h-[200px] flex mx-5   items-center'>
                <img src={val.img}/>
              </div>
              <div className='mx-5 my-10 w-[230px] h-full *:text-gray-800'>
                <h1 className='text-2xl'>{val.title}</h1>
                <h2>{val.brand}</h2>
                <h3>{val.category}</h3>
                <span className='mt-10'>{val.price}</span>
              <div className='w-[90%] mt-10  '>
        
                <div className=' flex flex-wrap justify-evenly '>
                  <button onClick={()=>Minus(val.id)}><span className='text-[30px] text-gray-800'>-</span></button>
                  <div className='w-[50px] h-[50px] flex justify-center items-center mx-5 border border-gray-700'>
                    <h3 className='text-2xl text-gray-900'>{val.quantity}</h3>
                  </div>
                  <button onClick={()=>plus(val.id)}><span className='text-[30px] text-gray-800'>+</span></button>
                </div>
                <div>
                  <button onClick={()=>Del(val.id)}>
                    <DeleteIcon sx={{color:'red', fontSize:'30px'}}/>
                  </button>
                </div>
              </div>
              </div>
         
            </div>
          </div>
      
        </div>
      )
      }))}
    </div>
    <div className='flex md:hidden flex-wrap  md:hidden w-[85%] h-[400px] bg-[#cfc0c0]  my-[50px] '>
                <div className='w-full h-[200px] *:text-gray-900 p-5'>
                    <div className='w-full h-[50px]'><h1 className='text-3xl text-gray-800'>total to pay</h1></div>
                    <div className='w-full h-[100px] flex items-center justify-between border-b border-b-gray-400'>
                        <span>{realPrice}$</span>
                        <h2 className='text-3xl'>total</h2>
                    </div>
                </div>
                <div  className='w-[93%] ml-5 h-[100px] flex items-center border-b mr-5 border-b-gray-400 justify-between  *:text-gray-900'>
                    <span>{(Number(realPrice.replaceAll(',', '')) + 500).toLocaleString()}$</span>
                    <h1>Shipping cost</h1>
             
                </div>
                <div className='w-full h-[100px] flex justify-center items-center '>
                    <div className='w-[200px] h-[40px] bg-blue-700 flex rounded-2xl hover:w-[90%] duration-700 justify-center items-center'>
                        <button>pay</button>
                    </div>
                </div>
    </div>
    </div>

    
  )
}
