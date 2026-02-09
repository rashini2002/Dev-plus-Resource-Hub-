"use client"; 

import React, { useState } from 'react';
import { FaSearch, FaArrowCircleRight } from "react-icons/fa";
import Link from "next/link";
import { motion } from "framer-motion";

const Hero = () => {
  const [query, setQuery] = useState("");
  const [aiResult, setAiResult] = useState(""); // පිළිතුර ගබඩා කිරීමට
  const [loading, setLoading] = useState(false); // Loading state

  const handleSearch = async (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && query.trim() !== "") {
      setLoading(true);
      setAiResult(""); 
      try {
        const res = await fetch("/api/chat", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ message: query }),
        });
        const data = await res.json();
        setAiResult(data.reply); 
        setQuery("");
        
      } catch (error) {
        console.error("Search error:", error);
      } finally {
        setLoading(false);
      }
    }
  };

  return (
    <section className="relative bg-[#1596C4] dark:bg-[#051233] pt-20 pb-32 px-6 transition-colors duration-300 overflow-hidden ">
      
      <div className="max-w-5xl mx-auto text-center relative z-10">
       
        {/* Main Title */}
        <h1 className="text-6xl md:text-8xl font-black text-white mb-4 dark:text-slate-500 tracking-tight">
          Dev<span className="text-slate-900/30  dark:text-[#1596C4]">Pulse</span>
        </h1>

        {/* Subtitle */}
        <p className="text-white text-lg md:text-xl font-medium max-w-2xl mx-auto mb-10 leading-relaxed">
          Knowledge is power, but the right resources are the key to unlocking it.
        </p>

        {/* AI Search Bar */}
        <div className="relative max-w-2xl mx-auto">
          <div className="absolute inset-y-0 left-5 flex items-center pointer-events-none">
            <FaSearch className="text-slate-400" size={20} />
          </div>

          <input
            disabled={loading}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={handleSearch}
          placeholder={loading ? "DevPulse AI is thinking..." : "Ask DevPulse AI..."}
            className="w-full bg-white/90 backdrop-blur-md py-4 pl-14 pr-6 rounded-full text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-4 focus:ring-white/20 shadow-xl text-lg transition-all disabled:opacity-70"
          />
        </div>

        {/* AI පිළිතුර ලස්සනට පෙන්වන කොටස */}
        {aiResult && (
          <div className="mt-8 p-6 bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl text-white text-left max-w-2xl mx-auto animate-in fade-in slide-in-from-bottom-4">
             <p className="font-medium">{aiResult}</p>
          </div>
        )}
      </div>  
    </section>
  );
};    

const GradientMesh = () => {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          x: [0, 100, 0],
          y: [0, 50, 0],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        className="absolute -top-[10%] -left-[10%] w-[60%] h-[60%] bg-blue-400/20 dark:bg-[#1596C4]/10 rounded-full blur-[120px]"
      />
     
      <motion.div
        animate={{
          scale: [1, 1.3, 1],
          x: [0, -80, 0],
          y: [0, -60, 0],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute -bottom-[10%] -right-[10%] w-[60%] h-[60%] bg-cyan-300/20 dark:bg-cyan-900/10 rounded-full blur-[120px]"
      />
    </div>
  );
};

const AboutSection = () => {
  const fadeInVariant = {
    hidden: { opacity: 0, y: 30 },
    visible: (custom: number) => ({
      opacity: 1,
      y: 0,
      transition: { 
        duration: 0.8, 
        delay: custom * 0.2, 
        ease: "easeOut" 
      }
    })
  };
  return (
    <section className=" py-24 bg-white dark:bg-[#3d5386] overflow-hidden text-center px-6 relative">
      <GradientMesh />
     
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        {/* Section Heading */}
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-sm uppercase tracking-[0.3em] text-[#1596C4] dark:text-[#051233] font-bold mb-6"
          >
          Empowering Developers
        </motion.h2>
        </div>
        
        <motion.h3 
          custom={0}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={fadeInVariant}
          className=" max-w-3xl mx-auto text-3xl md:text-4xl font-bold text-slate-900 dark:text-slate-200 mb-8 leading-tight"
        >
          At <span className="text-[#1596C4] dark:text-[#051233]">DevPulse</span>, we believe that great developers are not born—they are built with the right resources.
        </motion.h3>
        
        {/* Description Motion */}
        <motion.p 
          custom={1}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={fadeInVariant}
          className="max-w-3xl mx-auto text-lg text-slate-600 dark:text-slate-100 leading-relaxed mb-12"
        >
          Our platform bridges the gap between complex technologies and simplified learning by curating the best tools and using AI to guide your journey. Whether you are a beginner or a pro, we keep your development pulse beating by bringing the world&apos;s best tech resources right to your fingertips.
        </motion.p>

        {/* Explore Button Motion */}
        <motion.div
          custom={2}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={fadeInVariant}
        >
          <Link href="/explore">
            <button className="group relative inline-flex items-center gap-3 bg-[#1596C4] text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-black dark:bg-[#051233] dark:hover:bg-[#989ca8] transition-all shadow-lg hover:shadow-blue-200">
              Explore More
              <FaArrowCircleRight className="group-hover:translate-x-1 transition-transform" size={20} />
            </button>
          </Link>
        </motion.div>
    </section>
  );
};
export default function HomePage() {
  return (
    <main className="min-h-screen bg-white" >
      <Hero />
      <AboutSection />
    </main>
  );
}