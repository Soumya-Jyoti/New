import React from 'react';
import { Image } from 'react-bootstrap';


const MainBestsellers = () => {
    const products = [
      {
        title: "Wool Yarn",
        price: "₹142.00/kg",
        img: "/images/Yarn1.jpg",
      },
      {
        title: "Linen Yarn",
        price: "₹256.00/kg",
        img: "/images/Yarn2.jpg",
      },
      {
        title: "Cotton Yarn",
        price: "₹327.00/kg",
        img: "/images/Yarn3.jpg",
      },
      {
        title: "Polyster Yarn",
        price: "₹169.00/kg",
        img: "/images/Yarn4.jpg",
      },
    ];
  
    return (
      <section className=" px-4 bg-white">
        {/* Section Header */}
        <div className="text-center mb-14">
          <p className="text-purple-800 text-lg font-bold mb-3 tracking-widest uppercase">
            Yarn Store
          </p>
          <h2 className="text-3xl lg:text-5xl font-semibold text-black">
            Our Bestsellers
          </h2>
        </div>
  
        {/* Product Grid */}
        <div className="max-w-screen-xl mx-auto grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {products.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center p-4 rounded-2xl border-1 border-grey-50 shadow-lg bg-white"
            >
              <div className="w-60 h-60 rounded-2xl overflow-hidden">
                <Image
                  src={item.img}
                  alt={item.title}
                  width={240}
                  height={240}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mt-6">
                {item.title}
              </h3>
              <p className="text-gray-600 mt-1">{item.price}</p>
              <a
                href="#"
                className="text-purple-800 text-lg font-bold mt-2 hover:underline"
              >
                View
              </a>
            </div>
          ))}
        </div>
      </section>
    );
  };
  
  export default MainBestsellers;