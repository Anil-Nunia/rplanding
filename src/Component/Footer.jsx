import React from 'react'
import { Icongoogle } from './Icon'
import { Iconfacebook } from './Icon'
import { Icontwitter } from './Icon'
import { Iconinsta } from './Icon'

const Footer = () => {
    return (
        <>
            <div className='bg_footer py-10 lg:py-20'>
                <div className='container mx-auto px-4'>
                    <div className='w-[100%] lg:w-[70%]'>
                        <div className='lg:flex gap-28'>
                            <div className='w-[33.33] px-4 flex justify-center lg:justify-start'>
                                <div className='flex justify-center flex-col text-center lg:text-start'>
                                    <p className='text-white font-bold text-[30px] lg:text-base font-[Poppins]'>RP</p>
                                    <div className='max-w-[369px] pt-2 pb-4'>
                                        <p className='font-[Poppins] text-white text-[14px] font-normal '>Painting with RP means never painting your house again! Our special paint coating comes with a 20 years warranty.</p>
                                    </div>
                                    <ul className='flex gap-4 justify-center lg:justify-start'>
                                        <li className='hover:scale-125' ><a href="#"><Icongoogle /></a></li>
                                        <li className='hover:scale-125'><a href="#"><Iconfacebook /></a></li>
                                        <li className='hover:scale-125'><a href="#">< Icontwitter /></a></li>
                                        <li className='hover:scale-125'><a href="#"><Iconinsta /></a></li>
                                    </ul>
                               </div>
                            </div>

                            <div className='flex justify-center lg:justify-star gap-8 md:gap-24'>
                                <div className='w-[25] lg:w-[16.66] px-4 pt-7 lg:pt-0 '>
                                    <ul>
                                        <li className='font-[Poppins] text-white text-[18px] font-normal lg:pb-6'>Links</li>
                                        <li><a className='text-[#CACACA] font-[Poppins] font-normal text-xs' href="#">Home</a></li>
                                        <li><a className='text-[#CACACA] font-[Poppins] font-normal text-xs' href="#">About Us</a></li>
                                        <li><a className='text-[#CACACA] font-[Poppins] font-normal text-xs' href="#">Gallery</a></li>
                                        <li><a className='text-[#CACACA] font-[Poppins] font-normal text-xs' href="#">Contact Us</a></li>
                                    </ul>
                                </div>
                                <div className='w-[25] lg:w-[16.66] px-4 pt-7 lg:pt-0'>
                                    <ul>
                                        <li className='font-[Poppins] text-white text-[18px] font-normal pb-4'>Contact Us</li>
                                        <li className='text-[#CACACA] font-[Poppins] font-normal text-xs'>+91 1234567890	</li>
                                        <li className='text-[#CACACA] font-[Poppins] font-normal text-xs py-3'>XYZ@gmail.com	</li>
                                        <li className='text-[#CACACA] font-[Poppins] font-normal text-xs'>Address</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer