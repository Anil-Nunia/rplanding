import React from 'react'
import Imgtopgallory from '../assets/image/png/imgtopgallry.png'
import Imgliving from '../assets/image/png/Imgleftglr.png'
import Imgoffice from '../assets/image/png/imggoffice.png'
import Imgkitchen from '../assets/image/png/imgkitchen.png'
import Imgbath from '../assets/image/png/imgbathroom1.png'
import Imgbedroom from '../assets/image/png/imgbedroomss.png'

const Gallary = () => {
  return (
      <>
          <div className='relative' id='gallary'>
              <img src={Imgtopgallory} alt="#" className='absolute left-0 w-full top-[-132px] 2xl:top-[-274px] hidden lg:block' />

              <div className='container mx-auto lg:py-8 relative z-[1]'>
                  <p className='font-[Poppins] font-bold font_color_welcome text-3xl text-center pt-8 pb-6 lg:pb-20'>Gallery</p>
                  <div className='flex justify-center pb-8 lg:pb-0'>
                      <div className='flex flex-col lg:flex-row'>
                          
                          <div className='w-full lg:w-[50%] px-14 lg:pt-40'>
                              <div className='flex flex-col'>
                                  <img src={Imgliving} alt="#" className='max-w-[400px] w-full max-h-[484px]' />
                                  <p className='font-medium font-[Poppins] text-2xl lg:text-3xl font_color_gallary pt-3'>Living Room</p>
                              </div>
                              <div className='flex flex-col pt-6 lg:pt-20'>
                                  <img src={Imgkitchen} alt="#" className='max-w-[400px] w-full max-h-[484px]' />
                                  <p className='font-medium font-[Poppins] text-2xl lg:text-3xl font_color_gallary pt-3'>Kitchen</p>
                              </div>
                          </div>
                          <div className='w-full lg:w-[50%] px-14'>
                              <div className='flex justify-center flex-col pt-6 lg:pt-0'>
                                  <img src={Imgoffice} alt="#" className='max-w-[400px] w-full max-h-[424px]' />
                                  <div className='flex'>
                                      <p className='font-medium font-[Poppins] text-2xl lg:text-3xl font_color_gallary pt-3'> Office</p>
                                  </div>
                              </div>
                              <div className='flex justify-center flex-col pt-6 lg:pt-20'>
                                  <img src={Imgbath} alt="#" className='max-w-[400px] w-full max-h-[424px]' />
                                  <div className='flex'>
                                      <p className='font-medium font-[Poppins] text-2xl lg:text-3xl font_color_gallary pt-3'>Bath</p>
                                  </div>
                              </div>
                              <div className='flex justify-center flex-col pt-6 lg:pt-20'>
                                  <img src={Imgbedroom} alt="#" className='max-w-[400px] w-full max-h-[424px]' />
                                  <div className='flex'>
                                      <p className='font-medium font-[Poppins] text-2xl lg:text-3xl font_color_gallary pt-3'>Imgbath</p>
                                  </div>
                              </div>
                          </div>
                      </div>
                 </div>
              </div>
          </div> 
    </>
  )
}

export default Gallary