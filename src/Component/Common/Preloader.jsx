import React from 'react'
import Imglogo from '../../assets/image/png/pagelogo.png'

function Preloader() {
    setTimeout(() => {
        document.getElementById("none").classList.add("hidden");
        document.body.classList.remove("overflow_hidden");
    }, 3000);

return (
        <div>
            <div id="none" className="h-screen w-full bg-[black] fixed top-0 start-0  z-20">
                <div className="flex justify-center items-center h-screen">
                    <div >
                        <img src={Imglogo} alt="#" width={"100px"} height={'100px'} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Preloader