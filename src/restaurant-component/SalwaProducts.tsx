
import React from 'react'
import {productList} from "@/restaurant-component/ProductsList";



const SalwaProducts = () => {
  return (
      <div className=" w-screen overflow-x-scroll">
        <div className='w-max flex'>
        {productList.map((product) => (
      <div key={product.id} 
       className=" w-full mt-4 md:w-[300px] rounded-md border mx-10">
        
          <img
              src={product.img}
              alt="Laptop"
              className=" object-contain"
          />
          <div className="p-4">
              <h1 className="text-lg font-semibold">{product.title}</h1>
              <p className="mt-3 text-sm text-gray-600">
                 {product.desc}
              </p>
                    <h1 className="text-sm pt-3 font-semibold">{product.title}</h1>
              <button
                  type="button"
                  className="mt-4 rounded-sm bg-black px-2.5 py-1 text-[10px] font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
              >
                  Read
              </button>
          </div>
          </div>
                ))}
          </div>
      </div>
  )
}

export default SalwaProducts