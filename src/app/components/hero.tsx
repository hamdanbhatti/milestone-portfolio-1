"use client";
import React from "react";
import Typewriter from "typewriter-effect";
import Image from "next/image";
import Link from "next/link";
const Hero = () => {
   return (
      <section>
         <section className="text-gray-600 body-font">
            <div className="container mx-auto flex px-5 py-1 md:flex-row flex-col items-center">
               <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                  <h1 className="title-font sm:text-4xl text-3xl mb-8 font-medium text-gray-900">
                     Hi,
                  </h1>
                  <h1 className="title-font sm:text-4xl text-3xl mb-8 font-medium text-gray-900">
                     I&apos;m 
                     <span className="text-indigo-600 font-bold hover:text-indigo-800 transition-colors duration-300">
                         Hamdan Bhatti
                     </span>
                     <br className="hidden lg:inline-block" />
                     <br className="lg:hidden" />
                     <Typewriter
                        options={{
                           strings: ["WEB DEVELOPER", "FRONTEND DEVELOPER", "REACT DEVELOPER"],
                           autoStart: true,
                           loop: true,
                           wrapperClassName: "text-black",
                        }}
                     />
                  </h1>
                  <p className="mb-8 leading-tight text-lg md:text-xl">
                     I am a passionate web developer with a strong foundation in front-end
                     technologies. I am proficient in HTML, CSS, JavaScript, and React.js. I am
                     always eager to learn new technologies and improve my skills. I am also a team
                     player and I enjoy working on challenging projects.
                  </p>
                  <div className="flex justify-center">
                     <Link href={"/contact"}>
                        <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                           Hire Me
                        </button>
                     </Link>
                  </div>
               </div>
               <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                  <Image
                     className="object-cover object-center rounded-full"
                     alt="hero"
                     src="/images/hero-img.jpg"
                     width={600}
                     height={600}
                  />
               </div>
            </div>
         </section>
      </section>
   );
};

export default Hero;
