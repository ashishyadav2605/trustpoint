'use client';

import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import { PageHeader, ServiceCard, Button } from '@/components/ui';
import { FadeIn } from '@/components/motion';
import { SERVICES_DATA } from '@/data/content';

const INDUSTRIES_WITH_IMAGES = [
  {
    name: "Logistics & Supply Chain",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
  },
  {
    name: "Warehousing",
    image: "https://images.unsplash.com/photo-1553413077-190dd305871c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
  },
  {
    name: "Retail & E-Commerce",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
  },
  {
    name: "Manufacturing & Production",
    image: "https://images.unsplash.com/photo-1565793298595-6a879b1d9492?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
  },
  {
    name: "Hospitality & Healthcare",
    image: "https://images.unsplash.com/photo-1551190822-a9333d879b1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
  },
  {
    name: "Agriculture & Food Processing",
    image: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
  },
  {
    name: "Construction & Infrastructure",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
  },
  {
    name: "IT & Technology",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
  },
  {
    name: "Telecom & BPO",
    image: "https://images.unsplash.com/photo-1534536281715-e28d76689b4d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
  }
];

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        subtitle="Our Services"
        title="Comprehensive Staffing Solutions"
        description="Our services are designed to meet evolving business needs while ensuring quality, speed and compliance. We provide end-to-end staffing services designed to support organizations across industries."
      />

      {/* Services Hero Banner - For Employers */}
      <section className="py-8 md:py-12 bg-trustWhite">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="relative aspect-[21/9] rounded-2xl overflow-hidden shadow-xl">
            <Image
              src="https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80"
              alt="Modern office workspace"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-trustNavy/80 to-transparent flex items-center">
              <div className="px-8 md:px-16 max-w-xl">
                <p className="text-white/80 text-sm uppercase tracking-widest mb-2">For Employers</p>
                <h2 className="font-serif text-2xl md:text-4xl font-bold text-white mb-4">Build a Workforce That Delivers Results</h2>
                <p className="text-white/90 text-lg hidden md:block">Our structured recruitment process ensures faster hiring, reduced attrition and access to dependable talent.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services We Offer */}
      <section id="services-offer" className="py-16 md:py-24 bg-trustLightGrey scroll-mt-24">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-trustBlack mb-6">
                Services We Offer
              </h2>
              <p className="text-trustGrey text-lg">
                Comprehensive staffing solutions tailored to meet your organization&apos;s unique needs.
              </p>
            </div>
          </FadeIn>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {SERVICES_DATA.map((service, index) => (
              <ServiceCard 
                key={service.id} 
                service={service} 
                delay={index * 0.1}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Recruitment Process Section */}
      <section className="py-16 md:py-24 bg-trustWhite">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-trustBlack mb-6">
                Recruitment Process
              </h2>
              <p className="text-trustGrey text-lg">
                A streamlined approach that delivers results while keeping you informed every step of the way.
              </p>
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6 relative">
            {[
              {
                step: '01',
                title: 'Requirement Analysis',
                description: 'Understanding your specific needs, company culture, and hiring goals.',
                color: 'text-trustBlue'
              },
              {
                step: '02',
                title: 'Talent Sourcing & Screening',
                description: 'Leveraging extensive networks and advanced tools to identify top candidates.',
                color: 'text-trustTeal'
              },
              {
                step: '03',
                title: 'Skill & Background Verification',
                description: 'Rigorous vetting ensures only qualified professionals are presented.',
                color: 'text-trustGold'
              },
              {
                step: '04',
                title: 'Client Coordination',
                description: 'Facilitating interviews and aligning expectations between all parties.',
                color: 'text-trustNavy'
              },
              {
                step: '05',
                title: 'Deployment & Support',
                description: 'Seamless onboarding and ongoing support for lasting success.',
                color: 'text-trustBlue'
              }
            ].map((item, index, arr) => (
              <FadeIn key={item.step} delay={index * 0.1}>
                <div className="relative">
                  <p className={`font-serif text-5xl md:text-6xl font-bold ${item.color} opacity-30 mb-4`}>
                    {item.step}
                  </p>
                  <h3 className="font-serif text-lg md:text-xl font-bold text-trustBlack mb-3">
                    {item.title}
                  </h3>
                  <p className="text-trustGrey text-sm leading-relaxed">
                    {item.description}
                  </p>
                  {/* Arrow to next step */}
                  {index < arr.length - 1 && (
                    <div className="hidden lg:block absolute top-6 -right-3 transform translate-x-1/2">
                      <svg width="24" height="18" viewBox="0 0 24 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 9H20M20 9L12 1M20 9L12 17" stroke="#3D5A7F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" opacity="0.4"/>
                      </svg>
                    </div>
                  )}
                </div>
              </FadeIn>
            ))}
          </div>
          {/* Mobile Arrow Flow */}
          <div className="lg:hidden flex justify-center items-center mt-8">
            <div className="flex items-center gap-2 text-trustBlue/40 flex-wrap justify-center">
              <span className="text-sm font-medium">01</span>
              <ArrowRight size={16} />
              <span className="text-sm font-medium">02</span>
              <ArrowRight size={16} />
              <span className="text-sm font-medium">03</span>
              <ArrowRight size={16} />
              <span className="text-sm font-medium">04</span>
              <ArrowRight size={16} />
              <span className="text-sm font-medium">05</span>
            </div>
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section id="industries-serve" className="py-16 md:py-24 bg-trustLightGrey scroll-mt-24">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-trustBlack mb-6">
                Industries We Serve
              </h2>
              <p className="text-trustGrey text-lg">
                Our specialized teams bring deep industry knowledge to every search, ensuring candidates who truly understand your sector.
              </p>
            </div>
          </FadeIn>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
            {INDUSTRIES_WITH_IMAGES.map((industry, index) => (
              <FadeIn key={industry.name} delay={index * 0.05}>
                <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-lg group cursor-pointer">
                  <Image
                    src={industry.image}
                    alt={industry.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-trustNavy/90 via-trustNavy/40 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6">
                    <h3 className="font-serif text-white text-sm md:text-lg lg:text-xl font-bold">
                      {industry.name}
                    </h3>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 text-trustWhite" style={{ background: 'linear-gradient(135deg, #3D5A7F 0%, #5A7091 50%, #6B82A0 100%)' }}>
        <div className="container mx-auto px-4 md:px-6 lg:px-8 text-center">
          <FadeIn>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Need a Custom Solution?
            </h2>
            <p className="text-white/90 text-lg max-w-2xl mx-auto mb-8">
              Every organization is unique. Let&apos;s discuss how we can tailor our services to perfectly fit your requirements.
            </p>
            <Button href="/contact" size="lg" className="bg-trustNavy text-white hover:bg-trustBlack">
              Get a Custom Quote
              <ArrowRight className="ml-2" size={20} />
            </Button>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
