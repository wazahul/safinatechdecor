// lib/validations.ts
import { LeadFormData } from '@/types';

export function validateLeadForm(data: LeadFormData): { isValid: boolean; errors: Partial<Record<keyof LeadFormData, string>> } {
  const errors: Partial<Record<keyof LeadFormData, string>> = {};

  if (!data.name.trim() || data.name.trim().length < 2) {
    errors.name = 'Name must be at least 2 characters.';
  }

  const mobileRegex = /^[6-9]\d{9}$/;
  if (!mobileRegex.test(data.mobile.trim())) {
    errors.mobile = 'Enter a valid 10-digit Indian mobile number.';
  }

  if (!data.service || data.service === '') {
    errors.service = 'Please select a service.';
  }

  if (!data.message.trim() || data.message.trim().length < 5) {
    errors.message = 'Message must be at least 5 characters.';
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
}