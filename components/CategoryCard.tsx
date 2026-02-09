import React from 'react';
import { VscBug } from "react-icons/vsc";
import Link from 'next/link';

interface CategoryCardProps {
  title: string;
  description: string;
  count: number;
}

const CategoryCard = ({ title, description, count }: CategoryCardProps) => {
  return (
    <Link href={`/explore/${title.toLowerCase()}`} className="block">
      
    <div className="w-full max-w-[320px] bg-blue-100 p-8 rounded-xl shadow-sm hover:shadow-lg transition-all relative group cursor-pointer border border-transparent hover:border-blue-300">
      {/* Icon - Top Right */}
      <div className="absolute top-6 right-6 text-slate-800 group-hover:scale-110 transition-transform">
        <VscBug size={28} />
      </div>

      {/* Title */}
      <h3 className="text-3xl font-bold text-slate-900 mb-6">{title}</h3>

      {/* Description */}
      <p className="text-slate-700 leading-relaxed mb-8 min-h-12">
        {description}
      </p>

      {/* Resources Count */}
      <div className="text-[#4A90E2] font-semibold text-lg">
        Resources : {count}
      </div>
    </div>
    </Link>
  );
};

export default CategoryCard;