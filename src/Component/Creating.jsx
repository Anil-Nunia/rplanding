import React from 'react'
import Imgtopcreating from '../assets/image/png/imgtopcreating.png'
import Imgleftcreating from '../assets/image/png/imgleftcreating.png'
import Imgrightcreating from '../assets/image/png/imgrightcreating.png'
import Imgmask from '../assets/image/png/imgMask.png'

const Creating = () => {
    return (
        <>
            <div className='relative'>
                <img src={Imgtopcreating} alt="#" className='absolute left-0 top-[-120px] lg:top-[-140px] w-full hidden lg:block' />
                <div className='bg_creating'>
                    <div className='container mx-auto px-4 relative z-[1] pt-10 lg:pt-64'>
                        <div className='lg:flex gap-4 px-4 items-center pb-12'>
                            <div className='w-full lg:w-[25%] flex justify-center'>
                                <img src={Imgleftcreating} alt="#" className='max-w-[405px] max-h-[309px] w-full h-full'/>
                            </div>
                            <div className='w-full lg:w-[50%] py-6 lg:py-16'>
                                <p className='font-[Poppins] text-white font-bold text-[30px] lg:text-[42px] text-center '><span className='lg:text-start flex justify-center lg:justify-start px-3'>Creating a Warm,</span>
                                    <span className='lg:text-end flex justify-center lg:justify-end px-3'> Welcoming Home</span> </p>
                            </div>
                            <div className='w-full lg:w-[25%] lg:mt-[-24px] lg:translate-y-[-55px] flex justify-center'>
                                <img src={Imgrightcreating} alt="#" />
                            </div>
                        </div>
                    </div>
                    <div className='relative'>
                        <img src={Imgmask} alt="#" className='absolute bottom-4 right-3' />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Creating