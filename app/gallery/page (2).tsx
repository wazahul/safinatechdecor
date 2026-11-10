"use client";
// app/gallery/page.tsx 
import { useState } from "react";import Link from 'next/link';import GalleryGrid from '@/components/GalleryGrid';import { companyConfig } from '@/config/company'// Categories setupconst categories = ["All", "Video", "Living Room", "Bedroom", "Kitchen", "Office"];// Project Data (Including your YouTube video)const projects = [

{ id: 1, category: "Office", path: "tech-hub.jpg", title: "Smart Corporate Office" },

{ id: 2, category: "Office", path: "tech-hub.jpg", title: "Executive Cabin" },

{ id: 10, category: "Bedroom", path: "tech-hub.jpg", title: "Minimal Master Suite" },

{ id: 20, category: "Living Room", path: "tech-hub.jpg", title: "Luxury Accent Lounge" },

{ id: 30, category: "Kitchen", path: "tech-hub.jpg", title: "Italian Modular Kitchen" },

];const videoProject = {

id: 100,

category: "Video",

title: "Artistic Interiors & Security Showcase",

videoUrl: "https://www.youtube.com/watch?v=pEagpThpSC0"

};export default function GalleryPage() {

const [activeCategory, setActiveCategory] = useState("All");



// Filter Logic

const showVideo = activeCategory === "All" || activeCategory === "Video";

const filteredProjects = activeCategory === "All"

? projects

: projects.filter(p => p.category === activeCategory);



return (

<div className="w-full bg-white">

<section className="mx-auto flex max-w-7xl flex-col gap-16 px-6 py-24 md:py-32">


{/* --- Header Section --- */}

<div className="flex flex-col items-start justify-between gap-8 border-l-4 border-blue-600 pl-8 md:flex-row md:items-end">

<div className="flex flex-col gap-4">

<span className="text-xs font-black tracking-[0.4em] text-blue-600 uppercase">

{COMPANY.branding.tagline2}

</span>

<h1 className="text-4xl leading-[0.9] font-[1000] tracking-tighter text-slate-900 italic md:text-7xl">

Selected <span className="text-blue-600 not-italic">Works.</span>

</h1>

<p className="max-w-xl text-lg font-medium text-slate-500">

A curated look at how we merge high-end interior architecture with enterprise-grade integrated surveillance technology.

</p>

</div>

<Link href="/contact" className="rounded-2xl bg-slate-950 px-8 py-4 text-xs font-black tracking-[2px] text-white uppercase shadow-xl transition duration-300 hover:scale-105 hover:bg-blue-600 active:scale-95">

Request Similar Designs

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

: "border-slate-100 bg-slate-50 text-slate-400 hover:border-blue-600 hover:text-blue-600"

}`}

>

{cat}

</button>

))}

</div>



{/* --- Featured Video Card (Separate for Layout Integrity) --- */}

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

<span className="rounded-full bg-blue-600 px-5 py-2 font-black tracking-wider text-[10px] text-white uppercase shadow-lg backdrop-blur-md">

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