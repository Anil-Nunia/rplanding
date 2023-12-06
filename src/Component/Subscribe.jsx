import React from 'react'

const Subscribe = () => {
    return (
        <>
            <div className='container mx-auto px-4 pb-10 lg:pb-14'>
                <div className='flex justify-center pt-14 lg:pt-24'>
                    <p className='font-[Poppins] font-bold text-2xl lg:text-3xl font_color_gallary'>Subscribe our newsletter</p>
                </div>
                <div className='flex justify-center py-4 lg:py-8'>
                    <p className='font-[Poppins] font-normal text-xs lg:text-base text-[#333] max-w-[378px] text-center'>Subscribe to our newsletter for daily/weekly update of our products and services.</p>
                </div>
                <div className='flex flex-col lg:flex-row justify-center py-4'>
                    <div className='flex justify-center'>
                        <input type="text" className="bg-white  rounded-[100px]  p-[17px] text-[14px] text-[#333] font-[Poppins] text-normal w-[358px]  border_input" placeholder="EMAIL"/>
                    </div>
                    <div className='flex justify-center ps-2 pt-6 lg:pt-0'>
                        <button className='text-white text-[14px] font-[Poppins] font-bold py-4 px-14 btn_bg_gradient_sub rounded-[100px] btns'>SUBMIT</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Subscribe