import React from 'react'
import nike from "../assets/nike-jam.png"
import { ShoppingBag } from 'lucide-react';
import nikeLogo from "../assets/nikeseek.svg"
import adidas from "../assets/adidasseek.svg"
import hilfiger from "../assets/hilfigerseek.svg"
import uniqlo from "../assets/uniqloseek.svg"
import supreme from "../assets/supremeseek.svg"

const Nikesec = () => {
  return (
    <div className='flex flex-col justify-center  items-center mb-10'>
        <div className='flex flex-col justify-center  items-center'>
        <img src={nike} alt="" />
        <a href="" className='bg-[#F0BEA2] px-3 py-2 rounded-full text-xs flex items-center gap-2 relative top-[-100px] hover:bg-[#1C2E34] transition duration-200 hover:text-white font-bold'>
            SHOP <ShoppingBag />
        </a>
        <div className='flex flex-col justify-center items-center'>
            <h1 className='font-bold mb-4 underline'>STORE</h1>
            <div className='flex justify-around gap-10 '>
                <a href="" className='hover:shadow-lg transition duration-200'>
                    <img src={uniqlo} alt="" />
                </a>
                <a href="" className='hover:shadow-lg transition duration-200'>
                    <img src={hilfiger} alt="" />
                </a>
                <a href="" className='hover:shadow-lg transition duration-200'>
                    <img src={supreme} alt="" />
                </a>
                <a href="" className='hover:shadow-lg transition duration-200'>
                    <img src={adidas} alt="" />
                </a>
                <a href="" className='hover:shadow-lg transition duration-200'>
                    <img src={nikeLogo} alt="" />
                </a>
            </div>
        </div>
        </div> 
    </div>
  )
}

export default Nikesec