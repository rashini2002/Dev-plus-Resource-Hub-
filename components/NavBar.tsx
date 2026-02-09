"use client";
import { useTheme } from "next-themes";
import { FaMoon ,FaSun } from "react-icons/fa";
import React, { useEffect, useState } from 'react';
import Link from 'next/link'; 
import { VscPulse } from "react-icons/vsc";
import { SignedIn, SignedOut, UserButton } from '@clerk/nextjs';


const Navbar = () => {
  const ThemeToggle = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();


  useEffect(() => {
  setMounted(true);
}, []);
  if (!mounted) return null;

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-all border border-white/20"
      aria-label="Toggle Theme"
    >
      {theme === "dark" ? (
        <FaSun className="text-yellow-400" size={20} />
      ) : (
        <FaMoon className="text-white" size={20} />
      )}
    </button>
  );
};

  return (
    <nav className="flex items-center justify-between px-10 py-6 bg-[#1596C4] dark:bg-[#051233] text-white sticky top-0 z-50">
      {/* Logo Section */}
      
     <Link href="/" className="flex items-center gap-3 cursor-pointer">
        <div className="bg-white/20 p-2 rounded-lg backdrop-blur-sm">
            <VscPulse size={28} className="text-white" />
        </div>
        <span className="text-2xl font-bold tracking-tight">DevPulse</span>
      </Link>

      {/* Navigation Links */}
      <div className="flex items-center gap-10">
        <Link href="/" className="text-lg font-medium hover:text-blue-100 transition-colors">
          Home
        </Link>
        
        {/* මෙන්න මෙතන තමයි Explore ලින්ක් එක සම්බන්ධ කරන්නේ */}
        <Link href="/explore" className="text-lg font-medium hover:text-blue-100 transition-colors">
          Explore
        </Link>

         <Link href="/dashboard" className="text-lg font-medium hover:text-blue-100 transition-colors">
          Dashboard
        </Link>
      </div>
     
      {/* Right Side: Actions */}
      <div className="flex items-center gap-6">
        {/* Dark Mode Toggle Component එක මෙතැනට */}
        <ThemeToggle />
        </div>

     <SignedIn>
       <UserButton />
      </SignedIn>

      {/* Right Side: Actions */}
      <div className="flex items-center gap-5">
        <SignedOut>
          <Link href="/sign-in" className="text-lg font-medium hover:text-blue-100 transition-colors">
            <button className="bg-white text-[#4A90E2] px-10 py-2.5 rounded-full font-bold hover:bg-opacity-90 transition-all">
              Sign in
            </button>
          </Link>
        </SignedOut>

      
      </div>
    </nav>
  );
};

export default Navbar;