'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import * as Icons from 'lucide-react';
import { PageHeader } from '@/components/ui';
import { FadeIn } from '@/components/motion';
import { VALUES_DATA } from '@/data/content';

export default function ValuesPage() {
  return (
    <>
      <PageHeader
        subtitle="Our Values"
        title="What We Stand For"
        description="At TrustPoint, our values are the foundation of everything we do. They guide our decisions, shape our culture, and define our commitment to excellence."
      />

      {/* Values Hero Image Section */}
      <section className="py-12 md:py-16 bg-trustLightGrey">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-4 md:gap-6">
            <FadeIn delay={0.1}>
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-lg">
                <Image
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Team collaboration"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            </FadeIn>
            <FadeIn delay={0.2}>
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-lg">
                <Image
                  src="https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Professional handshake"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            </FadeIn>
            <FadeIn delay={0.3}>
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-lg">
                <Image
                  src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Business meeting"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Values Grid */}
      <section className="py-16 md:py-24 bg-trustWhite">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            {VALUES_DATA.map((value, index) => {
              const IconComponent = Icons[value.icon as keyof typeof Icons] as React.ComponentType<{ size?: number; className?: string }>;
              const colors = ['bg-trustBlue', 'bg-trustGold', 'bg-trustTeal', 'bg-trustNavy'];
              
              return (
                <FadeIn key={value.id} delay={index * 0.1}>
                  <motion.div
                    whileHover={{ y: -5 }}
                    className="bg-trustLightGrey p-8 md:p-10 rounded-xl shadow-sm hover:shadow-lg transition-shadow"
                  >
                    <div className="flex items-start gap-6">
                      <div className="flex-shrink-0">
                        <div className={`w-16 h-16 ${colors[index % 4]} rounded-full flex items-center justify-center`}>
                          {IconComponent && (
                            <IconComponent size={28} className="text-trustWhite" />
                          )}
                        </div>
                      </div>
                      <div>
                        <h3 className="font-serif text-2xl md:text-3xl font-bold text-trustBlack mb-4">
                          {value.title}
                        </h3>
                        <p className="text-trustGrey text-lg leading-relaxed">
                          {value.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </section>

      {/* Values in Action */}
      <section className="py-16 md:py-24 bg-trustLightGrey">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <FadeIn delay={0.1}>
              <div className="relative aspect-square rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Team working together"
                  fill
                  className="object-cover"
                />
              </div>
            </FadeIn>
            <FadeIn delay={0.2}>
              <div className="max-w-xl">
                <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-trustBlack mb-8">
                  Our Values in Action
                </h2>
                <div className="prose prose-lg text-trustGrey">
                  <p className="text-lg md:text-xl leading-relaxed mb-6">
                    Every interaction, every placement, and every relationship we build is guided by our core values. 
                    We don&apos;t just talk about integrity, reliability, and excellence—we live them every day.
                  </p>
                  <p className="text-lg md:text-xl leading-relaxed">
                    When you partner with TrustPoint, you&apos;re choosing a team that holds itself to the highest standards. 
                    We believe that doing the right thing, consistently and without compromise, is the foundation of 
                    lasting success for our clients, candidates, and our own team.
                  </p>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Commitment Section */}
      <section className="py-16 md:py-24 text-trustWhite" style={{ background: 'linear-gradient(135deg, #3D5A7F 0%, #5A7091 50%, #6B82A0 100%)' }}>
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            {[
              {
                title: 'To Our Clients',
                description: 'We commit to understanding your unique needs and delivering candidates who exceed expectations.'
              },
              {
                title: 'To Our Candidates',
                description: 'We pledge to represent your interests fairly and connect you with opportunities that match your potential.'
              },
              {
                title: 'To Our Community',
                description: 'We strive to contribute positively to the communities we serve through ethical practices and meaningful employment.'
              }
            ].map((item, index) => (
              <FadeIn key={item.title} delay={index * 0.1}>
                <div>
                  <h3 className="font-serif text-xl md:text-2xl font-bold mb-4 text-white">
                    {item.title}
                  </h3>
                  <p className="text-white/80 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
