import { productList } from "@/restaurant-component/productsList";
import Image from "next/image";
import React from "react";

const SalwaProducts = () => {
    return (
        <div className="w-screen overflow-x-scroll text-red-500">
            {/* WRAPPER */}
            <div className="w-max  flex">
                {/* SINGLE ITEM */}
                {productList.map((item) => (
                    <div
                        key={item.id}
                        className="w-screen h-[60vh] flex flex-col border border-gray-500 rounded-md  items-center justify-around p-4 mx-2 hover:bg-fuchsia-50 transition-all duration-300 md:w-[30vw] xl:w-[20vw] xl:h-[70vh]"
                    >
                        {/* IMAGE CONTAINER */}
                        {item.img && (
                            <div className="relative flex-1 w-[90%]  hover:rotate-[60deg] transition-all duration-500">
                                <Image src={item.img} alt="" fill className="object-contain items-center" />
                            </div>
                        )}
                        {/* TEXT CONTAINER */}
                        <div className=" flex-1 flex flex-col items-center justify-center text-center gap-1">
                            <h1 className="text-xl font-bold uppercase xl:text-xl ">{item.title}</h1>
                            <p className="xl text-black line-clamp-2">{item.desc}</p>
                            <span className=" py-2text-xl  font-bold">${item.price}</span>
                            <button className="bg-red-700 text-white p-2 rounded-md hover:bg-white hover:text-red-700 hover:font-bold hover:border  hover:border-gray-500">
                                Add to Cart
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SalwaProducts;