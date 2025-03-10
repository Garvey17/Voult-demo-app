import React from 'react'
import midhero from "../assets/samba-fever.png"
import { ShoppingBag } from 'lucide-react';
import { Link } from 'react-router';

const Sambasec = () => {
  return (
    <div className='flex flex-col justify-center  items-center'>
        <img src={midhero} alt="" />
        <Link to='/shop'
         className='bg-[#B1E0D7] px-3 py-2 rounded-full text-xs flex items-center gap-2 relative top-[-100px] hover:bg-[#2fc2f8] transition duration-200 font-bold'>
          SHOP <ShoppingBag />
        </Link>
       
    </div>
  )
}

export default Sambasec