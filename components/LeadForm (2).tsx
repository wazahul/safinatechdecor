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

      setSuccess('Request validated. Directing to WhatsApp to complete...');
      setTimeout(() => {
        window.open(waUrl, '_blank', 'noopener,noreferrer');
        setIsSubmitting(false);
        setFormData({ name: '', mobile: '', service: '', message: '' });
      }, 800);
    } catch (err) {
      setErrors({ message: 'Submission failed. Please try again or WhatsApp directly.' });
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mx-auto flex max-w-xl flex-col gap-6 rounded-2xl border border-slate-100 bg-white p-8 shadow-2xl">
      <div className="flex flex-col gap-1.5">
        <h3 className="text-2xl font-bold tracking-tight text-slate-900">Request a Service</h3>
        <p className="text-sm font-medium text-slate-500">Fill out the brief below and our core team will connect shortly.</p>
      </div>

      <div className="flex flex-col gap-1">
        <label className="text-xs font-bold tracking-wider text-slate-700 uppercase" htmlFor="name">Full Name</label>
        <input
          id="name"
          name="name"
          type="text"
          value={formData.name}
          onChange={handleChange}
          placeholder="e.g. Salim Merchant"
          className={`w-full px-4 py-3 bg-slate-50 border rounded-xl text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 transition duration-200 text-sm ${
            errors.name ? 'border-red-500 focus:ring-red-50' : 'border-slate-100 focus:ring-slate-200 focus:border-slate-300'
          }`}
        />
        {errors.name && <p className="mt-1 text-xs leading-none font-semibold text-red-500">{errors.name}</p>}
      </div>

      <div className="flex flex-col gap-1">
        <label className="text-xs font-bold tracking-wider text-slate-700 uppercase" htmlFor="mobile">Mobile Number</label>
        <input
          id="mobile"
          name="mobile"
          type="tel"
          value={formData.mobile}
          onChange={handleChange}
          placeholder="e.g. 9876543210"
          className={`w-full px-4 py-3 bg-slate-50 border rounded-xl text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 transition duration-200 text-sm ${
            errors.mobile ? 'border-red-500 focus:ring-red-50' : 'border-slate-100 focus:ring-slate-200 focus:border-slate-300'
          }`}
        />
        {errors.mobile && <p className="mt-1 text-xs leading-none font-semibold text-red-500">{errors.mobile}</p>}
      </div>

      <div className="flex flex-col gap-1">
        <label className="text-xs font-bold tracking-wider text-slate-700 uppercase" htmlFor="service">Service Required</label>
        <div className="relative">
          <select
            id="service"
            name="service"
            value={formData.service}
            onChange={handleChange}
            className={`w-full px-4 py-3 bg-slate-50 border rounded-xl text-slate-900 focus:outline-none focus:ring-2 transition duration-200 text-sm appearance-none cursor-pointer ${
              errors.service ? 'border-red-500 focus:ring-red-50' : 'border-slate-100 focus:ring-slate-200 focus:border-slate-300'
            }`}
          >
            <option value="">Select a service category</option>
            {companyConfig.services.map((item) => (
              <option key={item.id} value={item.title}>
                {item.title}
              </option>
            ))}
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-slate-400">
            <svg className="h-4 w-4 fill-current" viewBox="0 0 20 20"><path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"/></svg>
          </div>
        </div>
        {errors.service && <p className="mt-1 text-xs leading-none font-semibold text-red-500">{errors.service}</p>}
      </div>

      <div className="flex flex-col gap-1">
        <label className="text-xs font-bold tracking-wider text-slate-700 uppercase" htmlFor="message">Message / Details</label>
        <textarea
          id="message"
          name="message"
          rows={3}
          value={formData.message}
          onChange={handleChange}
          placeholder="Briefly share any key specifics..."
          className={`w-full px-4 py-3 bg-slate-50 border rounded-xl text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 transition duration-200 text-sm ${
            errors.message ? 'border-red-500 focus:ring-red-50' : 'border-slate-100 focus:ring-slate-200 focus:border-slate-300'
          }`}
        />
        {errors.message && <p className="mt-1 text-xs leading-none font-semibold text-red-500">{errors.message}</p>}
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="flex w-full items-center justify-center gap-2 rounded-xl bg-slate-900 px-6 py-4 font-bold tracking-tight text-white shadow-lg transition-all duration-200 hover:bg-slate-800 focus:outline-none"
      >
        {isSubmitting ? 'Processing Request...' : 'Send Message on WhatsApp'}
      </button>

      {success && (
        <div className="rounded-xl border border-emerald-100 bg-emerald-50 p-3.5 text-center text-xs leading-relaxed font-semibold text-emerald-800">
          {success}
        </div>
      )}
    </form>
  );
}