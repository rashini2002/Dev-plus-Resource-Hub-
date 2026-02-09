"use client";
import { useState } from "react";

export default function AddResourceForm({ currentCategory, onSuccess }: { currentCategory: string, onSuccess: () => void }) {
  const [formData, setFormData] = useState({
    name: "", 
    desc: "", 
    link: "", 
    tag: "", 
    category: currentCategory
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const res = await fetch("/api/resources", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    if (res.ok) {
      alert("Resource added successfully!");
      setFormData({ name: "", desc: "", link: "", tag: "", category: "category" });
      onSuccess();
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-blue-100  dark:bg-slate-900 rounded-xl">
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
       <input 
          required
          className="p-3 rounded-lg bg-slate-400 text-white border border-slate-500 focus:border-blue-500 outline-none transition"
          placeholder="Resource Name (e.g. React.js)"
          value={formData.name}
          onChange={(e) => setFormData({...formData, name: e.target.value})}
        />

       {/* Description */}
        <input 
          required
          className="p-3 rounded-lg bg-slate-400 text-white border border-slate-500 focus:border-blue-500 outline-none transition"
          placeholder="Description"
          value={formData.desc}
          onChange={(e) => setFormData({...formData, desc: e.target.value})}
        />
        {/* Tag */}
        <input 
          required
          className="p-3 rounded-lg bg-slate-400 text-white border border-slate-500 focus:border-blue-500 outline-none transition"
          placeholder="Tag (e.g. Library, Framework, UI Tool)"
          value={formData.tag}
          onChange={(e) => setFormData({...formData, tag: e.target.value})}
        />
        {/* Link */}
        <input 
          required
          type="url"
          className="p-3 rounded-lg bg-slate-400 text-white border border-slate-500 focus:border-blue-500 outline-none transition"
          placeholder="Website Link (https://...)"
          value={formData.link}
          onChange={(e) => setFormData({...formData, link: e.target.value})}
        />

        {/* Category Selection */}
        <select 
          className="p-3 rounded-lg bg-slate-400 text-white border border-slate-500 focus:border-blue-500 outline-none transition"
          value={formData.category}
          onChange={(e) => setFormData({...formData, category: e.target.value})}
        >
          <option value="Frontend">Frontend</option>
          <option value="Backend">Backend</option>
          <option value="Fullstack">Fullstack</option>
          <option value="DevOps">DevOps</option>
          <option value="Mobile">Mobile</option>
          <option value="Data Science">Data Science</option>
          
        </select>
        <button type="submit" className="bg-[#1596C4] text-white p-2 rounded-full font-bold">
          Submit Resource
        </button>
      </form>
    </div>
  );
}