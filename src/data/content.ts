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
    title: "Integrity First",
    description: "We operate with honesty, transparency and ethical practices in every interaction with clients, candidates and partners.",
    icon: "Shield"
  },
  {
    id: 2,
    title: "Trust & Accountability",
    description: "We build long-term relationships through reliability, clear communication and delivering timely on commitments.",
    icon: "Handshake"
  },
  {
    id: 3,
    title: "Client-Centric Approach",
    description: "We understand our clients' business needs and provide customized workforce solutions that drive growth.",
    icon: "Heart"
  },
  {
    id: 4,
    title: "Talent Excellence",
    description: "We are committed to identifying, nurturing and placing high-quality talent that aligns with organizational goals.",
    icon: "Star"
  },
  {
    id: 5,
    title: "Respect for People",
    description: "We treat every candidate and client with dignity, fairness and professionalism.",
    icon: "Users"
  },
  {
    id: 6,
    title: "Continuous Improvement thru Innovation",
    description: "We embrace innovation, technology and industry best practices to enhance recruitment outcomes.",
    icon: "Lightbulb"
  },
  {
    id: 7,
    title: "Partnership Mindset",
    description: "We act as strategic partners, not just service providers, supporting long-term workforce success.",
    icon: "Link"
  }
];

export const INDUSTRIES_DATA = [
  "Logistics & Supply Chain",
  "Warehousing",
  "Retail & E-Commerce",
  "Manufacturing & Production",
  "Hospitality & Healthcare",
  "Agriculture & Food Processing",
  "Construction & Infrastructure",
  "IT & Technology",
  "Telecom & BPO"
];

export const RECRUITMENT_PROCESS = [
  {
    step: 1,
    title: "Requirement Analysis",
    description: "Understanding your specific needs, company culture, and hiring goals."
  },
  {
    step: 2,
    title: "Talent Sourcing & Screening",
    description: "Leveraging extensive networks and advanced tools to identify top candidates."
  },
  {
    step: 3,
    title: "Skill & Background Verification",
    description: "Rigorous vetting ensures only qualified professionals are presented."
  },
  {
    step: 4,
    title: "Client Coordination",
    description: "Facilitating interviews and aligning expectations between all parties."
  },
  {
    step: 5,
    title: "Deployment & Support",
    description: "Seamless onboarding and ongoing support for lasting success."
  }
];

export const CONTACT_INFO: ContactInfo = {
  phone: "+91 9911005312",
  email: "pradeep.trustpoint@gmail.com",
  whatsapp: "9911005312",
  address: "India"
};

export const COMPANY_INFO = {
  name: "TrustPoint",
  tagline: "Connecting Potential with Performance",
  description: "We are a professional staffing and workforce solutions company delivering reliable, scalable and industry-focused talent solutions across India. We help organizations hire right, grow faster and build future-ready teams.",
  aboutParagraph1: "We are a professional staffing and workforce solutions company delivering reliable, scalable and industry-focused talent solutions across India. We help organizations hire right, grow faster and build future-ready teams.",
  aboutParagraph2: "We believe people are the foundation of every successful business. Our approach combines deep industry knowledge, ethical recruitment practices and a commitment to long-term partnerships.",
  aboutParagraph3: "From frontline workforce to specialized professionals, we connect the right talent with the right opportunity—efficiently and responsibly.",
  mission: "To provide efficient, flexible and quality manpower that meet the unique needs of our clients, fostering their growth & productivity. To bridge the gap between industry requirements and workforce capabilities through targeted skill development and talent deployment. To leverage AI and technology to enhance efficiency, accuracy and fairness in human resources recruitment and skill development.",
  vision: "To become a trusted leader in workforce solutions, connecting businesses with skilled, market-ready talent while transforming workforce potential to increase employability and supporting industry growth.",
  forEmployers: {
    title: "For Employers",
    tagline: "Build a workforce that delivers results.",
    description: "Our structured recruitment process ensures faster hiring, reduced attrition and access to dependable talent.",
    cta: "Request Talent"
  },
  forCandidates: {
    title: "For Candidates",
    tagline: "Your career matters.",
    description: "We connect you with trusted employers and opportunities that align with your skills and aspirations.",
    cta: "Apply Now"
  },
  contactTagline: "Partner With Trustpoint",
  contactDescription: "Whether you are scaling operations, entering new markets, or optimizing workforce costs—Trustpoint delivers staffing solutions you can rely on."
};
