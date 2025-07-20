import React, { useEffect } from 'react'
import { ShoppingCart } from 'lucide-react';
import { shopData } from '../data/shopData'
import { useCartStore } from '../store/cartStore'
import { useProductStore } from '../store/product';




const Shop = () => {
    const addItem = useCartStore(state => state.addItem);
    const { fetchProducts, products} = useProductStore()

    useEffect(() => {
        fetchProducts()
    }, [fetchProducts])
    
  return (
    <div>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-4 gap-4'>
            {products.map((product) => {
                return <div  key={product._id}>

                    <div className ="mx-auto mt-11 w-80 transform overflow-hidden rounded-lg bg-white dark:bg-slate-800 shadow-md duration-300  hover:shadow-lg">
                        <img className ="h-48 w-full object-cover object-center" src={product.image} alt={product.name} />
                        <div className ="p-4 flex flex-col justify-center items-center">
                        <h2 className ="mb-2 text-lg font-medium dark:text-white text-gray-900">{product.name}</h2>
                        <div className ="flex items-center">
                            <p className ="mr-2 text-lg font-semibold text-gray-900 dark:text-white">${product.price}</p>
                        </div>
                        <div className='flex justify-between gap-20'>
                            <button
                            onClick={() => addItem(product)}
                            className='bg-green-700 p-2 rounded-md text-sm hover:bg-green-900 flex gap-2'>
                                <ShoppingCart />
                                Add To cart
                            </button>
                        </div>
                        </div>
                    </div>
                </div>
            })}
        </div>
    </div>
  )
}

export default Shop