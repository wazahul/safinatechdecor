// types/index.ts
export interface ServiceItem {
  id: string;
  title: string;
  shortDesc: string;
  category: string;
}

export interface LeadFormData {
  name: string;
  mobile: string;
  service: string;
  message: string;
}

export interface SubmissionResponse {
  success: boolean;
  message: string;
  whatsappLink?: string;
}