// TypeScript interfaces for TrustPoint

export interface Service {
  id: number;
  title: string;
  description: string;
  icon: string;
}

export interface WhyChooseUsItem {
  id: number;
  heading: string;
  text: string;
}

export interface ValueItem {
  id: number;
  title: string;
  description: string;
  icon: string;
}

export interface ContactInfo {
  phone: string;
  email: string;
  whatsapp: string;
  address: string;
}
