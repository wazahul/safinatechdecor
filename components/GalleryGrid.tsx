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
      <div style={{ padding: '40px', textAlign: 'center', color: '#94a3b8', backgroundColor: '#f8fafc', borderRadius: '16px', border: '2px dashed #e2e8f0' }}>
        No projects found in this category.
      </div>
    );
  }

  return (
    <div style={{ display: 'grid', gap: '40px', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))' }}>
      {projects.map((item) => (
        <div 
          key={item.id} 
          style={{ display: 'flex', flexDirection: 'column', overflow: 'hidden', borderRadius: '32px', border: '1px solid #f1f5f9', backgroundColor: '#ffffff', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
        >
          {/* 🛠️ FORCE FIX: Inline style ensures height is NEVER 0 */}
          <div 
            style={{ 
              position: 'relative', 
              width: '100%', 
              height: '350px', // Direct height definition
              backgroundColor: '#f1f5f9',
              overflow: 'hidden'
            }}
          >
            <Image
              src={item.fullPath} 
              alt={item.title}
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              style={{ objectFit: 'cover' }}
              className="transition-transform duration-700 ease-in-out hover:scale-110"
              priority={item.id < 3}
            />
          </div>

          <div style={{ padding: '32px', display: 'flex', flexDirection: 'column' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <span style={{ height: '1px', width: '16px', backgroundColor: '#f59e0b' }} />
              <span style={{ fontSize: '10px', fontWeight: '900', textTransform: 'uppercase', letterSpacing: '0.3em', color: '#f59e0b' }}>
                {item.category}
              </span>
            </div>
            <h4 style={{ marginTop: '12px', fontSize: '20px', fontWeight: '700', color: '#0f172a', lineHeight: '1.2' }}>
              {item.title}
            </h4>
          </div>
        </div>
      ))}
    </div>
  );
}