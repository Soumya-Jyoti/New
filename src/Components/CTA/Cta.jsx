import React from 'react'
import { FaRegPaperPlane } from "react-icons/fa6";


const Cta = () => {
  return (
    <div
      className="position-relative"
    >
      <div
        className='p-5 rounded-5'
        style={{
          backgroundImage: "url('/images/cta-bg.png')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <h3 className='text-xl md:text-xl lg:text-3xl font-bold text-white text-center md:text-left'>
          Stay updated with our <br />
          latest products and offers.
        </h3>

        <p className='text-xl lg:text-2xl text-white mt-5 text-center md:text-left'>Subscribe to Mo Ink n Dyes and get notified</p>


        <div className='hidden md:block'>
          <div className='flex justify-center'>
            <div className='mt-5 bg-white rounded-pill d-flex align-items-center justify-content-between w-full h-10 md:h-10 lg:w-1/2 md:w-75 max-w-md'>
            <h4 className='ps-3 text-md lg:text-md font-medium d-flex gap-3 align-items-center col-7'><span><FaRegPaperPlane /></span>Your email</h4>
              <button className='text-md lg:text-md col-4 bg-violet-800 rounded-pill text-white font-medium h-100 w-2xl lg:w-md'>Subscribe</button>
            </div>
          </div>
        </div>

        <div className='block md:hidden'>
          <div className='flex justify-center'>
            <div className='mt-5 bg-white rounded-pill d-flex flex-col align-items-center justify-content-between w-full h-10 md:h-10 lg:w-1/2 md:w-75 max-w-md'>
              <h4 className='text-md lg:text-md font-medium d-flex justify-center items-center col-12 w-full text-center pt-2 gap-1'><span className=''><FaRegPaperPlane /></span>Your email</h4>
              <button className='mt-3 text-md lg:text-md col-12 bg-violet-800 rounded-pill text-white font-medium h-100 w-2xl lg:w-md'>Subscribe</button>
            </div>
          </div>
        </div>

      </div>


    </div>
  )
}

export default Cta