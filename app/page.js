import Image from "next/image";
import logo from "@/app/assest/logo.svg"
import shop from "@/app/assest/shop.svg"
import food from "@/app/assest/food.png"
import vector from "@/app/assest/Vector.png"
import vector1 from "@/app/assest/Vector1.png"
import front from "@/app/assest/front.svg"
import back from "@/app/assest/back.svg"
import scroll from "@/app/assest/scroll.svg"
import AllProduct from "./components/AllProduct";
import BestPrice from "./components/BestPrice";

export default function Home() {
  return (
    <>
      <div className="min-h-screen overflow-hidden" style={{ background: 'linear-gradient(78.73deg, #01F0FF 5.11%, #0066FF 96.86%)' }}>
        {/* Curve at the bottom */}
        <div className="absolute top-[25%] ">
          <Image src={vector1} alt="bg" className=" w-[1537px]" />
        </div>

        {/* Navbar */}
        <header className="w-full py-4 px-10 flex justify-between items-center z-10">
          <div className="flex items-center">
            <Image src={logo} alt="logo" />
            <div className="text-white text-xl ml-2">Pop Rock Crystal</div>
          </div>
          <div className="flex w-2/5 justify-between">

            <nav className="space-x-16 text-white">
              <a href="#home" className="hover:underline">Home</a>
              <a href="#shop" className="hover:underline">Shop</a>
              <a href="#about" className="hover:underline">About Us</a>
              <a href="#help" className="hover:underline">Help</a>
            </nav>
            <div className="text-white">
              <Image src={shop} alt="shop" />
            </div>
          </div>
        </header>


        {/* hero section  */}
        <div>


          <div className="flex py-16 pb-7">

            {/* Hero Section */}
            <section className=" p-10 z-10 w-3/5">
              <h1 className="text-5xl font-bold text-white mb-4">Welcome to</h1>
              <h2 className="text-6xl font-bold text-white mb-6">Pop Rock Crystal Shop!</h2>
              <p className="mb-8 text-[#31546d] w-1/2">
                Here you will find unique phone accessories, crystals, jewelry, and more.
                Free shipping inside the U.S. and our phone grips come with a limited warranty. Enjoy!
              </p>
              <button className="bg-white text-[#317189] py-3 px-9 rounded-[14px] font-semibold shadow-lg hover:bg-gray-200">
                Shop Now
              </button>
            </section>

            {/* Product Carousel */}
            <div className="w-2/5 flex justify-center flex-col">

              <section className="relative w-11/12 flex flex-col items-center bg-white rounded-[50px] drop-shadow-lg py-16 pb-0 space-y-4 z-10">
                <div className="w-full">

                  <span className="bg-[#8A93E5] text-white py-3 px-5 rounded-lg text-sm rounded-tl-none rounded-bl-none text-[16px]" >New Lot</span>
                </div>
                <Image
                  className="w-[70%] h-3/5 object-cover"
                  src={food}
                  alt="Crystal Agate Phone Grip"
                />
                <p className="text-gray-700 text-lg relative top-10">
                  CRYSTAL AGATE PHONE GRIP - <span className="font-bold text-[#317189]">18.99$</span>
                </p>

              </section>

              {/* Pagination */}
              <div className="flex space-x-2 z-10 w-11/12 justify-center items-center pt-5">
                <Image src={back} alt="back" />
                <div className="flex space-x-3">
                  {Array(6).fill(0).map((_, idx) => (
                    <div key={idx} className={`w-3 h-3 rounded-full ${idx === 0 ? 'bg-[#8A93E5]' : 'bg-[#D7DBFF]'}`} />
                  ))}
                </div>
                <Image src={front} alt="front" />
              </div>

            </div>

          </div>


          <div className="text-[#317189] z-30 relative flex justify-center items-center">
            <Image src={scroll} alt="scroll" />
            scroll down
          </div>
        </div>
        {/* All product  */}
        <div className="relative z-10">

          <AllProduct />

        </div>
        {/* style={{ background: 'linear-gradient(78.73deg, #01F0FF 5.11%, #0066FF 96.86%)' }} */}
        <div className="relative z-10 h-[100vh] text-black" >
          <div className="absolute">

            <Image src={vector} alt="bg"  className="w-[1537px]"/>
          </div>
          <BestPrice />

        </div>
      </div>
    </>
  );
}
