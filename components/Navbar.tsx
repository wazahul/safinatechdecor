'use client';
// components/Navbar.tsx
import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation'; // Page location check karne ke liye
import { companyConfig } from '@/config/company';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname(); // Current path (e.g., "/gallery")

  // Navigation Links array for cleaner code
  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <header className="fixed top-0 left-0 z-50 w-full border-b border-slate-100 bg-white/80 backdrop-blur-md select-none">
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        
        {/* Logo Section */}
        <Link href="/" className="group flex flex-col items-start leading-tight">
          <span className="text-xl font-bold tracking-tight text-slate-900 transition-colors group-hover:text-amber-600">
            SAFINA <span className="font-extrabold text-amber-500 group-hover:text-slate-900">TECH-DECOR</span>
          </span>
          <span className="mt-0.5 font-black tracking-widest text-[10px] text-slate-400 uppercase">
            Since {companyConfig.foundedYear}
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden items-center gap-2 md:flex">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`px-4 py-2 text-sm font-bold tracking-tight transition-all duration-200 rounded-full ${
                  isActive 
                    ? "bg-amber-50 text-amber-600" 
                    : "text-slate-600 hover:text-slate-900 hover:bg-slate-50"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
          
          <div className="ml-4 h-6 w-px bg-slate-200" /> {/* Vertical Divider */}
          
          <Link
            href="/contact"
            className="ml-4 rounded-xl bg-slate-900 px-6 py-2.5 text-sm font-bold text-white shadow-lg transition duration-300 hover:bg-amber-600 hover:shadow-amber-100 active:scale-95"
          >
            Get a Quote
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <button 
          onClick={() => setIsOpen(!isOpen)} 
          className="md:hidden flex h-10 w-10 flex-col items-center justify-center gap-1.5 rounded-full bg-slate-50 transition active:scale-90"
        >
          <span className={`h-0.5 w-5 bg-slate-900 transition-transform duration-300 ${isOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`h-0.5 w-5 bg-slate-900 transition-opacity duration-300 ${isOpen ? 'opacity-0' : ''}`} />
          <span className={`h-0.5 w-5 bg-slate-900 transition-transform duration-300 ${isOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      <div 
        className={`absolute top-20 left-0 w-full border-b border-slate-100 bg-white p-6 shadow-2xl md:hidden transition-all duration-300 transform ${
          isOpen ? 'translate-y-0 opacity-100' : '-translate-y-10 opacity-0 pointer-events-none'
        }`}
      >
        <div className="flex flex-col space-y-2">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className={`rounded-xl px-4 py-3 text-base font-bold transition-colors ${
                pathname === link.href 
                  ? "bg-amber-50 text-amber-600" 
                  : "text-slate-700 hover:bg-slate-50"
              }`}
            >
              {link.name}
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={() => setIsOpen(false)}
            className="mt-4 bg-amber-500 text-white text-center font-black py-4 rounded-xl shadow-lg shadow-amber-100 active:scale-95 transition-transform"
          >
            GET A QUOTE
          </Link>
        </div>
      </div>
    </header>
  );
}