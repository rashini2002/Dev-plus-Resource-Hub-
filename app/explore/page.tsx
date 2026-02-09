"use client";
import React from 'react';
import { motion } from 'framer-motion';
import CategoryCard from "../../components/CategoryCard"; // path එක නිවැරදි දැයි බලන්න

// Animation Variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 } // Cards එකින් එක මතු වීමට
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: { 
    opacity: 1, 
    y: 0, 
    scale: 1,
    transition: { type: "spring", stiffness: 100 } 
  }
};

export default function ExplorePage() {
  const disciplines = [
    { title: "Frontend", description: "React, Next.js, Tailwind, HTML, CSS, etc.", count: 24,  },
    { title: "Backend", description: "Node.js, Express, Databases, Python, Go, etc.", count: 18 },
    { title: "UI/UX", description: "Figma, Adobe XD, Design Systems, Typography, etc.", count: 12 },
  ];

  return (
    <main className="min-h-screen bg-white dark:bg-[#051233] transition-colors duration-500">
      <section className="py-20 px-6 max-w-7xl mx-auto text-center">
        
        {/* Section Header */}
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6"
        >
          Discover Tools by Discipline
        </motion.h2>

        {/* Decorative Line */}
        <div className="mb-16">
          <div className="w-24 h-1.5 bg-[#4A90E2] dark:bg-[#b0cae9] mx-auto rounded-full"></div>
        </div>

        {/* Categories Grid with Animation */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 justify-items-center"
        >
          {disciplines.map((item, index) => (
            <motion.div key={index} 
            variants={cardVariants} className="w-full">
              <CategoryCard 
                title={item.title}
                description={item.description}
                count={item.count}
                // icon={item.icon} // ඔබේ CategoryCard එකේ icon එකට props තිබේ නම් මෙය පාවිච්චි කරන්න
              />
            </motion.div>
          ))}
        </motion.div>

      </section>
    </main>
  );
}