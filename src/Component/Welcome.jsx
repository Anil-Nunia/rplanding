import React from 'react'
import Imgtoplayer from '../assets/image/png/imgtoplayer.png'
import Imgwelcome from '../assets/image/png/imgwelcome.png'

const Welcome = () => {
    return (
        <>
            <div className='relative' id='welcome'>
                <img src={Imgtoplayer} alt="#" className='absolute left-0 top-[-142px] 2xl:top-[-211px] w-full hidden lg:block' />
            </div>
            <div className='container mx-auto z-[1] relative py-16 xl:py-12'>
                <div className='lg:flex items-center'>
                    <div className=' lg:w-[50%] px-3'>
                        <img src={Imgwelcome} alt="#" />
                    </div>
                    <div className='lg:w-[50%] px-3 pt-7 lg:pt-0 text-center lg:text-start'>
                        <div className='flex justify-center flex-col'>
                            <div className='flex justify-center lg:justify-start'>
                                <p className='font-[Poppins] font-bold text-3xl font_color_welcome pb-7'>Welcome to RP</p>
                            </div>
                            <p className='font-normal text-base font-[Poppins]lg:max-w-[640px] text-[#333] leading-[40px]'>A family-run business, with our own factory nestled in India, we are producing a complete range of traditional and modern paints. We formulate high
                            </p>
                            <p className='font-normal text-base font-[Poppins]lg:max-w-[640px] text-[#333] leading-[40px]'>performance paint, blended with the best ingredients. Our company includes interior and exterior paints, oil-based paints, floor paints and a special range of antimicrobial paints.
                            </p>
                            <p className='font-normal text-base font-[Poppins]lg:max-w-[640px] text-[#333] leading-[40px]'>
                                With a color palette you can easily mix the colors together to expand the range.
                            </p>
                            <p className='font-normal text-base font-[Poppins]lg:max-w-[640px] text-[#333] leading-[40px] pb-7'>
                                The numbers of creating different textures, finishes and shades are unlimited.   </p>
                            <div className='flex justify-center lg:justify-start'>
                                <button className='text-white text-base font-[Poppins] font-bold py-4 px-14 btn_bg_gradient btns'>MORE</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Welcome