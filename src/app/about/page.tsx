'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import * as Icons from 'lucide-react';
import { Target, Award, Users, Building } from 'lucide-react';
import { PageHeader } from '@/components/ui';
import { FadeIn } from '@/components/motion';
import { COMPANY_INFO, VALUES_DATA } from '@/data/content';

export default function AboutPage() {
  return (
    <>
      <PageHeader
        subtitle="About Us"
        title="About TrustPoint"
        description="Your trusted partner in professional manpower solutions. Building exceptional teams since day one."
      />

      {/* About TrustPoint Section */}
      <section id="about-trustpoint" className="py-16 md:py-24 bg-trustWhite scroll-mt-24">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
            <FadeIn delay={0.1}>
              <div>
                <p className="text-trustBlue text-sm uppercase tracking-widest mb-4">
                  Who We Are
                </p>
                <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-trustBlack mb-6">
                  About TrustPoint
                </h2>
                <div className="space-y-4 text-trustGrey text-lg leading-relaxed">
                  <p>
                    {COMPANY_INFO.description}
                  </p>
                  <p>
                    Founded on the principles of integrity, reliability, and excellence, we have been transforming 
                    the staffing landscape for over a decade. Our team of dedicated professionals works tirelessly 
                    to understand your unique needs and deliver solutions that exceed expectations.
                  </p>
                  <p>
                    At TrustPoint, we believe that the right talent can transform organizations. That&apos;s why we go 
                    beyond traditional recruitment to build lasting partnerships with our clients and candidates alike.
                  </p>
                </div>
              </div>
            </FadeIn>
            <FadeIn delay={0.2}>
              <div className="relative">
                <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
                  <Image
                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                    alt="TrustPoint team collaboration"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 w-32 h-32 rounded-xl overflow-hidden shadow-lg hidden md:block">
                  <Image
                    src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80"
                    alt="Team meeting"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 md:py-20 text-white" style={{ background: 'linear-gradient(135deg, #3D5A7F 0%, #5A7091 50%, #6B82A0 100%)' }}>
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { number: '500+', label: 'Clients Served' },
              { number: '10K+', label: 'Placements Made' },
              { number: '15+', label: 'Years Experience' },
              { number: '98%', label: 'Client Satisfaction' },
            ].map((stat, index) => (
              <FadeIn key={stat.label} delay={index * 0.1}>
                <div className="text-center">
                  <p className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-2">
                    {stat.number}
                  </p>
                  <p className="text-white/80 text-sm md:text-base uppercase tracking-wider">
                    {stat.label}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Vision & Mission Section */}
      <section id="vision-mission" className="py-16 md:py-24 bg-trustLightGrey scroll-mt-24">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
              <p className="text-trustBlue text-sm uppercase tracking-widest mb-4">
                Our Purpose
              </p>
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-trustBlack">
                Vision & Mission
              </h2>
            </div>
          </FadeIn>
          
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            <FadeIn delay={0.1}>
              <div className="bg-trustWhite p-8 md:p-10 rounded-2xl shadow-sm">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-trustBlue/10 rounded-xl mb-6">
                  <Target size={32} className="text-trustBlue" />
                </div>
                <h3 className="font-serif text-2xl md:text-3xl font-bold text-trustBlack mb-4">
                  Our Mission
                </h3>
                <p className="text-trustGrey text-lg leading-relaxed">
                  {COMPANY_INFO.mission}
                </p>
              </div>
            </FadeIn>
            
            <FadeIn delay={0.2}>
              <div className="bg-trustWhite p-8 md:p-10 rounded-2xl shadow-sm">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-trustGold/10 rounded-xl mb-6">
                  <Award size={32} className="text-trustGold" />
                </div>
                <h3 className="font-serif text-2xl md:text-3xl font-bold text-trustBlack mb-4">
                  Our Vision
                </h3>
                <p className="text-trustGrey text-lg leading-relaxed">
                  {COMPANY_INFO.vision}
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section id="our-values" className="py-16 md:py-24 bg-trustWhite scroll-mt-24">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
              <p className="text-trustTeal text-sm uppercase tracking-widest mb-4">
                What We Stand For
              </p>
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-trustBlack mb-6">
                Our Values
              </h2>
              <p className="text-trustGrey text-lg">
                At TrustPoint, our values are the foundation of everything we do. They guide our decisions, 
                shape our culture, and define our commitment to excellence.
              </p>
            </div>
          </FadeIn>

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

      {/* Team Image Section */}
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
          <FadeIn>
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">
                Our Commitment
              </h2>
            </div>
          </FadeIn>
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
