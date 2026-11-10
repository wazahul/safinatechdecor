// components/Footer.tsx
import Link from 'next/link';
import { companyConfig } from '@/config/company';

export default function Footer() {
  return (
    <footer className="border-t border-slate-900 bg-slate-950 py-16 text-slate-400 select-none">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-6 md:grid-cols-3">
        <div>
          <h3 className="text-lg font-bold tracking-tight text-white">
            SAFINA <span className="text-amber-400">TECH-DECOR</span>
          </h3>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-slate-400">
            Elite workspace and residential interior decor combined with smart integrated building networks in Mumbai since {companyConfig.foundedYear}.
          </p>
        </div>

        <div>
          <h4 className="text-sm font-semibold tracking-wider text-slate-200 uppercase">Core Expertise</h4>
          <ul className="mt-4 space-y-3 text-sm">
            {companyConfig.services.slice(0, 4).map((s) => (
              <li key={s.id}>
                <Link href="/contact" className="transition hover:text-amber-400">{s.title}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold tracking-wider text-slate-200 uppercase">Contact</h4>
          <ul className="mt-4 space-y-3 text-sm">
            <li>WhatsApp: <a href={`https://wa.me/${companyConfig.whatsappNumber}`} className="text-white hover:text-amber-400">{companyConfig.phoneDisplay}</a></li>
            <li>Email: <a href={`mailto:${companyConfig.email}`} className="text-white hover:text-amber-400">{companyConfig.email}</a></li>
            <li className="text-slate-200">{companyConfig.address.fullAddress}</li>
          </ul>
        </div>
      </div>

      <div className="mx-auto mt-16 max-w-7xl border-t border-slate-900 px-6 pt-8 text-center text-xs tracking-wide">
        <p>&copy; {new Date().getFullYear()} {companyConfig.legalName}. All rights reserved.</p>
      </div>
    </footer>
  );
}