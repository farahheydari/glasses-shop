import React from "react";


export default function HomeFixBanner() {
  return (
    <section
      className="h-screen flex items-center justify-center bg-fixed bg-center bg-cover"
      style={{ backgroundImage: "url('https://glasses-shop-1.vercel.app/_next/static/media/1.bbca1b5a.jpg')" }}
    >
      <div className="text-5xl  font-bold text-white p-6 rounded-lg hidden md:flex justify-between items-center">
      <div className="w-[50%] flex justify-start absolute left-0  mt-20 ">
        <img src="https://glasses-shop-1.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F21.95491167.jpg&w=640&q=75" className="w-[600px]"  alt="" />
      </div>
      <div className="w-[20%] absolute right-50 ">
        <h1 className="leading-20 text-6xl font-normal">STATE ARTISAN SERIES</h1>
        <div className="w-[200px] h-[50px] mt-2.5 bg-amber-50 border flex justify-center items-center border-amber-50 rounded-2xl">
            <h3 className="text-[18px] font-normal text-blue-400">Brows Products</h3>
        </div>
      </div>
      </div>
      {/* md */}
    <div className="text-5xl  font-bold text-white p-6 rounded-lg flex flex-wrap md:hidden justify-between items-center">
      <div className="w-full ">
        <h1 className="leading-20 text-6xl font-normal">STATE ARTISAN SERIES</h1>
        <div className="w-[200px] h-[50px] mt-2.5 bg-amber-50 border flex justify-center items-center border-amber-50 rounded-2xl">
            <h3 className="text-[18px] font-normal text-blue-400">Brows Products</h3>
        </div>
      </div>
      </div>
    </section>
  );
}
