// components/Header.tsx
import React from 'react';interface HeaderProps {
  title: string;
  subtitle?: string;
}export default function Header({ title, subtitle }: HeaderProps) {
  return (
    <div className="mb-12 w-full border-b border-slate-100 bg-slate-50 py-12 select-none">
      <div className="mx-auto flex max-w-7xl flex-col gap-2 px-6">
        <h1 className="text-3xl leading-tight font-black tracking-tight text-slate-900 md:text-4xl">
          {title}
        </h1>
        {subtitle && (
          <p className="max-w-2xl text-sm leading-relaxed font-medium text-slate-500 md:text-base">
            {subtitle}
          </p>
        )}
      </div>
    </div>
  );
}                                                            