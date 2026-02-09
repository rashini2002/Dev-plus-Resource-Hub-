
"use client";
import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { useParams } from 'next/navigation';
import { FaExternalLinkAlt, FaStar, FaPlus } from "react-icons/fa";
import AddResourceForm from '../../add-resource/page'; 
import { getResourcesByCategory } from '@/lib/actions/resource.action';



const frontendResources = [
  { id: 1, name: "React.js", desc: "The most popular library for building web interfaces.", link: "https://react.dev", tag: "Library" },
  { id: 2, name: "Next.js 15", desc: "The React framework for the web, now with better performance.", link: "https://nextjs.org", tag: "Framework" },
  { id: 3, name: "Tailwind CSS", desc: "A utility-first CSS framework for rapid UI development.", link: "https://tailwindcss.com", tag: "CSS" },
  { id: 4, name: "Framer Motion", desc: "A production-ready motion library for React animations.", link: "https://framer.com/motion", tag: "Animation" },
  { id: 5, name: "Chakra UI", desc: "A simple, modular and accessible component library.", link: "https://chakra-ui.com", tag: "UI Library" },
  { id: 6, name: "Vite", desc: "Next Generation Frontend Tooling.", link: "https://vitejs.dev", tag: "Build Tool" },
  { id: 7, name: "ESLint", desc: "Find and fix problems in your JavaScript code.", link: "https://eslint.org", tag: "Linter" },
  { id: 8, name: "Prettier", desc: "An opinionated code formatter.", link: "https://prettier.io", tag: "Formatter" }, 
  { id: 9, name: "Storybook", desc: "Build UI components and pages in isolation.", link: "https://storybook.js.org", tag: "UI Development" },
  { id: 10, name: "React Query", desc: "Hooks for fetching, caching and updating asynchronous data in React.", link: "https://tanstack.com/query/v4", tag: "Data Fetching" },
  { id: 11, name: "Jest", desc: "Delightful JavaScript Testing Framework with a focus on simplicity.", link: "https://jestjs.io", tag: "Testing" },
];
const backendResources = [
  { id: 1, name: "Node.js", desc: "JavaScript runtime built on Chrome's V8 JavaScript engine.", link: "https://nodejs.org", tag: "Runtime" },
  { id: 2, name: "Express.js", desc: "Fast, unopinionated, minimalist web framework for Node.js.", link: "https://expressjs.com", tag: "Framework" },
  { id: 3, name: "Django", desc: "The web framework for perfectionists with deadlines.", link: "https://www.djangoproject.com", tag: "Framework" },
  { id: 4, name: "Flask", desc: "A lightweight WSGI web application framework in Python.", link: "https://flask.palletsprojects.com", tag: "Framework" },
  { id: 5, name: "Ruby on Rails", desc: "A web-application framework that includes everything needed to create database-backed web applications.", link: "https://rubyonrails.org", tag: "Framework" },
  { id: 6, name: "Spring Boot", desc: "Create stand-alone, production-grade Spring based Applications.", link: "https://spring.io/projects/spring-boot", tag: "Framework" },
  { id: 7, name: "Laravel", desc: "A PHP framework for web artisans.", link: "https://laravel.com", tag: "Framework" },
  { id: 8, name: "ASP.NET Core", desc: "A cross-platform framework for building modern, cloud-based, internet-connected applications.", link: "https://dotnet.microsoft.com/apps/aspnet", tag: "Framework" },
  { id: 9, name: "GraphQL", desc: "A query language for your API.", link: "https://graphql.org", tag: "API" },
  { id: 10, name: "PostgreSQL", desc: "The world's most advanced open source relational database.", link: "https://www.postgresql.org", tag: "Database" },
  { id: 11, name: "MongoDB", desc: "The database for modern applications.", link: "https://www.mongodb.com", tag: "Database" },
];



export default function CategoryDetailPage() {
  const params = useParams();
  const category = (params?.category as string) || "";

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [dbResources, setDbResources] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchResources = async () => {
      try {
        const data = await getResourcesByCategory(category);
        setDbResources(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    if (category) fetchResources();
  }, [category]);

  const staticResources = category.toLowerCase() === "backend" 
    ? backendResources 
    : frontendResources;

  
  const combinedResources = [...dbResources, ...staticResources];

  return (
    <main className="relative min-h-screen bg-white dark:bg-[#051233] overflow-hidden">
      
      {/* Floating Add Button */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsModalOpen(true)}
        className="fixed bottom-10 right-10 z-50 bg-[#1596C4] text-white p-4 rounded-full shadow-lg flex items-center gap-2 font-bold"
      >
        <FaPlus /> <span className="hidden md:inline">Add Resource</span>
      </motion.button>

      <section className="relative z-10 py-20 px-6 max-w-6xl mx-auto">
        <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} className="mb-12">
          <h1 className="text-4xl md:text-5xl font-black text-[#020617] dark:text-white capitalize mb-4">
            {category} <span className="text-[#1596C4]">Resources</span>
          </h1>
          <p className="text-slate-400">Handpicked tools for your {category} journey.</p>
        </motion.div>

        {loading ? (
          <p className="text-slate-400">Loading resources...</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {combinedResources.map((res: any, index: number) => (
              <motion.div
                key={res._id || res.id || index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                className="dark:bg-white/5 bg-blue-50 border border-white/10 p-6 rounded-2xl flex flex-col justify-between group"
              >
                <div>
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-[10px] font-bold bg-[#1596C4]/20 text-[#1596C4] px-2 py-1 rounded-md uppercase">
                      {res.tag || category}
                    </span>
                     <button 
    className="flex items-center gap-1 text-slate-400 hover:text-yellow-500 transition-colors text-sm font-medium"
    onClick={() => handleSave(res._id)}
  >
    <FaStar size={14} /> Save
  </button>
                  </div>
                  {/* Database සහ Static field names දෙකම පරීක්ෂා කිරීම */}
                  <h3 className="text-xl font-bold text-black dark:text-white mb-2">
                    {res.title || res.name}
                  </h3>
                  <p className="text-slate-400 text-sm leading-relaxed mb-6">
                    {res.description || res.desc}
                  </p>
                </div>

                <a 
                  href={res.url || res.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-[#1596C4] font-bold text-sm hover:underline"
                >
                  Visit Website <FaExternalLinkAlt size={12} />
                </a>

               
              </motion.div>
            ))}
          </div>
        )}
      </section>

      {/* --- MODAL --- */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              onClick={() => setIsModalOpen(false)} className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
            
            <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.9, opacity: 0 }}
              className="relative bg-white dark:bg-[#0f172a] p-8 rounded-3xl w-full max-w-md shadow-2xl border border-white/10"
            >
              <AddResourceForm category={category} onSuccess={() => setIsModalOpen(false)} />
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </main>
  );
}

