// app/about/page.tsx
import { companyConfig } from '@/config/company'; 
import Link from 'next/link';
export default function AboutPage() {
  return (
    <div className="flex w-full flex-col select-none">
      <section className="border-b border-slate-100 bg-white py-24">
        <div className="mx-auto flex max-w-4xl flex-col gap-8 px-6">
          <span className="text-xs font-bold tracking-widest text-amber-500 uppercase">Our Story & Legacy</span>
          <h1 className="text-4xl leading-[1.08] font-black tracking-tight text-slate-900 md:text-6xl">
            Setting the Standard Since {companyConfig.foundedYear}.
          </h1>
          <p className="text-lg leading-relaxed font-medium text-slate-600">
            For over two decades, {companyConfig.name} has delivered spatial design excellence and digital physical protection.
          </p>

          <div className="mt-4 border-l-4 border-amber-400 pl-6">
            <blockquote className="text-base font-medium text-slate-700 italic">
              "We believe that real aesthetic luxury doesn't just look visually breathtaking—it is fundamentally organized, safe, and highly functional."
            </blockquote>
          </div>

          <div className="mt-8 flex flex-col gap-6 text-base leading-relaxed font-normal text-slate-600 select-none">
            <p>
              Under the direct vision and technical execution of {companyConfig.owner}, the firm specializes in end-to-end site developments. Our carpentry, civil construction, and customized furniture are carefully planned alongside modern structured cabling and digital physical access control systems.
            </p>
            <p>
              We operate exclusively across Mumbai, Thane, and Navi Mumbai, focusing on luxury, efficiency, and complete structural integration. From corporate headquarters to custom residential spaces, our team brings exceptional execution to every single layout.
            </p>
          </div>

          <div className="mt-8 flex flex-col justify-between gap-6 border-t border-slate-100 pt-8 sm:flex-row sm:items-center">
            <div className="flex flex-col">
              <span className="text-xs font-bold tracking-widest text-slate-400 uppercase">Technical Lead</span>
              <span className="mt-0.5 text-base font-extrabold text-slate-900">{companyConfig.owner}</span>
            </div>
            <Link href="/contact" className="rounded-xl bg-slate-900 px-6 py-3.5 text-center text-sm font-bold text-white shadow-md transition duration-150 hover:bg-slate-800">
              Work With Our Team
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}               

