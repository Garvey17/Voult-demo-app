import React, { useState } from 'react'
import { useProductStore } from '../store/product';

function CreatePage() {
    const [newProduct, setNewProduct] = useState({
        name: "",
        price: "",
        image: ""
    })
    
    const {createProduct} = useProductStore()


    const handleNewProductPost = async() => {
        const {success, message} = createProduct(newProduct)
        if(success){
            alert(message)
        }else{
            alert('failed to add product')
        }

        setNewProduct({
            name: "",
            price: "",
            image: ""
        })
    }
  return (
    <div className='w-screen h-screen flex justify-center items-center overflow-x-hidden '>
        <div className="relative flex flex-col rounded-xl bg-white p-4">
           <h1>
            Create Product 
           </h1>
            <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
                <div className="mb-1 flex flex-col gap-6">
                <div className="w-full max-w-sm min-w-[200px]">
                    <label className="block mb-2 text-sm text-slate-600">
                    Product name 
                    </label>
                    <input type="text" className="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow" placeholder="Product name" 
                    name='name'
                    value={newProduct.name}
                    onChange={(e) => {
                        setNewProduct({...newProduct, name: e.target.value})
                    }}
                    />
                    
                </div>
                <div className="w-full max-w-sm min-w-[200px]">
                    <label className="block mb-2 text-sm text-slate-600">
                    Price
                    </label>
                    <input type="number" className="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow" placeholder="Price" 
                    name='price'
                    value={newProduct.price}
                    onChange={(e) => {
                        setNewProduct({...newProduct, price: e.target.value})
                    }}
                    />
                </div>
                <div className="w-full max-w-sm min-w-[200px]">
                    <label className="block mb-2 text-sm text-slate-600">
                    Image
                    </label>
                    <input type='' className="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow" placeholder="Product image" 
                    name='image'
                    value={newProduct.image}
                    onChange={(e) => {
                        setNewProduct({...newProduct, image: e.target.value})
                    }}
                    />
                </div>
                </div>
                
                <button className="mt-4 w-full rounded-md bg-slate-800 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" type="button"
                onClick={handleNewProductPost}
                >
                Submit
                </button>

               
               
            </form>
        </div>
    </div>
  )
}

export default CreatePage