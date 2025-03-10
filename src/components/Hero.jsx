import React from 'react'
import hero from "../assets/hero.png"
import { Link } from 'react-router'


const Hero = () => {
  return (
    <div className='flex flex-col justify-center  items-center'>
        <img src={hero} alt="" />
        <Link to= "/lookbook"
         className='bg-[#D9D9D9] px-3 py-3 rounded-full text-xs relative top-[-100px] hover:bg-white transition duration-200 font-bold'>
          <span>CHECK OUT NOW</span>
        </Link>
        
    </div>
  )
}

export default Hero