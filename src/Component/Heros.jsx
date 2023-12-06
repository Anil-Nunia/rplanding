import React, { useState } from 'react'
import Pagelogo from '../assets/image/png/pagelogo.png'
import Imgheroleft from '../assets/image/png/imgheroleft.png'
import Imgheroright from '../assets/image/png/imgheroright.png'
import { Turn as Hamburger } from 'hamburger-react'

const Heros = () => {
    const [isOpen, setOpen] = useState(false);
    const [open, setOpens] = useState(false);
    if (open === true) {
        document.body.classList.add("overflow-hidden")
    }
    else {
        document.body.classList.remove("overflow-hidden")
    }
    return (
        <>
            <div className='bg_color_hero w-full relative pb-[250px]  md:pb-[360px]'>
                <img src={Imgheroleft} alt="#" className='imgheroleft absolute max-w-[130px] md:max-w-[200px] lg:max-w-[512px]  left-0 top-[52%] md:top-[38%]  lg:top-[28%]' />
                <div>
                    <img src={Imgheroright} alt="#" className='imgheroright right-0 top-[52%] md:top-[38%] lg:top-[21%] max-w-[150px] md:max-w-[210px] lg:max-w-[624px] absolute'/>
                </div>
                <div className='container mx-auto'>
                    <div className='w-full top-0 left-0'>
                        <div className='lg:flex items-center justify-between  bg-transpent lg:px-10 px-3'>
                            <span className='cursor-pointer'> <img src={Pagelogo} alt="#" className='z-[11] max-w-[160px] lg:max-w-[210px] w-full relative top-[12px]' /></span>
                            <div onClick={() => setOpens(!open)} className='text-4xl text-white absolute right-10 top-7 cursor-pointer lg:hidden z-[11]'>
                                <button name={open ? 'close' : 'menu'}><Hamburger toggled={isOpen} toggle={setOpen} /></button>
                            </div>
                            <ul className={`lg:flex lg:items-center  gap-12 lg:pb-0 pb-12 fixed lg:static bg-[#57297c] lg:bg-transparent lg:z-auto z-[9]  w-full h-screen lg:h-auto lg:w-auto lg:pl-0  text-center lg:text-start pt-12 lg:pt-0 transition-all duration-500 ease-in ${open ? 'left-[0%]' : ''} left-[-100%]`}>
                                <li className='lg:my-0 my-7'><a href="#home" className=' text-xl font-bold font-[Poppins] text-white  duration-500 relative after:absolute after:hover:w-[24px] after:h-[3px] after:max-w-[24px] after:left-[20px] after:right-0 cont after:bg-[#CC33D9] after:w-0 after:bottom-[-2px] transition duration-450 ease-in-out hover:duration-450'>Home</a></li>
                                <li className='lg:my-0 my-7'><a href="#cards" className=' text-xl font-bold	font-[Poppins] text-white relative after:absolute after:hover:w-[24px] after:h-[3px] after:max-w-[24px] after:left-[20px] after:right-0 cont after:bg-[#CC33D9] after:w-0 after:bottom-[-2px] transition duration-450 ease-in-out hover:duration-450'>About Us</a></li>
                                <li className='lg:my-0 my-7'><a href="#gallary" className=' text-xl font-bold	font-[Poppins] text-white relative after:absolute after:hover:w-[24px] after:h-[3px] after:max-w-[24px] after:left-[20px] after:right-0 cont after:bg-[#CC33D9] after:w-0 after:bottom-[-2px] transition duration-450 ease-in-out hover:duration-450'>Gallery</a></li>
                                <li className='lg:my-0 my-7'><a href="#welcome" className='text-xl font-bold	font-[Poppins] text-white relative after:absolute after:hover:w-[24px] after:h-[3px] after:max-w-[24px] after:left-[20px] after:right-0 cont after:bg-[#CC33D9]  after:w-0 after:bottom-[-2px] transition duration-450 ease-in-out hover:duration-450'>Contact Us</a></li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className='container mx-auto px-3 lg:h-96 relative z-[2]' id='home'>
                    <div className='flex justify-center pt-2 lg:pt-36 px-3'>
                        <div className='flex flex-col justify-end'>
                            <div className='flex justify-center lg:max-w-lg'>
                                <p className='text-white text-3xl lg:text-5xl font-semibold ff-primary text-center lg:text-start  pb-4'>We Make Your Home More Beautiful</p>
                            </div>
                            <div className='flex justify-center lg:max-w-md'>
                                <p className='text-white ff-primary text-base lg:text-xl fw-normal text-center lg:text-start'>From choosing the right paint to getting an expert touch - leave it on us.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Heros