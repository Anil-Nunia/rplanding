import React from 'react'
import Imgtopdiscover from '../assets/image/png/imgtopdiscover.png'

const Discover = () => {
  return (
      <>
          <div className='relative'>
              <img src={Imgtopdiscover} alt="#" className='absolute left-0 top-[-60px] sm:top-[-120px] lg:top-[-250px] w-full hidden lg:block' />
              <div className='container mx-auto px-4 relative z-[2]'>
                  <div className='py-8 lg:pt-0 lg:pb-12'>
                      <div className='flex justify-center lg:pb-12'>
                          <p className='font-bold font-[Poppins] text-3xl font_color_gallary text-center lg:text-start'>Discover exclusive deals and discounts </p>
                      </div>
                      <div className='flex justify-center pt-3 lg:pt-12'>
                          <p className='color-[#333] font-normal font-[Poppins] text-base'>add Link </p>
                      </div>
                 </div>
              </div>
          </div>
      </>
  )
}

export default Discover