'use client';

import Image from 'next/image';
import { ArrowRight, CheckCircle } from 'lucide-react';
import { PageHeader, Button } from '@/components/ui';
import { FadeIn } from '@/components/motion';
import { WHY_CHOOSE_US_DATA } from '@/data/content';

export default function WhyChooseUsPage() {
  return (
    <>
      <PageHeader
        subtitle="Why Choose Us"
        title="The TrustPoint Difference"
        description="Discover why leading organizations trust us with their most critical hiring decisions."
      />

      {/* Alternating Sections */}
      <section className="py-16 md:py-24 bg-trustWhite">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="space-y-16 md:space-y-24">
            {WHY_CHOOSE_US_DATA.map((item, index) => (
              <FadeIn key={item.id} delay={0.1}>
                <div className={`grid md:grid-cols-2 gap-8 lg:gap-16 items-center ${
                  index % 2 === 1 ? 'md:flex-row-reverse' : ''
                }`}>
                  {/* Image */}
                  <div className={`relative aspect-[4/3] rounded-lg overflow-hidden shadow-lg ${
                    index % 2 === 1 ? 'md:order-2' : ''
                  }`}>
                    <Image
                      src={index === 0 
                        ? 'https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
                        : index === 1
                        ? 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
                        : index === 2
                        ? 'https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
                        : index === 3
                        ? 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
                        : 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
                      }
                      alt={item.heading}
                      fill
                      className="object-cover hover:scale-105 transition-all duration-500"
                    />
                  </div>
                  
                  {/* Content */}
                  <div className={index % 2 === 1 ? 'md:order-1' : ''}>
                    <p className="text-trustBlue text-sm uppercase tracking-widest mb-4">
                      0{item.id}
                    </p>
                    <h2 className="font-serif text-3xl md:text-4xl font-bold text-trustBlack mb-6">
                      {item.heading}
                    </h2>
                    <p className="text-trustGrey text-lg leading-relaxed mb-6">
                      {item.text}
                    </p>
                    <ul className="space-y-3">
                      {[
                        index === 0 ? 'Deep sector-specific knowledge' : index === 1 ? 'Multi-stage interview process' : index === 2 ? 'Nationwide recruitment network' : index === 3 ? 'Full regulatory adherence' : 'Dedicated account managers',
                        index === 0 ? 'Specialized recruiting teams' : index === 1 ? 'Skills verification & testing' : index === 2 ? 'Access to diverse talent pools' : index === 3 ? 'Transparent hiring practices' : 'Regular progress updates',
                        index === 0 ? 'Continuous market insights' : index === 1 ? 'Reference & background checks' : index === 2 ? 'Regional expertise across India' : index === 3 ? 'Compliant documentation' : 'Post-placement support'
                      ].map((point) => (
                        <li key={point} className="flex items-start gap-3">
                          <CheckCircle size={20} className="text-trustTeal flex-shrink-0 mt-0.5" />
                          <span className="text-trustGrey">{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Benefits */}
      <section className="py-16 md:py-24 bg-trustLightGrey">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-trustBlack mb-6">
                More Reasons to Partner With Us
              </h2>
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Flexible Engagement',
                description: 'Choose from contingency, retained, or RPO models based on your needs and budget.'
              },
              {
                title: 'Transparent Pricing',
                description: 'Clear, competitive fee structures with no hidden costs or surprises.'
              },
              {
                title: 'Guarantee Period',
                description: 'All placements come with a replacement guarantee for your peace of mind.'
              },
              {
                title: 'Technology-Enabled',
                description: 'Advanced ATS and AI tools to enhance candidate matching and tracking.'
              },
              {
                title: 'Compliance Assured',
                description: 'Full adherence to employment laws and industry regulations.'
              },
              {
                title: 'Scalable Solutions',
                description: 'From single hires to large-scale recruitment drives, we scale with you.'
              }
            ].map((item, index) => (
              <FadeIn key={item.title} delay={index * 0.1}>
                <div className="bg-trustWhite p-6 md:p-8 rounded-lg">
                  <h3 className="font-serif text-xl font-bold text-trustBlack mb-3">
                    {item.title}
                  </h3>
                  <p className="text-trustGrey leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* For Employers & Candidates Section */}
      <section className="py-16 md:py-24 bg-trustWhite">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            {/* For Employers */}
            <FadeIn delay={0.1}>
              <div className="bg-gradient-to-br from-trustNavy to-trustBlue p-8 md:p-10 rounded-2xl text-white">
                <p className="text-white/80 text-sm uppercase tracking-widest mb-2">For Employers</p>
                <h3 className="font-serif text-2xl md:text-3xl font-bold mb-4">
                  Build a workforce that delivers results.
                </h3>
                <p className="text-white/90 text-lg mb-6 leading-relaxed">
                  Our structured recruitment process ensures faster hiring, reduced attrition and access to dependable talent.
                </p>
                <Button href="/contact" className="bg-white text-trustNavy hover:bg-trustLightGrey">
                  Request Talent
                  <ArrowRight className="ml-2" size={18} />
                </Button>
              </div>
            </FadeIn>

            {/* For Candidates */}
            <FadeIn delay={0.2}>
              <div className="bg-gradient-to-br from-trustTeal to-trustBlue p-8 md:p-10 rounded-2xl text-white">
                <p className="text-white/80 text-sm uppercase tracking-widest mb-2">For Candidates</p>
                <h3 className="font-serif text-2xl md:text-3xl font-bold mb-4">
                  Your career matters.
                </h3>
                <p className="text-white/90 text-lg mb-6 leading-relaxed">
                  We connect you with trusted employers and opportunities that align with your skills and aspirations.
                </p>
                <Button href="/contact" className="bg-white text-trustTeal hover:bg-trustLightGrey">
                  Apply Now
                  <ArrowRight className="ml-2" size={18} />
                </Button>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-16 md:py-24 text-trustWhite" style={{ background: 'linear-gradient(135deg, #3D5A7F 0%, #5A7091 50%, #6B82A0 100%)' }}>
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <FadeIn>
            <div className="max-w-4xl mx-auto text-center">
              <svg className="w-12 h-12 mx-auto mb-8 text-white/50" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
              <blockquote className="font-serif text-2xl md:text-3xl lg:text-4xl font-medium mb-8 leading-relaxed">
                TrustPoint transformed our hiring process. Their understanding of our industry and culture 
                meant we received candidates who were not just qualified, but truly fit our team.
              </blockquote>
              <div>
                <p className="font-semibold text-lg">Sarah Mitchell</p>
                <p className="text-white/70">VP of Human Resources, TechCorp Industries</p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-trustWhite">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 text-center">
          <FadeIn>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-trustBlack mb-6">
              Experience the Difference
            </h2>
            <p className="text-trustGrey text-lg max-w-2xl mx-auto mb-8">
              Join hundreds of organizations that have transformed their talent acquisition with TrustPoint.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="/contact" size="lg">
                Start a Conversation
                <ArrowRight className="ml-2" size={20} />
              </Button>
              <Button href="/services" variant="outline" size="lg">
                Explore Services
              </Button>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
