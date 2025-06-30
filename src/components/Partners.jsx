import React from 'react'

function Partners() {
  return (
    <div>
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