{/* Hero Section */ }
<section className="text-center py-10 z-10">
    <h1 className="text-5xl font-bold text-white mb-4">Welcome to</h1>
    <h2 className="text-5xl font-bold text-white mb-6">Pop Rock Crystal Shop!</h2>
    <p className="text-white mb-8">
        Here you will find unique phone accessories, crystals, jewelry, and more.
        Free shipping inside the U.S. and our phone grips come with a limited warranty. Enjoy!
    </p>
    <button className="bg-white text-blue-700 py-2 px-6 rounded-full shadow-lg hover:bg-gray-200">
        Shop Now
    </button>
</section>

{/* Product Carousel */ }
<section className="relative w-4/5 flex flex-col items-center bg-white rounded-lg shadow-lg p-8 space-y-4 z-10">
    <span className="bg-purple-600 text-white py-1 px-4 rounded-full text-sm">New Lot</span>
    <img
        className="w-48 h-48 object-cover rounded-full shadow-md"
        src="https://example.com/crystal-image.jpg"
        alt="Crystal Agate Phone Grip"
    />
    <p className="text-gray-700 text-lg">
        CRYSTAL AGATE PHONE GRIP - <span className="font-bold text-blue-600">18.99$</span>
    </p>

    {/* Pagination */}
    <div className="flex space-x-2">
        <button className="w-8 h-8 flex items-center justify-center bg-gray-200 rounded-full">
            &lt;
        </button>
        <div className="flex space-x-1">
            {Array(5).fill(0).map((_, idx) => (
                <div key={idx} className={`w-3 h-3 rounded-full ${idx === 0 ? 'bg-blue-600' : 'bg-gray-400'}`} />
            ))}
        </div>
        <button className="w-8 h-8 flex items-center justify-center bg-gray-200 rounded-full">
            &gt;
        </button>
    </div>
</section>


 