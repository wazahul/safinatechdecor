// app/contact/page.ts
import { companyConfig } from '@/config/company';
import LeadForm from '@/components/LeadForm';
export default function ContactPage() {
  return (
    <div className="w-full bg-white select-none">
      <section className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 px-6 py-24 lg:grid-cols-12">
        <div className="flex flex-col gap-8 lg:col-span-6">
          <div className="flex flex-col gap-4">
            <span className="text-xs font-bold tracking-wider text-amber-500 uppercase">Get a Direct Quote</span>
            <h1 className="text-4xl leading-[1.1] font-black tracking-tight text-slate-950 md:text-6xl">Connect directly with our team</h1>
            <p className="max-w-lg text-base leading-relaxed font-medium text-slate-500 select-none">
              Need immediate technical assistance or specialized planning? Contact our team directly via mobile, email, or our quick message form.
            </p>
          </div>

          <div className="mt-2 flex flex-col gap-6 border-t border-slate-100 pt-6 text-sm font-semibold text-slate-800 select-none">
            <div className="flex flex-col gap-1">
              <span className="text-xs font-bold tracking-wider text-slate-400 uppercase">Headquarters</span>
              <p className="mt-0.5 text-base font-medium text-slate-800">{companyConfig.address.fullAddress}</p>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-xs font-bold tracking-wider text-slate-400 uppercase">Mobile Hotline</span>
              <a href={`tel:${companyConfig.phone}`} className="mt-0.5 text-lg font-extrabold tracking-tight text-amber-500 transition duration-150 hover:text-amber-600">
                {companyConfig.phoneDisplay}
              </a>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-xs font-bold tracking-wider text-slate-400 uppercase">Professional Inquiries</span>
              <a href={`mailto:${companyConfig.email}`} className="mt-0.5 text-base font-medium text-slate-800 transition duration-150 hover:text-amber-500">
                {companyConfig.email}
              </a>
            </div>
          </div>
        </div>

        <div className="lg:col-span-6">
          <LeadForm />
        </div>
      </section>
    </div>
  );
}                  