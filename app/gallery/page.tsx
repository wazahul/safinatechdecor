"use client";

import { useState } from "react";
import Link from 'next/link';
import GalleryGrid from '@/components/GalleryGrid';
import { companyConfig } from '@/config/company';

const categories = ["All", "Video", "Living Room", "Bedroom", "Kitchen", "Office"];

// Video Data (YouTube)
const videoProject = {
  id: 100,
  category: "Video",
  title: "Artistic Interiors & Security Showcase",
  videoUrl: "https://www.youtube.com/watch?v=pEagpThpSC0",

};

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  /**
   * CENTRALIZED CLOUDINARY LOGIC:
   * Is logic mein hum companyConfig.portfolio se Public IDs (like 'service-tech.jpg')
   * uthate hain aur optimized Cloudinary URL generate karte hain.
   */
  const optimizedProjects = companyConfig.portfolio.map(project => ({
    ...project,
    // fullPath generate karne ke liye baseUrl aur transformations ka use
   // fullPath: `${companyConfig.cloudinary.baseUrl}/q_auto,f_auto/${project.path}`
   fullPath: `${companyConfig.cloudinary.baseUrl}/q_auto,f_auto,w_600,c_fill,g_auto/${project.path}`
  }));

  // Filter Logic
  const showVideo = activeCategory === "All" || activeCategory === "Video";
  const filteredProjects = activeCategory === "All" 
    ? optimizedProjects 
    : optimizedProjects.filter(p => p.category === activeCategory);

  return (
    <div className="w-full bg-white selection:bg-amber-500 selection:text-white">
      <section className="mx-auto flex max-w-7xl flex-col gap-16 px-6 py-24 md:py-32">
        
        {/* --- Header Section --- */}
        <div className="flex flex-col items-start justify-between gap-8 border-l-4 border-amber-500 pl-8 md:flex-row md:items-end">
          <div className="flex flex-col gap-4">
            <span className="text-xs font-black tracking-[0.4em] text-amber-600 uppercase">
              {companyConfig.tagline}
            </span>
            <h1 className="text-4xl leading-[0.9] font-[1000] tracking-tighter text-slate-900 italic md:text-7xl">
              Selected <span className="text-amber-500 not-italic">Works.</span>
            </h1>
            <p className="max-w-xl text-lg font-medium text-slate-500">
              A curated look at how we merge high-end interior architecture with enterprise-grade integrated surveillance technology.
            </p>
          </div>
          <Link 
            href="/contact" 
            className="rounded-2xl bg-slate-950 px-8 py-4 text-xs font-black tracking-[2px] text-white uppercase shadow-xl transition duration-300 hover:scale-105 hover:bg-amber-600 active:scale-95"
          >
            Request Quote
          </Link>
        </div>

        {/* --- Category Filters --- */}
        <div className="flex flex-wrap justify-start gap-3 md:gap-4">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-8 py-3 rounded-full text-[11px] font-black tracking-[2px] uppercase border transition-all duration-300 ${
                activeCategory === cat 
                ? "bg-slate-950 border-slate-950 text-white shadow-xl scale-105" 
                : "border-slate-100 bg-slate-50 text-slate-400 hover:border-amber-500 hover:text-amber-500"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* --- Featured Video Card --- */}
        {showVideo && (
          <div className="animate-in fade-in zoom-in-95 duration-500">
            <div className="relative aspect-video w-full overflow-hidden rounded-[2.5rem] border border-slate-100 bg-slate-950 shadow-2xl">
              <iframe
                src={`https://www.youtube.com/embed/${videoProject.videoUrl.split('v=')[1]}?rel=0&modestbranding=1`}
                title={videoProject.title}
                className="absolute inset-0 h-full w-full border-0 object-cover"
                allowFullScreen
              />
              <div className="pointer-events-none absolute top-6 left-6 z-10 hidden items-center gap-3 sm:flex">
                <span className="rounded-full bg-amber-600 px-5 py-2 font-black tracking-wider text-[10px] text-white uppercase shadow-lg backdrop-blur-md">
                  Video Showcase
                </span>
              </div>
            </div>
          </div>
        )}

        {/* --- Image Grid --- */}
        <div className="min-h-[400px]">
          <GalleryGrid projects={filteredProjects} />
        </div>
      </section>
    </div>
  );
}