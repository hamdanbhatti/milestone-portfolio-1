"use client";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
   const [isOpen, setIsOpen] = useState(false);

   return (
      <header className="text-gray-600 body-font sticky w-full top-0 z-50 bg-white/80 backdrop-blur-md shadow-sm">
         <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
            <div className="flex justify-between w-full md:w-auto">
               <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                  <span className="text-indigo-600 ml-3 text-2xl font-bold transition-colors duration-300 cursor-pointer">
                     Hamdan
                  </span>
               </a>
               <button
                  className="md:hidden inline-flex items-center hover:bg-gray-100 p-2 rounded-lg transition-colors duration-300"
                  onClick={() => setIsOpen(!isOpen)}
               >
                  <svg
                     className="w-6 h-6 transition-transform duration-300 ease-in-out"
                     fill="none"
                     stroke="currentColor"
                     viewBox="0 0 24 24"
                  >
                     <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                     />
                  </svg>
               </button>
            </div>

            <nav
               className={`${
                  isOpen ? "flex opacity-100 translate-y-0" : "opacity-0 -translate-y-4 hidden"
               } md:opacity-100 md:translate-y-0 md:flex w-full md:w-auto md:ml-auto flex-col md:flex-row items-center text-base transition-all duration-300 ease-in-out`}
            >
               <Link className="mr-5 relative group py-2 md:py-0 cursor-pointer" href="/">
                  <span className="text-gray-600 hover:text-indigo-600 transition-colors duration-300">
                     Home
                  </span>
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-indigo-600 group-hover:w-full transition-all duration-300"></span>
               </Link>
               <Link className="mr-5 relative group py-2 md:py-0 cursor-pointer" href="/about">
                  <span className="text-gray-600 hover:text-indigo-600 transition-colors duration-300">
                     About
                  </span>
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-indigo-600 group-hover:w-full transition-all duration-300"></span>
               </Link>
               <Link className="mr-5 relative group py-2 md:py-0 cursor-pointer" href={"/contact"}>
                  <span className="text-gray-600 hover:text-indigo-600 transition-colors duration-300">
                     Contact
                  </span>
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300"></span>
               </Link>
               <a
                  href="/cv/Hamdan CV.pdf"
                  download={"Hamdan CV.pdf"}
                  className="inline-flex items-center bg-indigo-600 text-white border-0 py-2 px-4 focus:outline-none hover:bg-indigo-500 rounded-lg text-base mt-4 md:mt-0 transition-colors duration-300"
               >
                  <button className="inline-flex items-center bg-indigo-600 text-white border-0 py-1 px-1 focus:outline-none hover:bg-indigo-500 rounded-lg text-base mt-4 md:mt-0 transition-colors duration-300">
                     Download Cv
                     <svg
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        className="w-4 h-4 ml-1"
                        viewBox="0 0 24 24"
                     >
                        <path d="M5 12h14M12 5l7 7-7 7" />
                     </svg>
                  </button>
               </a>
            </nav>
         </div>
      </header>
   );
}
