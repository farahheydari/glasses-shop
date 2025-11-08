import React from 'react'
import ShopPage from '../components/template/ShopPage'

  async function getData() {

    const result = await fetch("https://69065d93ee3d0d14c135a19b.mockapi.io/products")

    if(!result.ok) {  throw new Error('not Found')}

    const data= await result.json()
      return data
    
  }

export default async function Shop() { 
  
    const data = await getData()

  return (
    <div>
      <ShopPage data={data}/>
    </div>
  )
  
}