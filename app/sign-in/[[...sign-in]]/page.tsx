import React from 'react';
import Link from 'next/link';
import { FaArrowCircleLeft } from "react-icons/fa";
import { SignIn } from "@clerk/nextjs"

const SignInPage = () => {
  return (
    <div className="flex min-h-screen bg-white font-sans">
      
      {/* 1. Left Side: Visuals (Blue Section) */}
      <div className="hidden lg:flex w-1/2 bg-[#1596C4] dark:bg-[#051233] relative flex-col items-center justify-center p-12 text-white">
        {/* Back Button */}
        <Link href="/" className="absolute top-10 left-10 flex items-center gap-2 hover:opacity-80 transition-opacity">
          <FaArrowCircleLeft size={24} />
          <span className="text-xl font-bold">Back</span>
        </Link>

        {/* Content */}
        <div className="text-center z-10">
          <h1 className="text-6xl font-black mb-4 leading-tight">
            Build Faster.<br />Learn Smarter.
          </h1>
          
          {/* Illustration Placeholder (ඔබේ Figma එකේ ඇති රූපය මෙතනට image එකක් ලෙස එක් කළ හැක) */}
          <div className="mt-12 relative">
            
             {/* Avatars */}
             <div className="flex -space-x-4 justify-center mt-8">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-12 h-12 rounded-full border-2 border-white bg-slate-200 overflow-hidden">
                    <img src={`https://i.pravatar.cc/150?u=${i}`} alt="user" />
                  </div>
                ))}
             </div>
             </div>
          </div>
        </div>

      <div className="w-full lg:w-1/2 flex items-center justify-center py-20 px-12 text-2xl">
      <SignIn />
       </div>       
       </div>
  );
};

export default SignInPage;