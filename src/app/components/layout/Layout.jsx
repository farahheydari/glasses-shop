import React, { Children } from 'react'
import Header from './Header'
import Footer from './Footer'



export default function Layout({children}) {
  return (
    <>
    <Header/>
    <main className="w-full min-h-screen  bg-[#f7f7f7]">
      {children}
    </main>
    <Footer/>
    </>
  )
}
