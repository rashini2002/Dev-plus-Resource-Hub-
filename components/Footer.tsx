"use client";
import React from 'react';
import Link from 'next/link';
import { FaGithub, FaLinkedin, FaTwitter, FaDiscord } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="relative bg-[#1596C4] dark:bg-[#051233] border-t border-white/10 pt-16 pb-8 px-6 overflow-hidden">
      {/* පසුබිමට සියුම් ආලෝකයක් */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px  from-transparent via-[#1596C4] to-transparent opacity-50"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          
          {/* Brand Section */}
          <div className="col-span-1 md:col-span-1">
            <h2 className="text-2xl font-black text-white mb-4 dark:text-slate-500">
              Dev<span className="dark:text-[#1596C4] text-slate-900/30">Pulse</span>
            </h2>
            <p className="text-slate-200 dark:text-slate-400 text-sm leading-relaxed">
              Empowering developers with the best-curated resources and AI-driven insights to master the tech world.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold mb-6">Explore</h4>
            <ul className="space-y-4 text-sm text-slate-200 dark:text-slate-400">
              <li><Link href="/explore/frontend" className="hover:text-[#1596C4]  transition-colors">Frontend</Link></li>
              <li><Link href="/explore/backend" className="hover:text-[#1596C4] transition-colors">Backend</Link></li>
              <li><Link href="/explore/uiux" className="hover:text-[#1596C4] transition-colors">UI/UX Design</Link></li>
              <li><Link href="/explore/devops" className="hover:text-[#1596C4] transition-colors">DevOps</Link></li>
            </ul>
          </div>

          {/* Platform */}
          <div>
            <h4 className="text-white font-bold mb-6">Platform</h4>
            <ul className="space-y-4 text-sm text-slate-200 dark:text-slate-400">
              <li><Link href="/dashboard" className="hover:text-[#1596C4] transition-colors">Dashboard</Link></li>
              <li><Link href="/bookmarks" className="hover:text-[#1596C4] transition-colors">My Bookmarks</Link></li>
              <li><Link href="/community" className="hover:text-[#1596C4] transition-colors">Community</Link></li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="text-white font-bold mb-6">Follow Us</h4>
            <div className="flex gap-4">
              <a href="#" className="p-3 bg-white/5 rounded-xl text-white hover:bg-[#1596C4] transition-all"><FaGithub size={20} /></a>
              <a href="#" className="p-3 bg-white/5 rounded-xl text-white hover:bg-[#1596C4] transition-all"><FaDiscord size={20} /></a>
              <a href="#" className="p-3 bg-white/5 rounded-xl text-white hover:bg-[#1596C4] transition-all"><FaTwitter size={20} /></a>
              <a href="#" className="p-3 bg-white/5 rounded-xl text-white hover:bg-[#1596C4] transition-all"><FaLinkedin size={20} /></a>
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="pt-8 border-t border-white/5 text-center">
          <p className="text-slate-500 text-xs">
            © {new Date().getFullYear()} DevPulse. Built for developers by Rashini.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;