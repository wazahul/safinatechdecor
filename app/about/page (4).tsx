
// app/about/page.tsx
import { companyConfig } from '@/config/company';
import Link from 'next/link';

export default function AboutPage() {
  return (
    <div className="flex w-full flex-col">
      <section className="bg-white py-24">
        <div className="mx-auto max-w-4xl px-6">
          <span className="text-xs font-bold tracking-widest text-amber-500 uppercase">Our Story & Legacy</span>
          <h1 className="mt-6 text-4xl font-black tracking-tight text-slate-900 md:text-6xl">
            Setting the Standard Since {companyConfig.foundedYear}.
          </h1>
          
          <div className="mt-12 border-l-4 border-amber-400 pl-8 italic">
            <p className="text-lg font-medium text-slate-700">
              "Real aesthetic luxury doesn't just look visually breathtaking—it is fundamentally organized, safe, and highly functional."
            </p>
          </div>

          <div className="mt-12 space-y-6 text-lg text-slate-600">
            <p>
              Under the vision of {companyConfig.owner}, we specialize in end-to-end site developments. Our carpentry and civil construction are planned alongside modern structured cabling and digital security.
            </p>
            <p>
              We operate exclusively across Mumbai, focusing on luxury, efficiency, and complete structural integration.
            </p>
          </div>

          <div className="mt-16 flex flex-col items-center justify-between gap-8 border-t border-slate-100 pt-10 sm:flex-row">
            <div>
              <span className="font-bold tracking-widest text-[10px] text-slate-400 uppercase">Technical Lead</span>
              <p className="text-xl font-black text-slate-900">{companyConfig.owner}</p>
            </div>
            <Link href="/contact" className="rounded-xl bg-slate-900 px-8 py-4 font-bold text-white shadow-lg transition hover:bg-amber-600">
              Work With Our Team
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}