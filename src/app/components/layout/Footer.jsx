import React from 'react'
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import HomeIcon from '@mui/icons-material/Home';
import EmailIcon from '@mui/icons-material/Email';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';

export default function Footer() {
  return (
    <div className='w-full h-[10vh] md:h-[40vh] '>
      <div className='w-full h-20 bg-gray-600 border-b justify-between flex items-center border-b-gray-400 px-5' >
        <h3>Get connected with us on social networks:</h3>
        <div className='*:mx-3'>
          <FacebookIcon sx={{ fontSize: 27, }} />
          <TwitterIcon/>
          <InstagramIcon/>
          <LinkedInIcon/>
          <GitHubIcon/>
        </div>
      </div>
      <div className='w-full hidden md:flex h-60  bg-gray-700'>
        <div className='w-[30%] h-full flex flex-wrap items-center  px-2.5'>
          <h3>Farahnaz Heydari</h3>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.
             Nisi aliquam odit in omnis minima quo eveniet
              consequatur! Odit, labore tempora?</p>
        </div>
        <div className='w-[40%] h-full'>
          <ul className='w-full h-full *:flex *:flex-wrap *:justify-center *:my-5 *:w-full'>
            <li className='text-2xl'>Products</li>
            <li>ReactNative</li>
            <li>React</li>
            <li>Flutter</li>
            <li>Vue</li>
          </ul>
        </div>
        <div className='w-[30%] h-full'>
          <ul className='*:flex  *:justify-center *:my-5 '>
            <li className='text-[20px]'>CONTACT</li>
            <li>
              <HomeIcon/>
              <h3>Tehran</h3>
            </li>
            <li>
                 <EmailIcon/>
              <h3>farahheydari2024</h3>
            </li>
            <li>
                 <LocalPhoneIcon/>
              <h3>09392311106</h3>
            </li>
          </ul>
        </div>
      </div>
      <div className='w-full h-10 flex justify-center items-center  bg-gray-600'>
        <p>&copy; 2025 Copyright:Farahnaz Heydari</p>
      </div>
    </div>
  )
}
