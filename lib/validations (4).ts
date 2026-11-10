// lib/validations.ts
import { LeadFormData } from '@/types';

export function validateLeadForm(data: LeadFormData): { isValid: boolean; errors: Partial<Record<keyof LeadFormData, string>> } {
  const errors: Partial<Record<keyof LeadFormData, string>> = {};

  if (!data.name.trim() || data.name.trim().length < 2) {
    errors.name = 'Name is too short.';
  }

  // Indian Mobile Number Validation
  const mobileRegex = /^[6-9]\d{9}$/;
  if (!mobileRegex.test(data.mobile.trim())) {
    errors.mobile = 'Enter a valid 10-digit number.';
  }

  if (!data.service) {
    errors.service = 'Please select a service.';
  }

  if (!data.message.trim() || data.message.trim().length < 5) {
    errors.message = 'Please provide more details.';
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
}