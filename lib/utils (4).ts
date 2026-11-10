// lib/utils.ts
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

// Tailwind classes merge karne ke liye
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// WhatsApp message format karne ke liye
export function formatWhatsAppMessage(name: string, service: string, mobile: string, msg: string): string {
  const baseMessage = `Hello Safina Tech-Decor,\n\nI am interested in your *${service}* service.\n\n*My Details:*\n- Name: ${name}\n- Mobile: ${mobile}\n- Message: ${msg}`;
  return encodeURIComponent(baseMessage);
}