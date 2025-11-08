'use client'
import useBasket from "@/app/store/store"

export default function BasketCount() {
  const data = useBasket((state) => state.basket)
   let count = data.length
  return(
    <div>
        {count>0&&
            <div className="w-[20px] h-[20px] flex justify-center items-center bg-red-600 rounded-full right-10 absolute top-8">
                <p className="text-white text-xs">{data.length}</p>
            </div>
        }       
    </div>

  )
}