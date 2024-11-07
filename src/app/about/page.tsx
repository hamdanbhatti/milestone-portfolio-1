import Image from "next/image";
import React from "react";

const About = () => {
   return (
      <div className="min-h-screen bg-white">
         <div className="container mx-auto px-4 py-16">
            <div className="flex flex-col md:flex-row items-center justify-between gap-12">
               <div className="w-full md:w-1/2 transform hover:scale-105 transition-transform duration-300">
                  <Image
                     src="/images/about.png"
                     alt="about"
                     className="w-full h-auto rounded-2xl shadow-lg"
                     width={500}
                     height={500}
                  />
               </div>

               <div className="w-full md:w-1/2">
                  <h1 className="text-4xl md:text-4xl font-black mb-8 text-indigo-600">
                     About My Web Development Journey
                  </h1>

                  <div className="space-y-6">
                     <p className="text-lg text-gray-700 leading-relaxed">
                     I&apos;m a passionate web developer focused on creating responsive and
                        user-friendly applications. My expertise includes modern technologies like
                        React, Next.js, and Tailwind CSS.
                     </p>

                     <div className="grid grid-cols-1 gap-6">
                        <div className="p-6 bg-gray-50 rounded-xl shadow-md">
                           <h3 className="text-xl font-semibold mb-3 text-gray-800">
                              Frontend Development
                           </h3>
                           <p className="text-gray-600">HTML5, CSS3, JavaScript, React, Next.js</p>
                        </div>

                        <div className="p-6 bg-gray-50 rounded-xl shadow-md">
                           <h3 className="text-xl font-semibold mb-3 text-gray-800">
                              Design Skills
                           </h3>
                           <p className="text-gray-600">Responsive Design, UI/UX, Tailwind CSS</p>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default About;
