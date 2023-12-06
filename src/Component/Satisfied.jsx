import React from 'react'
import Imgtopstasified from '../assets/image/png/imgtopsatisfied.png'
import Stars from '../assets/image/png/Star.png'
import Vectorlft from '../assets/image/png/imgclientsarrow.webp'

const Satisfied = () => {
  return (
    <>
      <div className='relative'>
        <img src={Imgtopstasified} alt="#" className='absolute left-0 w-full top-[-82px] 2xl:top-[-54px] hidden lg:block' />

        <div className='bg_card_colrs pt-8 lg:pt-80'>
          <div className='container mx-auto px-4'>
            <div className='flex justify-center'>
              <p className='font-[Poppins] font-bold text-white text-[24px] lg:text-[32px] uppercase text-center'>10,000 Satisfied clients
                <span className='lowercase block'> around the world</span></p>
            </div>
            <div className='flex justify-center pt-3 lg:pt-12'>
              <p className='font-[Poppins] text-center font-normal text-white text-xs lg:text-base max-[542px]:'>Yeah! we’re proud with numbers. We’ve helped thousands of clients <span className='lg:block'>
                all around the world with our bespoke service. Hover ontop of them</span><span className='lg:block'>
                  pic to view their testimonials.</span></p>
            </div>

            <div className='lg:flex pt-10 pb-12 lg:pb-72 gap-14  items-center '>
                <div className='w-[90%] lg:w-[50%]'>
                  <div className=' flex flex-col justify-center ps-10'>
                    <div className='card py-[18px] px-6 rounded-[15px] bg-[#C4C4C4;] color-[rgba(196, 196, 196, 1)] max-w-[410px] w-full h-full max-h-[117x] relative '>
                      <img src={Vectorlft} alt="#" className='absolute right-[-7%] top-[33%] w-8' />
                      <p className='text-[#333] font-[Poppins] text-base font-normal'>Neya from Goa</p>
                      <span className='pt-1.5 pb-2 '><img src={Stars} alt="#" /></span>
                      <p className='text-[#333] font-[Poppins] font-bold text-sm'>Best service
                      </p>
                      <p className='text-[#333] font-[Poppins] fon-normal text-sm'>Good material, Thank you.
                      </p>
                    </div>
                    <div className='flex lg:justify-end py-6 lg:py-12'>
                      <div className='card py-[18px] px-6 rounded-[15px] bg-[#C4C4C4;]color-[rgba(196, 196, 196, 1)] max-w-[410px] w-full h-full max-h-[117x] relative '>
                        <img src={Vectorlft} alt="#" className='absolute right-[-7%] top-[33%] w-8' />
                        <p className='text-[#333] font-[Poppins] text-base font-normal'>Pooja from UP</p>
                        <span className='pt-1.5 pb-2 '><img src={Stars} alt="#" /></span>
                        <p className='text-[#333] font-[Poppins] font-bold text-sm'>Best service
                        </p>
                        <p className='text-[#333] font-[Poppins] fon-normal text-sm'>Good material, Thank you.
                        </p>
                      </div>
                    </div>
                    <div className='card py-[18px] px-6 rounded-[15px] bg-[#C4C4C4;]color-[rgba(196, 196, 196, 1)] max-w-[410px] w-full h-full max-h-[117x] relative'>
                      <img src={Vectorlft} alt="#" className='absolute right-[-7%] top-[33%] w-8' />
                      <p className='text-[#333] font-[Poppins] text-base font-normal'>klyan from Gujarat</p>
                      <span className='pt-1.5 pb-2 '><img src={Stars} alt="#" /></span>
                      <p className='text-[#333] font-[Poppins] font-bold text-sm'>Best service
                      </p>
                      <p className='text-[#333] font-[Poppins] fon-normal text-sm'>Good material, Thank you.
                      </p>
                    </div>
                  </div>
                </div>
             
              <div className='w-[90%] lg:w-[50%]'>
                <div className='flex flex-col ps-10'>
                  <div className='flex lg:justify-center lg:pb-24 py-6 lg:pt-0'>
                    <div className='card py-[18px] px-6 rounded-[15px] bg-[#C4C4C4;]color-[rgba(196, 196, 196, 1)] max-w-[410px] w-full h-full max-h-[117x] relative'>
                      <img src={Vectorlft} alt="#" className='absolute right-[-7%] lg:left-[-7%] top-[33%] w-8 rotate-0 lg:rotate-180' />
                      <p className='text-[#333] font-[Poppins] text-base font-normal'>Ankit from MP</p>
                      <span className='pt-1.5 pb-2 '><img src={Stars} alt="#" /></span>
                      <p className='text-[#333] font-[Poppins] font-bold text-sm'>Best service
                      </p>
                      <p className='text-[#333] font-[Poppins] fon-normal text-sm'>Good material, Thank you.
                      </p>
                    </div>
                  </div>

                  <div className='card py-[18px] px-6 rounded-[15px] bg-[#C4C4C4;]color-[rgba(196, 196, 196, 1)] max-w-[410px] w-full h-full max-h-[117x] relative'>
                    <img src={Vectorlft} alt="#" className='absolute right-[-7%] lg:left-[-7%] top-[33%] w-8 rotate-0 lg:rotate-180' />
                    <p className='text-[#333] font-[Poppins] text-base font-normal'>Sushant from Mumbai</p>
                    <span className='pt-1.5 pb-2 '><img src={Stars} alt="#" /></span>
                    <p className='text-[#333] font-[Poppins] font-bold text-sm'>Best service
                    </p>
                    <p className='text-[#333] font-[Poppins] fon-normal text-sm'>Good material, Thank you.
                    </p>
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

export default Satisfied