import React from 'react'
import midhero from "../assets/samba-fever.png"
import { ShoppingBag } from 'lucide-react';
import { Link } from 'react-router';

const Sambasec = () => {
  return (
    <div style={{ backgroundImage: `url(${midhero})` }} className='flex flex-col justify-center  items-center h-[70vh] md:h-dvh w-screen overflow-hidden bg-center bg-cover bg-no-repeat mb-8'>
      <div className='flex items-center flex-col gap-4 pt-8 md:mt-60 mt-40'>
      <div className=''>
        <h1 className='font-montserrat font-bold text-3xl md:text-5xl text-white text-center'>SAMBA FEVER</h1>
      </div>
      <div className='flex items-center'>
        <Link to='/shop'
         className='bg-[#B1E0D7] px-3 py-2 rounded-full text-xs flex items-center gap-2 hover:bg-[#2fc2f8] transition duration-200 font-bold'>
          SHOP <ShoppingBag />
        </Link>
      </div>

      </div>
       
    </div>
  )
}

export default Sambasec