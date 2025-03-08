import React from 'react'
import hero from "../assets/hero.png"


const Hero = () => {
  return (
    <div className='flex flex-col justify-center  items-center'>
        <img src={hero} alt="" />
        <a href="" className='bg-[#D9D9D9] px-3 py-3 rounded-full text-xs relative top-[-100px] hover:bg-white transition duration-200 font-bold'>
            CHECK OUT NOW
        </a>
        
    </div>
  )
}

export default Hero