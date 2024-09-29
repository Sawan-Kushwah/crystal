"use client"
import React, { useEffect, useState } from 'react'
import food from "@/app/assest/food.png"
import down from "@/app/assest/down.svg"
import Image from 'next/image';
const getProductData = [
    {
        id: 1,
        name: "CRYSTAL AGATE PHONE GRIP",
        price: "18.99$",
        imageUrl: food,  // Replace with your image URL
    },
    {
        id: 2,
        name: "CRYSTAL AGATE PHONE GRIP",
        price: "18.99$",
        imageUrl: food,
    },
    {
        id: 3,
        name: "CRYSTAL AGATE PHONE GRIP",
        price: "18.99$",
        imageUrl: food,
    },
    {
        id: 4,
        name: "CRYSTAL AGATE PHONE GRIP",
        price: "18.99$",
        imageUrl: food,
    },
    {
        id: 5,
        name: "CRYSTAL AGATE PHONE GRIP",
        price: "18.99$",
        imageUrl: food,
    },
    {
        id: 6,
        name: "CRYSTAL AGATE PHONE GRIP",
        price: "18.99$",
        imageUrl: food,
    },
    {
        id: 7,
        name: "CRYSTAL AGATE PHONE GRIP",
        price: "18.99$",
        imageUrl: food,
    },
    {
        id: 8,
        name: "CRYSTAL AGATE PHONE GRIP",
        price: "18.99$",
        imageUrl: food,
    },
];

const AllProduct = () => {
    const [products, setproducts] = useState([]);
    useEffect(() => {
        setproducts(getProductData)
    }, [])

    return (
        <>

            <div className="min-h-screen bg-white p-8 px-12">
                <h1 className="text-4xl font-bold text-center mb-8 text-[#31546d]">All Products</h1>

                <div className="flex justify-end items-center mb-6 gap-5 pr-10">
                    <div className="flex items-center space-x-1">
                        <span className="text-[#9ab0c0]">Filter:</span>
                        <span className='text-[#317189] font-bold'>All Products</span>
                        <Image src={down} alt='down' />
                    </div>

                    <div className="flex items-center space-x-2">
                        <span className="text-[#9ab0c0]">Sort:</span>
                        <span className='text-[#317189] font-bold'>Best Selling</span>
                        <Image src={down} alt='down' />
                    </div>
                </div>

                <div className="flex flex-wrap gap-4 w-full justify-center">
                    {products.map(product => (
                        <div className="bg-white rounded-[30px] drop-shadow-sm border-2 p-7 text-center group hover:shadow-xl transition-shadow duration-300 ease-in-out" key={product.id}>
                            <Image src={product.imageUrl} alt={product.name} className="mx-auto w-48 h-48 object-cover" width={78} height={78} />
                            <h3 className="text-lg font-medium mt-4 text-gray-500">{product.name}</h3>
                            <p className="text-[#317189] mt-2">{product.price}</p>
                            <button
                                className={`text-[#67b4ff] px-10 py-3 rounded-xl mt-4 hover:opacity-90 transition text-sm font-bold border-2 border-[#67b4ff] 
                                    } group-hover:bg-gradient-to-r group-hover:from-[#75CCEB] group-hover:to-[#6FB4FF] group-hover:text-white`}
                               

                            >
                                BUY NOW
                            </button>
                        </div>
                    ))}
                </div>
                <div className='w-full text-center pt-5'>

                    <button
                        className={`text-[#67b4ff] px-10 py-3 rounded-xl mt-4 hover:opacity-90 transition text-sm font-bold border-2 border-[#67b4ff] hover:bg-gradient-to-r hover:from-[#75CCEB] hover:to-[#6FB4FF] hover:text-white`}>
                        View All
                    </button>

                </div>
            </div>

        </>
    )
}

export default AllProduct