// src/data/content.ts
import { Service, WhyChooseUsItem, ValueItem, ContactInfo } from '@/types';

export const SERVICES_DATA: Service[] = [
  {
    id: 1,
    title: "Permanent Staffing",
    description: "We help organizations build stable, long-term teams by identifying professionals who align with your technical needs, culture and growth goals.",
    icon: "Briefcase"
  },
  {
    id: 2,
    title: "Contract & Temporary Staffing",
    description: "Flexible workforce solutions to meet seasonal demand, project-based requirements, short term projects or operational expansion without long-term overheads.",
    icon: "Clock"
  },
  {
    id: 3,
    title: "Executive Search",
    description: "Our executive search services focus on leadership and niche roles that demand confidentiality, precision and industry insight.",
    icon: "Award"
  },
  {
    id: 4,
    title: "Payroll & Compliance Solutions",
    description: "We manage payroll processing, statutory compliance and workforce administration—allowing you to focus on business growth while staying compliant.",
    icon: "Shield"
  },
  {
    id: 5,
    title: "Industry-Specific Staffing",
    description: "We understand that every industry has unique workforce challenges. Our recruiters specialize in sourcing talent aligned with sector-specific skills, regulations and operational demands.",
    icon: "Building"
  }
];

export const WHY_CHOOSE_US_DATA: WhyChooseUsItem[] = [
  {
    id: 1,
    heading: "Industry-Focused Recruitment Expertise",
    text: "We understand the nuances of your industry to source candidates who hit the ground running. Our specialized recruiters bring deep sector knowledge to every search."
  },
  {
    id: 2,
    heading: "Quality-Driven Screening Process",
    text: "Rigorous vetting processes ensure only top-tier professionals reach your interview desk. We verify skills, experience, and cultural fit before any introduction."
  },
  {
    id: 3,
    heading: "Pan-India Talent Reach",
    text: "Our extensive network spans across India, giving you access to a diverse talent pool from every region, ensuring you find the right fit regardless of location."
  },
  {
    id: 4,
    heading: "Ethical & Compliant Hiring Practices",
    text: "We maintain the highest standards of ethical recruitment and ensure full compliance with employment laws and industry regulations."
  },
  {
    id: 5,
    heading: "Long-Term Partnership Mindset",
    text: "We become an extension of your team, understanding your unique needs and company culture to deliver candidates who truly belong."
  }
];

export const VALUES_DATA: ValueItem[] = [
  {
    id: 1,
    title: "Integrity",
    description: "We operate with complete transparency and honesty in every interaction. Trust is the foundation of our relationships with clients and candidates alike.",
    icon: "Shield"
  },
  {
    id: 2,
    title: "Excellence",
    description: "We pursue the highest standards in everything we do. From candidate sourcing to client service, excellence is not negotiable.",
    icon: "Star"
  },
  {
    id: 3,
    title: "Reliability",
    description: "When we make a commitment, we deliver. Our clients and candidates can depend on us to follow through, every single time.",
    icon: "CheckCircle"
  },
  {
    id: 4,
    title: "Innovation",
    description: "We continuously evolve our methods and embrace new technologies to provide cutting-edge staffing solutions for the modern workplace.",
    icon: "Lightbulb"
  }
];

export const CONTACT_INFO: ContactInfo = {
  phone: "+91 9911005312",
  email: "pradeep.trustpoint@gmail.com",
  whatsapp: "9911005312",
  address: "123 Business District, Suite 456, New York, NY 10001"
};

export const COMPANY_INFO = {
  name: "TrustPoint",
  tagline: "Connecting Potential with Performance",
  description: "TrustPoint is a premier manpower solutions provider dedicated to bridging the gap between exceptional talent and outstanding opportunities. Founded on the principles of integrity, reliability, and excellence, we have been transforming the staffing landscape for over a decade.",
  mission: "To empower organizations with the right talent and help professionals find careers that match their potential, creating lasting partnerships built on trust and mutual success.",
  vision: "To be the most trusted name in staffing solutions, known for our commitment to quality, innovation, and the positive impact we create for businesses and individuals alike."
};
