'use client';
// components/Navbar.tsx
import React, { useState } from 'react';
import Link from 'next/link';
import { companyConfig } from '@/config/company';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 z-50 w-full border-b border-slate-100 bg-white/80 backdrop-blur-md select-none">
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        <Link href="/" className="flex flex-col items-start leading-tight">
          <span className="text-xl font-bold tracking-tight text-slate-900">
            SAFINA <span className="font-extrabold text-amber-500">TECH-DECOR</span>
          </span>
          <span className="mt-0.5 text-xs font-medium tracking-wide text-slate-500 uppercase">
            Since {companyConfig.foundedYear}
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden items-center gap-8 md:flex">
          <Link href="/" className="text-sm font-medium text-slate-600 transition hover:text-slate-900">Home</Link>
          <Link href="/about" className="text-sm font-medium text-slate-600 transition hover:text-slate-900">About</Link>
          <Link href="/gallery" className="text-sm font-medium text-slate-600 transition hover:text-slate-900">Gallery</Link>
          <Link href="/contact" className="text-sm font-medium text-slate-600 transition hover:text-slate-900">Contact</Link>
          <Link
            href="/contact"
            className="rounded-lg bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition duration-150 hover:bg-slate-800"
          >
            Get a Quote
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden flex flex-col gap-1.5 p-2 focus:outline-none">
          <span className={`h-0.5 w-6 bg-slate-900 transition ${isOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`h-0.5 w-6 bg-slate-900 transition ${isOpen ? 'opacity-0' : ''}`} />
          <span className={`h-0.5 w-4 bg-slate-900 self-end transition ${isOpen ? '-rotate-45 -translate-y-2 w-6' : ''}`} />
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="flex flex-col space-y-4 border-b border-slate-100 bg-white p-6 shadow-xl md:hidden">
          <Link href="/" onClick={() => setIsOpen(false)} className="text-base font-medium text-slate-700 py-1">Home</Link>
          <Link href="/about" onClick={() => setIsOpen(false)} className="text-base font-medium text-slate-700 py-1">About</Link>
          <Link href="/gallery" onClick={() => setIsOpen(false)} className="text-base font-medium text-slate-700 py-1">Gallery</Link>
          <Link href="/contact" onClick={() => setIsOpen(false)} className="text-base font-medium text-slate-700 py-1">Contact</Link>
          <Link
            href="/contact"
            onClick={() => setIsOpen(false)}
            className="bg-slate-900 text-white text-center font-bold px-4 py-3 rounded-xl hover:bg-slate-800 transition"
          >
            Get a Quote
          </Link>
        </div>
      )}
    </header>
  );
}