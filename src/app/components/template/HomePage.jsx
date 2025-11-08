import React from 'react'
import HomeBanner from '../moduls/Home/HomeBanner'
import HomeSection2 from '../moduls/Home/HomeSection2'
import HomeBrands from '../moduls/Home/HomeBrands'
import HomeNewCollection from '../moduls/Home/HomeNewCollection'
import HomeFixBanner from '../moduls/Home/HomeFixBanner'
import HomeLogoBrands from '../moduls/Home/HomeLogoBrands'
export default function HomePage() {
  return (
      
        <div className='overflow-x-hidden'>
        <HomeBanner/>
        <HomeSection2/>
        <HomeBrands/>
        <HomeNewCollection/>
        <HomeFixBanner/>
        <HomeLogoBrands/>
    </div>

  )
}
