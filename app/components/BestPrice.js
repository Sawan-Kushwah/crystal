import React from 'react'
import foodOnCircle from "@/app/assest/foodOnCircle.svg"
import food from "@/app/assest/food.png"
import Image from 'next/image'
const BestPrice = () => {
    return (

        <div className=" px-6 py-24 rounded-lg flex justify-center items-center ">
            {/* Main Flexbox Container */}
            <div className="flex items-center justify-around relative z-10">
                {/* Left Side - Text Section */}
                <div className="flex flex-col text-right text-[#31546d]  w-1/2">
                    {/* Title and Best Price */}
                    <h2 className="text-4xl font-bold uppercase ">Best Price</h2>
                    <h1 className="text-6xl font-bold mt-2">Agate Phone Grip</h1>

                    {/* Price Section */}
                    <div className="flex justify-end items-center mt-4">
                        <span className="text-[#41A0B7] line-through text-2xl mr-4">$44.50</span>
                        <span className="text-[#E35B3E] text-7xl font-bold">$19.50</span>
                    </div>

                    {/* Description */}
                    <div className='w-full flex justify-end'>

                        <p className="mt-4 w-[75%]">
                            These Pop Rock Crystal grip tops can be swapped with other tops depending on your mood,
                            outfit, nails, phone case, holiday, etc.! Just gently squeeze the sides to remove and swap out
                            with another color or design!
                        </p>
                    </div>

                    {/* Buy Now Button */}
                    <div className='w-full flex justify-end'>

                        <button
                            className={`px-12 py-4 rounded-xl mt-4 hover:opacity-90 transition text-sm font-bold  bg-gradient-to-r from-[#75CCEB] to-[#6FB4FF] text-white`}>
                            BUY NOW
                        </button>
                    </div>
                </div>

                {/* Right Side - Image Section */}
                <div className="flex justify-center mt-8 lg:mt-0 w-1/2">
                    <div className="relative w-[35rem] h-[35rem]">
                        <div className="absolute inset-0 bg-white rounded-full p-10 shadow-xl">
                            <Image
                                src={foodOnCircle} // Replace with your image source
                                alt="Agate Phone Grip"
                                className="object-contain"
                            />
                            <Image
                                src={food} // Replace with your image source
                                alt="Agate Phone Grip"
                                className="object-contain relative -top-[77%] w-3/5 left-[18%]"
                            />

                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default BestPrice