import React from 'react'
import { useState } from 'react';
import { Search } from 'lucide-react';
import { Menu, X } from 'lucide-react';
import Cart from './Cart';
import CartIcon from './CartIcon';
import logo from "../assets/logo.svg"
import { Link } from 'react-router-dom';


const navItems = [
    { label: "BECOME A MEMBER", href: "#" },
    { label: "SHOP", href: "#" },
    { label: "CONTACT", href: "#" },
  ];


const NavBar = () => {

    const [isCartOpen, setIsCartOpen] = useState(false);
    const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false)

    const toggleCart = () => {
        setIsCartOpen(!isCartOpen)
    }
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
                        
                        <input type="search" name="search" placeholder='Search' className='border-[2px] p-3 rounded-full' id="" />
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
                         className='text-xs hover:underline transition hover:duration-200 ease-in-out hover:scale-110 '>
                            <span>
                                BECOM A MEMBER 
                            </span>
                        </Link>
                        <Link  to="/shop"
                         className='text-xs hover:underline transition hover:duration-200 ease-in-out hover:scale-110 '>
                            <span>
                                SHOP 
                            </span>
                        </Link>
                        <Link to="/contact"
                         className='text-xs hover:underline transition hover:duration-200 ease-in-out hover:scale-110 '>
                            <span>
                                CONTACT 
                            </span>
                        </Link>
                        <Link to="/admin"
                         className='text-xs hover:underline transition hover:duration-200 ease-in-out hover:scale-110 '>
                            <span>
                               ADMIN 
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
                </div>
                <Link to={"/cart"}>
                <button className='cart-toggle cursor-pointer hover:bg-gray-400 p-3 rounded-full hover:duration-200 ease-in-out' onClick={toggleCart}>
                    <CartIcon />
                </button>
                </Link>
                {/* <button 
                onClick={() => setIsCartOpen(!isCartOpen)}
                className="cart-toggle"
                >
                <CartIcon />
                </button> */}
            </div>
            {/* {isCartOpen && (
                <div className="cart-modal">
                <div className="cart-content">
                    <Cart />
                </div>
                </div>
                    
            )} */}

            {mobileDrawerOpen && (
                <div className="left-0 absolute bg-white w-[50vw] p-12 flex flex-col lg:hidden text-black border mt-[11px] background-blur-lg z-50">
                    <div  className='flex flex-col gap-8'>

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
                    {/* <ul className='flex flex-col gap-8 '>
                        {navItems.map((data, index) => (
                            <li className='hover:underline transition duration-200 ease-in-out font-bold' key={index}>
                                <a href={data.href}> {data.label}</a>
                            </li>
                        ))}
                    </ul> */}
                </div>
            )}     
        </div>
    </nav>
  )
}

export default NavBar