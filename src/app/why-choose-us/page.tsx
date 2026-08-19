'use client';

import Image from 'next/image';
import { ArrowRight, CheckCircle } from 'lucide-react';
import { PageHeader, Button } from '@/components/ui';
import { FadeIn } from '@/components/motion';
import { WHY_CHOOSE_US_DATA } from '@/data/content';
import firstImg from './first.jpg';
import secondImg from './second.webp';
import fourthImg from './fourth.jpg';
import fifthImg from './fifth.webp';

export default function WhyChooseUsPage() {
  return (
    <>
      <PageHeader
        title="The TrustPoint Difference"
        description="Discover why leading organizations trust us with their most critical hiring decisions."
      />

      {/* Alternating Sections */}
      <section className="pt-16 md:pt-24 pb-12 md:pb-16 bg-trustWhite">
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
                        ? firstImg
                        : index === 1
                        ? secondImg
                        : index === 2
                        ? 'https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
                        : index === 3
                        ? fourthImg
                        : fifthImg
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

      {/* CTA Section */}
      <section className="pt-8 md:pt-12 pb-16 md:pb-24 bg-trustWhite">
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
