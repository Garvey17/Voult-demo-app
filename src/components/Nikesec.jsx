import React from 'react'
import nike from "../assets/nike-jam.png"
import { ShoppingBag } from 'lucide-react';
import { Link } from 'react-router';

const Nikesec = () => {
  return (
    <div style={{ backgroundImage: `url(${nike})` }} className='flex flex-col justify-center  items-center h-[70vh] md:h-dvh overflow-x-hidden bg-center bg-cover bg-no-repeat mb-8'>
        <div className='flex items-center flex-col gap-4 pt-8 d:mt-60 mt-40'>
            <div >
                <h1 className='font-montserrat font-bold text-3xl md:text-5xl text-white text-center'>NIKE STREETWEAR</h1>
            </div>
            <div className='flex items-center'>
                <Link to='/shop'
                className='bg-[#F0BEA2] px-3 py-2 rounded-full text-xs flex items-center gap-2 hover:bg-[#1C2E34] transition duration-200 font-bold'>
                SHOP <ShoppingBag />
                </Link>
            </div>
       
        </div> 
    </div>
  )
}

export default Nikesec