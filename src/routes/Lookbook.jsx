import React from 'react' 
import { Link } from 'react-router'
import { ShoppingBag } from 'lucide-react';
import explore from '../assets/lookbook-explore.svg'
import lookbook1 from '../assets/lookbook1.png'
import lookbook2 from '../assets/lookbook2.png'
import lookbook3 from '../assets/lookbookk3.png'
import lookbook4 from '../assets/lookbook4.png'
import inspired from '../assets/INSPIRED.svg'
import nikeLogo from "../assets/nikeseek.svg"
import adidas from "../assets/adidasseek.svg"
import hilfiger from "../assets/hilfigerseek.svg"
import uniqlo from "../assets/uniqloseek.svg"
import supreme from "../assets/supremeseek.svg"

const Lookbook = () => {
  return (
    <div>
        <div>
            <img src={explore} alt="" />
        </div>
        <div className='md:grid md:grid-cols-2 mx-20 gap-10 grid grid-cols-1 mb-20'>
            <Link className=' flex justify-center items-center flex-col'>
                <img src={lookbook1} className='rounded-md hover:shadow-2xl transition duration-200' alt="" />
                <Link to= ""
                className='bg-[#D9D9D9] px-3 py-3 rounded-full text-xs relative top-[-150px]  hover:bg-white transition duration-200 font-bold'>
                    <span className='flex gap-2 items-center'> BUY <span><ShoppingBag /></span> </span>
                </Link>
            </Link>
            <Link  className=' flex justify-center items-center flex-col '>
                <img src={lookbook2} className='rounded-md hover:shadow-2xl transition duration-200' alt="" />
                <Link to= ""
                className='bg-[#D9D9D9] px-3 py-3 rounded-full text-xs relative top-[-150px] hover:bg-white transition duration-200 font-bold'>
                    <span className='flex gap-2 items-center'> BUY <span><ShoppingBag /></span> </span>
                </Link>
            </Link>
            <Link  className=' flex justify-center items-center flex-col'>
                <img src={lookbook3} className='rounded-md hover:shadow-2xl transition duration-200' alt="" />
                <Link to= ""
                className='bg-[#D9D9D9] px-3 py-3 rounded-full text-xs relative top-[-150px] hover:bg-white transition duration-200 font-bold'>
                    <span className='flex gap-2 items-center'> BUY <span><ShoppingBag /></span> </span>
                </Link>
            </Link>
            <Link  className=' flex justify-center items-center flex-col'>
                <img src={lookbook4} className='rounded-md hover:shadow-2xl transition duration-200' alt="" />
                <Link to= ""
                className='bg-[#D9D9D9] px-3 py-3 rounded-full text-xs relative top-[-150px] hover:bg-white transition duration-200 font-bold'>
                    <span className='flex gap-2 items-center'> BUY <span><ShoppingBag /></span> </span>
                </Link>
            </Link>

        </div>
        <div className='flex flex-col justify-center items-center mb-10'>
                    <img src={inspired} alt="" />
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

export default Lookbook