import React from 'react'
import Imgtopcard from '../assets/image/png/Imgtopcard.png'
import Imghomecard from '../assets/image/png/img_home_card.png'
import Imgflowercard from '../assets/image/png/img_flower_card.png'
import Imgbrushcard from '../assets/image/png/img_brush_card.png'


const Cards = () => {
    
    return (
        <>
            <div className='relative' id='cards'>
                <img src={Imgtopcard} alt="#" className='absolute left-0 w-full top-[-142px] 2xl:top-[-145px] hidden lg:block' />
                
                <div className='bg_card_colrs w-full '>
                    <div className='container mx-auto'>
                        <div className='md:flex pt-20 pb-32 lg:pt-60 2xl:pt-80  lg:pb-80 2xl:pb-96'>
                            <div className='w-[100%] md:w-[33.33%] px-3'>
                                <div className='py-4 lg:py-7 px-4 lg:px-12 border-[1px solid #888] cards hover:[transform:scale(1.04);]  lg:hover:[transform:scale(1.34);]   hover:duration-150 duration-150'>
                                    <p className='font-[Poppins] font-bold color-[#888] contc text-xl pb-5 opacity-25'>Exterior</p>
                                    <img src={Imghomecard} alt="#" className='w-full'/>
                                    <div className='pt-5'>
                                        <button className='text-white fs-base font-[Poppins] font-bold py-4 px-14 btn_bg_gradient opacity-25 hover:opacity-[1] btn'>MORE</button>
                                    </div>
                                </div>
                            </div>
                            <div className='w-[100%] md:w-[33.33%] px-3 mt-6 md:mt-0'>
                                <div className='py-4 lg:py-7 px-4 lg:px-12 border-[1px solid #888] cards hover:[transform:scale(1.04);]  lg:hover:[transform:scale(1.34);]   hover:duration-150 duration-150'>
                                    <p className='font-[Poppins] font-bold  text-xl pb-5 opacity-25 color-[#888] contc'>Interior</p>
                                    <img src={Imgflowercard} alt="#" className='w-full'/>
                                    <div className='pt-5'>
                                        <button className='text-white fs-base font-[Poppins] font-bold py-4 px-14 btn_bg_gradient opacity-25 hover:opacity-[1] btn'>MORE</button>
                                    </div>
                                </div>
                            </div>
                            <div className='w-[100%] md:w-[33.33%] px-3 mt-6 md:mt-0'>
                                <div className='py-4 lg:py-7 px-4 lg:px-12 border-[1px solid #888] cards hover:[transform:scale(1.04);]  lg:hover:[transform:scale(1.34);]   hover:duration-150 duration-150'>
                                    <p className='font-[Poppins] font-bold color-[#888] contc text-xl pb-5 opacity-25'>your perfect color</p>
                                    <img src={Imgbrushcard} alt="#" className='w-full'/>
                                    <div className='pt-5'>
                                        <button className='text-white fs-base font-[Poppins] font-bold py-4 px-14 btn_bg_gradient opacity-25 hover:opacity-[1] btn'>MORE</button>
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

export default Cards