"use client";
import { useState } from "react";
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';


export default function Menu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="text-3xl  md:hidden z-50"
      >
        <MenuIcon sx={{ fontSize: 25, color: '#6681b8' }} />
      </button>

      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
        ></div>
      )}

      <div
        className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg z-50 transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between p-4 border-b">
          <h2 className="text-lg font-semibold text-blue-800">menu</h2>
          <button
            onClick={() => setIsOpen(false)}
            className="text-2xl p-1"
          >
            <CloseIcon sx={{ fontSize: 25, color: '#6681b8' }} />
          </button>
        </div>

        {/* لینک‌ها */}
        <ul className="flex flex-col gap-4 p-4">
          <li><a href="/" className="text-gray-700 hover:text-blue-500">Home</a></li>
          <li><a href="/shop" className="text-gray-700 hover:text-blue-500">Shop</a></li>
          <li><a href="/about" className="text-gray-700 hover:text-blue-500">About</a></li>
          <li><a href="/brands" className="text-gray-700 hover:text-blue-500">Brand</a></li>
        </ul>
      </div>
    </>
  );
}
