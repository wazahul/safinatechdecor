import React from 'react';
import Image from 'next/image';

interface Project {
  id: number;
  category: string;
  fullPath: string;
  title: string;
}

export default function GalleryGrid({ projects }: { projects: Project[] }) {
  if (!projects || projects.length === 0) {
    return (
      <div className="flex h-60 w-full items-center justify-center rounded-3xl border-2 border-dashed border-slate-100 bg-slate-50 text-slate-400">
        <p className="text-sm font-medium">No projects found in this category.</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
      {projects.map((item) => (
        <div 
          key={item.id} 
          className="group flex flex-col overflow-hidden rounded-[2rem] border border-slate-100 bg-white shadow-sm transition-all duration-500 hover:shadow-2xl"
        >
          {/* 🛠️ FORCE HEIGHT FIX: Inline style added to ensure height is never 0 */}
          <div 
            className="relative block w-full overflow-hidden bg-slate-100"
            style={{ position: 'relative', width: '100%', height: '350px' }}
          >
            <Image
              src={item.fullPath} 
              alt={item.title}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              style={{ objectFit: 'cover' }}
              className="transition-transform duration-700 ease-in-out group-hover:scale-110"
              priority={item.id < 3}
            />
          </div>

          <div className="flex flex-col p-8">
            <div className="flex items-center gap-3">
              <span className="h-px w-4 bg-amber-500" />
              <span className="font-black tracking-[0.3em] text-[10px] text-amber-500 uppercase">
                {item.category}
              </span>
            </div>
            <h4 className="mt-3 text-xl leading-tight font-bold tracking-tight text-slate-900">
              {item.title}
            </h4>
          </div>
        </div>
      ))}
    </div>
  );
}