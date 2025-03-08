import React from 'react'
import midhero from "../assets/samba-fever.png"
import { ShoppingBag } from 'lucide-react';

const Sambasec = () => {
  return (
    <div className='flex flex-col justify-center  items-center'>
        <img src={midhero} alt="" />
        <a href="" className='bg-[#B1E0D7] px-3 py-2 rounded-full text-xs flex items-center gap-2 relative top-[-100px] hover:bg-[#2fc2f8] transition duration-200 font-bold'>
            SHOP <ShoppingBag />
        </a>
    </div>
  )
}

export default Sambasec