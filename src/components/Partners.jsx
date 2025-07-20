import React from 'react'
import nikeLogo from "../assets/nikeseek.svg"
import adidas from "../assets/adidasseek.svg"
import hilfiger from "../assets/hilfigerseek.svg"
import uniqlo from "../assets/uniqloseek.svg"
import supreme from "../assets/supremeseek.svg"

function Partners() {
  return (
    <div className='overflow-x-hidden'>
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
  )
}

export default Partners