// app/page.tsx
import Link from 'next/link';
import { companyConfig } from '@/config/company';
import LeadForm from '@/components/LeadForm';
import GalleryGrid from '@/components/GalleryGrid';

export default function Home() {
  return (
    <div className="flex w-full flex-col select-none">
      {/* 1. Hero Section */}
      <section className="relative flex min-h-[85vh] items-center border-b border-slate-100 bg-gradient-to-br from-slate-50 via-white to-amber-50/20">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 px-6 py-20 lg:grid-cols-12">
          <div className="flex flex-col items-start gap-6 lg:col-span-7">
            <span className="inline-block rounded-full border border-amber-100 bg-amber-50 px-4 py-1.5 text-xs font-bold tracking-wider text-amber-600 uppercase">
              ESTABLISHED IN {companyConfig.foundedYear}
            </span>
            <h1 className="text-4xl leading-[1.08] font-black tracking-tight text-slate-950 md:text-6xl">
              Premium Craftsmanship meets <span className="text-amber-500">Smart Technology</span>.
            </h1>
            <p className="max-w-2xl text-base leading-relaxed font-medium text-slate-600 md:text-lg">
              Elevating residential & commercial spaces across Mumbai. High-end bespoke aesthetics seamlessly engineered with high-definition digital security infrastructure.
            </p>
            <div className="mt-4 flex w-full flex-col gap-4 sm:w-auto sm:flex-row">
              <Link href="/contact" className="rounded-xl bg-slate-900 px-7 py-4 text-center font-bold tracking-tight text-white shadow-xl transition duration-200 hover:bg-slate-800">
                Get Your Proposal
              </Link>
              <Link href="/gallery" className="rounded-xl border border-slate-200 bg-white px-7 py-4 text-center font-bold tracking-tight text-slate-700 transition duration-200 hover:border-slate-300">
                Browse Projects
              </Link>
            </div>
          </div>
          <div className="relative hidden items-center justify-center select-none lg:col-span-5 lg:flex">
            <div className="relative flex h-[480px] w-[420px] flex-col justify-between overflow-hidden rounded-3xl border border-slate-100 bg-slate-50 bg-white p-6 shadow-2xl select-none">
              <div className="absolute top-0 right-0 rounded-bl-3xl border-b border-l border-slate-100 bg-amber-50 p-4">
                <svg className="h-8 w-8 fill-none text-amber-500" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </div>
              <div className="flex flex-col gap-2">
                <span className="text-xs font-bold tracking-wider text-amber-500 uppercase">Expert Integration</span>
                <h3 className="text-2xl leading-tight font-black tracking-tight text-slate-900">Elite Technical Architectural Firm</h3>
              </div>
              <p className="text-sm leading-relaxed font-medium text-slate-500 select-none">
                Delivering complete transformations by merging classic carpentry, civil works, architectural layout solutions, and secure access systems into a single responsive project flow.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Services Section */}
      <section className="border-b border-slate-100 bg-white py-24">
        <div className="mx-auto flex max-w-7xl flex-col gap-16 px-6">
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
            <div className="flex max-w-xl flex-col gap-4">
              <span className="text-xs font-bold tracking-wider text-amber-500 uppercase">Comprehensive Range</span>
              <h2 className="text-3xl leading-tight font-black tracking-tight text-slate-900 md:text-5xl">Precision Services</h2>
            </div>
            <Link href="/contact" className="text-sm font-bold text-slate-800 underline underline-offset-4 transition hover:text-amber-500">
              Explore custom solutions &rarr;
            </Link>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {companyConfig.services.map((service) => (
              <div key={service.id} className="group flex flex-col gap-6 rounded-2xl border border-slate-100 bg-slate-50 p-8 transition-all duration-300 hover:border-slate-200 hover:bg-white hover:shadow-2xl">
                <div className="flex flex-col gap-3">
                  <span className="text-xs font-bold tracking-widest text-amber-500 uppercase">{service.category}</span>
                  <h3 className="text-xl leading-snug font-bold tracking-tight text-slate-950 transition duration-150 group-hover:text-amber-500">
                    {service.title}
                  </h3>
                  <p className="text-sm leading-relaxed font-medium text-slate-500 select-none">
                    {service.shortDesc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Lead Conversion Section */}
      <section className="bg-slate-50 py-24">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 px-6 lg:grid-cols-12">
          <div className="flex flex-col gap-6 lg:col-span-6">
            <span className="text-xs font-bold tracking-wider text-amber-500 uppercase">Fast-track Quotes</span>
            <h2 className="text-3xl leading-[1.12] font-black tracking-tight text-slate-950 md:text-5xl">Let’s transform your infrastructure</h2>
            <p className="max-w-lg text-base leading-relaxed font-medium text-slate-600">
              Partner with an experienced team directly. Give us a few specifics about your home, workspace, or layout project, and we will contact you immediately via WhatsApp.
            </p>
            <div className="mt-4 flex flex-col gap-4 text-sm font-semibold text-slate-700">
              <div className="flex items-center gap-3">
                <span className="flex h-6 w-6 items-center justify-center rounded-full border border-amber-100 bg-amber-50 text-xs font-bold text-amber-500 select-none">✓</span>
                <span>Direct on-site estimation across the region</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="flex h-6 w-6 items-center justify-center rounded-full border border-amber-100 bg-amber-50 text-xs font-bold text-amber-500 select-none">✓</span>
                <span>Highly trained and trusted engineering teams</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="flex h-6 w-6 items-center justify-center rounded-full border border-amber-100 bg-amber-50 text-xs font-bold text-amber-500 select-none">✓</span>
                <span>Fast response times and clear execution paths</span>
              </div>
            </div>
          </div>
          <div className="lg:col-span-6">
            <LeadForm />
          </div>
        </div>
      </section>
    </div>
  );
}