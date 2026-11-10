// app/page.tsx
import Link from 'next/link';
import { companyConfig } from '@/config/company';
import LeadForm from '@/components/LeadForm';

export default function Home() {
  return (
    <div className="flex w-full flex-col select-none">
      {/* Hero Section */}
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
              Elevating residential & commercial spaces across Mumbai. Bespoke aesthetics seamlessly engineered with high-definition digital security infrastructure.
            </p>
            <div className="mt-4 flex w-full flex-col gap-4 sm:w-auto sm:flex-row">
              <Link href="/contact" className="rounded-xl bg-slate-900 px-7 py-4 text-center font-bold text-white shadow-xl transition hover:bg-slate-800">
                Get Your Proposal
              </Link>
              <Link href="/gallery" className="rounded-xl border border-slate-200 bg-white px-7 py-4 text-center font-bold text-slate-700 transition hover:border-slate-300">
                Browse Projects
              </Link>
            </div>
          </div>
          
          {/* Hero Feature Card */}
          <div className="relative hidden lg:col-span-5 lg:flex">
            <div className="relative flex h-[480px] w-full flex-col justify-between overflow-hidden rounded-3xl border border-slate-100 bg-white p-8 shadow-2xl">
              <div className="flex flex-col gap-2">
                <span className="text-xs font-bold tracking-wider text-amber-500 uppercase">Expert Integration</span>
                <h3 className="text-2xl font-black text-slate-900">Elite Technical Architectural Firm</h3>
              </div>
              <p className="text-sm leading-relaxed text-slate-500">
                Delivering transformations by merging classic carpentry, civil works, and secure access systems into a single responsive project flow.
              </p>
              <div className="rounded-2xl border border-slate-100 bg-slate-50 p-4">
                <p className="font-bold tracking-widest text-[10px] text-slate-400 uppercase">Core Focus</p>
                <p className="text-sm font-bold text-slate-700">Mumbai • Thane • Navi Mumbai</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-16 flex flex-col gap-4">
            <span className="text-xs font-bold tracking-widest text-amber-500 uppercase">What we do</span>
            <h2 className="text-3xl font-black text-slate-900 md:text-5xl">Precision Services</h2>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {companyConfig.services.map((service) => (
              <div key={service.id} className="group rounded-2xl border border-slate-100 bg-slate-50 p-8 transition hover:bg-white hover:shadow-2xl">
                <span className="font-bold tracking-widest text-[10px] text-amber-500 uppercase">{service.category}</span>
                <h3 className="mt-2 text-xl font-bold text-slate-900 group-hover:text-amber-500">{service.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-500">{service.shortDesc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}