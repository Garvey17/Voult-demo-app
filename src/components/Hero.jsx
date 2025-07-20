import React from 'react'
import hero from "../assets/hero.png"
import { Link } from 'react-router'


const Hero = () => {
  return (
    <div style={{ backgroundImage: `url(${hero})` }} className='flex flex-col justify-center  items-center h-[70vh] md:h-dvh  overflow-x-hidden bg-center bg-cover bg-no-repeat mb-8'>
        {/* <img src={hero} alt="" className=' object-fill' /> */}
        <div className='flex items-center flex-col gap-4 pt-8 d:mt-60 mt-40'>
          <div>
           <h1 className='font-montserrat font-bold text-3xl md:text-5xl text-white text-center'>VOULT   LOOKBOOK 2025</h1>
          </div>
          <div className='flex items-center'>
            <Link to= "/lookbook"
            className='bg-[#D9D9D9] px-3 py-2 rounded-full text-xs hover:bg-white transition duration-200 font-bold'>
              <span>CHECK OUT NOW</span>
            </Link>
          </div>
        </div>
        
    </div>
  )
}

export default Hero