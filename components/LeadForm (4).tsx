'use client';
// components/LeadForm.tsx
import React, { useState } from 'react';
import { companyConfig } from '@/config/company';
import { validateLeadForm } from '@/lib/validations';
import { formatWhatsAppMessage } from '@/lib/utils';
import { LeadFormData } from '@/types';

interface LeadFormProps {
  initialService?: string;
}

export default function LeadForm({ initialService = '' }: LeadFormProps) {
  const [formData, setFormData] = useState<LeadFormData>({
    name: '',
    mobile: '',
    service: initialService,
    message: '',
  });

  const [errors, setErrors] = useState<Partial<Record<keyof LeadFormData, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (errors[e.target.name as keyof LeadFormData]) {
      setErrors({ ...errors, [e.target.name]: undefined });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const { isValid, errors: validationErrors } = validateLeadForm(formData);

    if (!isValid) {
      setErrors(validationErrors);
      return;
    }

    setIsSubmitting(true);
    setErrors({});

    try {
      const waMsg = formatWhatsAppMessage(formData.name, formData.service, formData.mobile, formData.message);
      const waUrl = `https://wa.me/${companyConfig.whatsappNumber}?text=${waMsg}`;

      setSuccess('Redirecting to WhatsApp...');
      
      setTimeout(() => {
        window.open(waUrl, '_blank', 'noopener,noreferrer');
        setIsSubmitting(false);
        setFormData({ name: '', mobile: '', service: '', message: '' });
        setSuccess(null);
      }, 1000);
    } catch (err) {
      setErrors({ message: 'Something went wrong. Please try again.' });
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5 rounded-2xl border border-slate-100 bg-white p-6 shadow-xl md:p-8">
      <div className="flex flex-col gap-1">
        <h3 className="text-xl font-bold text-slate-900">Request a Service</h3>
        <p className="text-xs text-slate-500">We usually respond within 30 minutes on WhatsApp.</p>
      </div>

      <div className="space-y-4">
        {/* Name Field */}
        <div className="flex flex-col gap-1.5">
          <label className="font-bold tracking-widest text-[10px] text-slate-400 uppercase" htmlFor="name">Name</label>
          <input
            id="name"
            name="name"
            type="text"
            required
            value={formData.name}
            onChange={handleChange}
            className={`rounded-xl border bg-slate-50 px-4 py-3 text-sm transition focus:outline-none focus:ring-2 ${errors.name ? 'border-red-400 focus:ring-red-50' : 'border-slate-100 focus:ring-amber-200'}`}
            placeholder="Your Name"
          />
        </div>

        {/* Mobile Field */}
        <div className="flex flex-col gap-1.5">
          <label className="font-bold tracking-widest text-[10px] text-slate-400 uppercase" htmlFor="mobile">Mobile Number</label>
          <input
            id="mobile"
            name="mobile"
            type="tel"
            required
            value={formData.mobile}
            onChange={handleChange}
            className={`rounded-xl border bg-slate-50 px-4 py-3 text-sm transition focus:outline-none focus:ring-2 ${errors.mobile ? 'border-red-400 focus:ring-red-50' : 'border-slate-100 focus:ring-amber-200'}`}
            placeholder="10-digit number"
          />
        </div>

        {/* Service Select */}
        <div className="flex flex-col gap-1.5">
          <label className="font-bold tracking-widest text-[10px] text-slate-400 uppercase" htmlFor="service">Service</label>
          <select
            id="service"
            name="service"
            value={formData.service}
            onChange={handleChange}
            className="rounded-xl border border-slate-100 bg-slate-50 px-4 py-3 text-sm focus:ring-2 focus:ring-amber-200 focus:outline-none"
          >
            <option value="">Select a service</option>
            {companyConfig.services.map((s) => (
              <option key={s.id} value={s.title}>{s.title}</option>
            ))}
          </select>
        </div>

        {/* Message Field */}
        <div className="flex flex-col gap-1.5">
          <label className="font-bold tracking-widest text-[10px] text-slate-400 uppercase" htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            rows={3}
            value={formData.message}
            onChange={handleChange}
            className="rounded-xl border border-slate-100 bg-slate-50 px-4 py-3 text-sm focus:ring-2 focus:ring-amber-200 focus:outline-none"
            placeholder="Briefly describe your requirement..."
          />
        </div>
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="mt-2 flex w-full items-center justify-center rounded-xl bg-slate-900 py-4 text-sm font-bold text-white transition hover:bg-amber-600 disabled:opacity-50"
      >
        {isSubmitting ? 'Processing...' : 'Send on WhatsApp'}
      </button>

      {success && <p className="text-center text-xs font-bold text-emerald-600">{success}</p>}
    </form>
  );
}