import React from 'react'
import { useState } from 'react';
import { Search } from 'lucide-react';
import { Menu, X } from 'lucide-react';
import { ShoppingCart } from 'lucide-react';
import logo from "../assets/logo.svg"
import { Link } from 'react-router-dom';


const navItems = [
    { label: "BECOME A MEMBER", href: "#" },
    { label: "SHOP", href: "#" },
    { label: "CONTACT", href: "#" },
  ];


const NavBar = () => {

    const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false)

    const toggleNavMenu = () => {
        setMobileDrawerOpen(!mobileDrawerOpen)
    }

  return (

    <nav className='flex bg-transparent sticky top-0 z-50 py-3 backdrop-blur-2xl border-b border-neutral-700/80 font-Montserat'>
        <div className='container px-4 mx-auto relatieve lg:text-sm'>
            <div className='flex justify-between items-center'>
                <div className='flex gap-4 text-xs items-center'>
                    <div className='lg:hidden '>
                        <button className='cursor-pointer' onClick={toggleNavMenu}>
                            {mobileDrawerOpen ?<X /> : <Menu />}
                        </button>
                    </div>
                    <div className='flex items-center'>
                        
                        <input type="search" name="search" placeholder='Search' className='border border-[2px] p-3 rounded-full' id="" />
                        <button className='cursor-pointer hover:bg-gray-100 p-1 rounded-full transition duration-200'>
                        <Search />
                        </button>
                            
                    </div>
                </div>
                <div>
                    <Link to= "/">
                        <img className='w-20' src={logo} alt="logo" />
                    </Link>
                </div>
                <div className='hidden lg:flex gap-4 items-center'>
                    <div className='flex gap-8'>
                        <Link  to="/membership"
                         className='text-xs hover:underline transition hover:duration-200 ease-in-out hover:font-bold '>
                            <span>
                                BECOM A MEMBER 
                            </span>
                        </Link>
                        <Link  to="/shop"
                         className='text-xs hover:underline transition hover:duration-200 ease-in-out hover:font-bold '>
                            <span>
                                SHOP 
                            </span>
                        </Link>
                        <Link to="/contact"
                         className='text-xs hover:underline transition hover:duration-200 ease-in-out hover:font-bold '>
                            <span>
                                CONTACT 
                            </span>
                        </Link>
                    </div>

                    {/* <ul className='flex gap-8'>
                    {navItems.map((data,index) => (
                        <li className='text-xs hover:underline transition hover:duration-200 ease-in-out hover:font-bold ' key={index}>
                        
                            <a href={data.href} className=''>{data.label}</a>
                        </li>
                    ))}
                    </ul> */}
                    <button className='cursor-pointer'>
                    <ShoppingCart />
                    </button>
                </div>
            </div>
            {mobileDrawerOpen && (
                <div className="fixed left-0 z-20 bg-white w-[50vw] p-12 flex flex-col lg:hidden text-black border mt-[11px] background-blur-lg">
                    <ul className='flex flex-col gap-8 '>
                        {navItems.map((data, index) => (
                            <li className='hover:underline transition duration-200 ease-in-out font-bold' key={index}>
                                <a href={data.href}> {data.label}</a>
                            </li>
                        ))}
                    </ul>
                </div>
            )}     
        </div>
    </nav>
  )
}

export default NavBar