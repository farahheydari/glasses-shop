import React from 'react'
import Transitionimg from '../TransitionImg/Transitionimg'
import TransitionText from '../TransitionText/TransitionText'


export default function BrandPage() {
    const imgUrl1="https://glasses-shop-1.vercel.app/_next/image?url=%2F60.jpg&w=640&q=75"
    const imgUrl2="https://glasses-shop-1.vercel.app/_next/image?url=%2F61.jpg&w=640&q=75"
    const imgUrl3="https://glasses-shop-1.vercel.app/_next/image?url=%2F64.jpg&w=640&q=75"
    const imgUrl4="https://glasses-shop-1.vercel.app/_next/image?url=%2F65.jpg&w=640&q=75"
    const imgUrl5="https://glasses-shop-1.vercel.app/_next/image?url=%2F68.jpg&w=640&q=75"
    const imgUrl6="https://glasses-shop-1.vercel.app/_next/image?url=%2F71.jpg&w=640&q=75"
    const imgUrl7="https://glasses-shop-1.vercel.app/_next/image?url=%2F73.jpg&w=640&q=75"
    const imgUrl8="https://glasses-shop-1.vercel.app/_next/image?url=%2F75.jpg&w=640&q=75"
  return (
    <div className='px-10'>
        <section className='w-full h-[70vh] md:h-[100vh] flex'>
    
            <div className='w-[50%] h-full mt-[80px]'>

                    <div className='w-full h-[200px] md:h-[400px] flex md:p-10 flex-wrap  '>
                        <div className='w-full '>
                            <img src='https://glasses-shop-1.vercel.app/q1.svg' className='w-[200px] h-[100px]'/>
                        </div>
                        <TransitionText>
                        <h1 className='text-[20px] text-[#5f5e29]'>Intelligent  Authentic  Soulful</h1>
                        <p className='text-gray-900 line-clamp-6  '>THERE ARE 70 CRAFTSPEOPLE in our Chicago factory determined to 
                            redefine luxury eyewear. Each frame is meticulously handcrafted 
                            from premium, globally sourced materials to be a genuine expression 
                            of one’s personal style and distinct personality. STATE frames are for those
                            who consider how their frame is made with as much mindfulness as how it looks.</p>
                          </TransitionText>  
                        <div className='w-[150px] mt-5 h-[40px] border hover:bg-gray-300  flex justify-center items-center border-[#5f5e29] rounded-2xl'>
                            <h3 className='text-[16px] text-gray-900'>Explore Brand</h3>
                        </div>
                        </div>
                    </div>
                <div className='w-[50%] h-full mt-[80px] ml-5'>
                    <Transitionimg src={imgUrl1} alt={'glasses'}/>
                </div>
        </section>
        {/* sec2 */}
        <section className='w-full h-[70vh] md:h-[100vh] flex'>
           <div className='w-[50%] h-full mt-[80px] mr-5'>
                <Transitionimg src={imgUrl2}/>
            </div>
            <div className='w-[50%] h-full mt-[80px]'>
                    <div className='w-full h-[400px] flex md:p-10 flex-wrap  '>
                        <div className='w-full '>
                            <img src='https://glasses-shop-1.vercel.app/62.svg' className='w-[200px] h-[100px]'/>
                        </div>
                        <TransitionText>
                        <h1 className='text-[20px] text-[#5f5e29]'>Maverick Cool Soulful</h1>
                        <p className='text-gray-900 line-clamp-6'>AO EYEWEAR prides itself on quality and 
                            timeless American style, since 1833. AO has been proudly worn by JFK, the Apollo
                             11 crew, Malcolm X, Truman Capote, and countless film stars. AO frames are handcrafted 
                             by a team of skilled artisans 
                            in our Illinois factory with the finest globally sourced components.</p>
                        </TransitionText>
                        <div className='w-[150px] h-[40px] border hover:bg-gray-300  flex justify-center items-center border-[#5f5e29] rounded-2xl'>
                            <h3 className='text-[16px] text-gray-900'>Explore Brand</h3>
                        </div>
                        </div>
            </div>
             
        </section>
        {/* sec3 */}
        <section className='w-full h-[70vh] md:h-[100vh] flex'>
        
            <div className='w-[50%] h-full mt-[80px]'>
                    <div className='w-full h-[400px] flex md:p-10 flex-wrap  '>
                        <div className='w-full '>
                            <img src='https://glasses-shop-1.vercel.app/63.svg' className='w-[200px] h-[100px]'/>
                        </div>
                        <TransitionText>
                        <h1 className='text-[20px] text-[#5f5e29]'>Dynamic Fresh Energetic</h1>
                        <p className='text-gray-900 line-clamp-6'>Scott Harris isn’t about prescribing uniform eyewear;
                             it’s about providing you with the options to best suit your unique self. Across men’s,
                              women’s, and unisex options - Scott Harris offers fresh, timely, colorful stylings free 
                              of heavy embellishments. “Eyewear should fit both your face and your personality naturally,
                             and it should be unique enough to fit them both perfectly.” - Scott Harris Shapiro</p>
                          </TransitionText>  
                        <div className='w-[150px] h-[40px] border hover:bg-gray-300  flex justify-center items-center border-[#5f5e29] rounded-2xl'>
                            <h3 className='text-[16px] text-gray-900'>Explore Brand</h3>
                        </div>
                        </div>
                    </div>
                <div className='w-[50%] h-full mt-[80px] ml-5'>
                    <Transitionimg src={imgUrl3} alt={'glasses'}/>
                </div>
        </section>
        {/* sec4 */}
          <section className='w-full h-[70vh] md:h-[100vh] flex'>
           <div className='w-[50%] h-full mt-[80px] mr-5'>
                <Transitionimg src={imgUrl4}/>
            </div>
            <div className='w-[50%] h-full mt-[80px]'>
                    <div className='w-full h-[400px] flex md:p-10 flex-wrap  '>
                        <div className='w-full '>
                            <img src='https://glasses-shop-1.vercel.app/66.svg' className='w-[200px] h-[100px]'/>
                        </div>
                        <TransitionText>
                        <h1 className='text-[20px] text-[#5f5e29]'>Sophisticated Cool Confident</h1>
                        <p className='text-gray-900 line-clamp-6'>Eyewear, even more so than jewelry, becomes a part
                             of how the world sees you. Cinzia takes that choice very seriously. Born unapologetically
                              from the unique point of view of designer Cynthia Shapiro, Cinzia eyewear favors sophistication
                               over femininity and personal style over chasing fads. Each frame is designed to
                             emanate confidence, perfect for the woman unafraid to make her mark.</p>
                        </TransitionText>
                        <div className='w-[150px] h-[40px] border hover:bg-gray-300  flex justify-center items-center border-[#5f5e29] rounded-2xl'>
                            <h3 className='text-[16px] text-gray-900'>Explore Brand</h3>
                        </div>
                        </div>
            </div>
             
        </section>
        {/* sec5 */}
        <section className='w-full h-[70vh] md:h-[100vh] flex'>
        
            <div className='w-[50%] h-full mt-[80px]'>
                    <div className='w-full h-[400px] flex md:p-10 flex-wrap  '>
                        <div className='w-full '>
                            <img src='https://glasses-shop-1.vercel.app/67.svg' className='w-[200px] h-[100px]'/>
                        </div>
                        <TransitionText>
                        <h1 className='text-[20px] text-[#5f5e29]'>Straightforward Honest Energetic</h1>
                        <p className='text-gray-900 line-clamp-6'>When the late Alan J. Shapiro started his own eyewear 
                            company out of a garage in the 70s, he didn’t have a lot of resources but he had plenty
                             of grit, a contagious energy, and the determination to do things his own way. He valued
                              honesty more than status and people more than profits. By focusing on quality you can feel, 
                              frames you can wear with confidence, and a company you can feel good about supporting, the Alan J. 
                              collection pays tribute to the man who inspired it all. Every Alan J frame is handcrafted by a team of skilled 
                            artisans in our Illinois factory with the finest globally sourced components.</p>
                          </TransitionText>  
                        <div className='w-[150px] h-[40px] border hover:bg-gray-300  flex justify-center items-center border-[#5f5e29] rounded-2xl'>
                            <h3 className='text-[16px] text-gray-900'>Explore Brand</h3>
                        </div>
                        </div>
                    </div>
                <div className='w-[50%] h-full mt-[80px] ml-5'>
                    <Transitionimg src={imgUrl5} alt={'glasses'}/>
                </div>
        </section>
        {/* sec6 */}

        <section className='w-full h-[70vh] md:h-[100vh] flex'>
           <div className='w-[50%] h-full mt-[80px] mr-5'>
                <Transitionimg src={imgUrl6}/>
            </div>
            <div className='w-[50%] h-full mt-[80px]'>
                    <div className='w-full h-[400px] flex md:p-10 flex-wrap  '>
                        <div className='w-full '>
                            <img src='https://glasses-shop-1.vercel.app/70.svg' className='w-[200px] h-[100px]'/>
                        </div>
                        <TransitionText>
                        <h1 className='text-[20px] text-[#5f5e29]'>Pragmatic
Comprehensive
Confident</h1>
                        <p className='text-gray-900 line-clamp-6'>Eyewear, even more so than jewelry,
                             becomes a part of how the world sees you. Cinzia takes that choice
                              very seriously. Born unapologetically
                             from the unique point of view of designer Cynthia Shapiro, Cinzia
                              eyewear favors sophistication over femininity and personal style over 
                              chasing fads. Each frame is designed to emanate confidence, perfect for 
                              the woman unafraid to make her mark.</p>
                        </TransitionText>
                        <div className='w-[150px] h-[40px] border hover:bg-gray-300  flex justify-center items-center border-[#5f5e29] rounded-2xl'>
                            <h3 className='text-[16px] text-gray-900'>Explore Brand</h3>
                        </div>
                        </div>
            </div>
             
        </section>
       
        {/* sec7 */}
        <section className='w-full h-[70vh] md:h-[100vh] flex'>
        
            <div className='w-[50%] h-full mt-[80px]'>
                    <div className='w-full h-[400px] flex md:p-10 flex-wrap  '>
                        <div className='w-full '>
                            <img src='https://glasses-shop-1.vercel.app/72.svg' className='w-[200px] h-[100px]'/>
                        </div>
                        <TransitionText>
                        <h1 className='text-[20px] text-[#5f5e29]'>Feminine
Elegant
Energetic</h1>
                        <p className='text-gray-900 line-clamp-6'>Cote D’Azur eyewear aims to capture a moment 
                            of grace in the design of every frame, offering elegant styling for women who 
                            appreciate fine details and feminine touches, all designed to highlight your natural beauty.
                             Only premium materials are used and all styles 
                            are designed to accommodate a wide range of prescriptions.</p>
                          </TransitionText>  
                        <div className='w-[150px] h-[40px] border hover:bg-gray-300  flex justify-center items-center border-[#5f5e29] rounded-2xl'>
                            <h3 className='text-[16px] text-gray-900'>Explore Brand</h3>
                        </div>
                        </div>
                    </div>
                <div className='w-[50%] h-full mt-[80px] ml-5'>
                    <Transitionimg src={imgUrl7} alt={'glasses'}/>
                </div>
        </section>
        {/* sec8 */}
        <section className='w-full h-[100vh] flex'>
           <div className='w-[50%] h-full mt-[80px]'>
                <Transitionimg src={imgUrl8}/>
            </div>
            <div className='w-[50%] h-full mt-[80px]'>
                    <div className='w-full h-[400px] flex md:p-10 flex-wrap  '>
                        <div className='w-full '>
                            <img src='https://glasses-shop-1.vercel.app/74.svg' className='w-[200px] h-[100px]'/>
                        </div>
                        <TransitionText>
                        <h1 className='text-[20px] text-[#5f5e29]'>Pragmatic
Comprehensive
Confident</h1>
                        <p className='text-gray-900 line-clamp-6'>Some decisions are complicated, 
                            choosing eyewear doesn’t have to be. Michael Ryen eyewear is designed
                             to provide discerning men a breadth of options in a wide range of sizes.
                              Three principles drive the design and execution of
                             every Michael Ryen frame: Fit, Quality, & Style.</p>
                        </TransitionText>
                        <div className='w-[150px] h-[40px] border hover:bg-gray-300  flex justify-center items-center border-[#5f5e29] rounded-2xl'>
                            <h3 className='text-[16px] text-gray-900'>Explore Brand</h3>
                        </div>
                        </div>
            </div>
             
        </section>
    </div>

  )
}
