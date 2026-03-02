'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Users, Target, Award } from 'lucide-react';
import { FadeIn, SlideUp } from '@/components/motion';
import { Button } from '@/components/ui';
import { COMPANY_INFO } from '@/data/content';

export default function HomePage() {
  return (
    <>
      {/* Hero Section with Subtle Gradient */}
      <section className="relative min-h-screen flex items-center overflow-hidden" style={{ background: 'linear-gradient(135deg, #3D5A7F 0%, #5A7091 50%, #6B82A0 100%)' }}>
        {/* Subtle overlay for depth */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/5 via-transparent to-black/5 z-5" />

        <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-20">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Text Content */}
            <div className="max-w-xl">
              <SlideUp delay={0.1}>
                <p className="text-white/80 text-sm md:text-base uppercase tracking-[0.3em] mb-6">
                  Professional Manpower Solutions
                </p>
              </SlideUp>
              
              <SlideUp delay={0.2}>
                <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-white">
                  {COMPANY_INFO.tagline}
                </h1>
              </SlideUp>
              
              <SlideUp delay={0.3}>
                <p className="text-lg md:text-xl text-white/90 mb-8 max-w-lg leading-relaxed">
                  {COMPANY_INFO.description}
                </p>
              </SlideUp>
              
              <SlideUp delay={0.4}>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center gap-2 bg-trustNavy hover:bg-trustBlack text-white px-8 py-4 rounded-md text-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
                  >
                    GET IN TOUCH
                    <ArrowRight size={20} />
                  </Link>
                </div>
              </SlideUp>
            </div>

            {/* Rectangular Image with Rounded Corners */}
            <div className="hidden md:flex justify-end">
              <motion.div
                initial={{ opacity: 0, scale: 0.95, x: 50 }}
                animate={{ opacity: 1, scale: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="relative"
              >
                <div className="w-80 h-96 lg:w-96 lg:h-[28rem] rounded-2xl overflow-hidden shadow-2xl">
                  <Image
                    src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                    alt="Professional woman at work"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
                {/* Subtle decorative arc */}
                <div className="absolute -bottom-4 -right-4 w-full h-full rounded-2xl border border-white/10 -z-10" />
              </motion.div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 hidden md:block"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-6 h-10 border border-white/30 rounded-full flex justify-center"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="w-1 h-2.5 bg-white/50 rounded-full mt-2"
            />
          </motion.div>
        </motion.div>
      </section>

      {/* Why TrustPoint Section */}
      <section className="py-16 md:py-24 bg-trustWhite">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
              <p className="text-trustBlue text-sm uppercase tracking-widest mb-4">
                Why TrustPoint
              </p>
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-trustBlack mb-6">
                The Right Partner for Your Talent Needs
              </h2>
              <p className="text-trustGrey text-lg">
                We combine industry expertise with a personalized approach to deliver staffing solutions that drive results.
              </p>
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Users,
                title: 'Expert Recruiters',
                description: 'Our team brings deep industry knowledge and a vast network to find the perfect match for your needs.',
                color: 'bg-trustBlue'
              },
              {
                icon: Target,
                title: 'Tailored Solutions',
                description: 'We customize our approach to align with your unique requirements, culture, and long-term objectives.',
                color: 'bg-trustTeal'
              },
              {
                icon: Award,
                title: 'Proven Track Record',
                description: 'Years of successful placements and satisfied clients speak to our commitment to excellence.',
                color: 'bg-trustGold'
              }
            ].map((item, index) => (
              <FadeIn key={item.title} delay={index * 0.1}>
                <div className="text-center p-6 md:p-8 rounded-xl bg-trustLightGrey hover:shadow-lg transition-shadow">
                  <div className={`inline-flex items-center justify-center w-16 h-16 ${item.color} rounded-full mb-6`}>
                    <item.icon size={28} className="text-trustWhite" />
                  </div>
                  <h3 className="font-serif text-xl md:text-2xl font-bold text-trustBlack mb-4">
                    {item.title}
                  </h3>
                  <p className="text-trustGrey leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>

          <FadeIn delay={0.4}>
            <div className="text-center mt-12">
              <Button href="/why-choose-us" variant="outline" className="border-trustBlue text-trustBlue hover:bg-trustBlue hover:text-white">
                Learn More About Us
                <ArrowRight className="ml-2" size={18} />
              </Button>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Image Gallery Section */}
      <section className="py-16 md:py-24 bg-trustLightGrey">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center max-w-3xl mx-auto mb-12">
              <p className="text-trustTeal text-sm uppercase tracking-widest mb-4">
                Our Work Environment
              </p>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-trustBlack">
                Where Talent Meets Opportunity
              </h2>
            </div>
          </FadeIn>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              'https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
              'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
              'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
              'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
            ].map((src, index) => (
              <FadeIn key={index} delay={index * 0.1}>
                <div className="relative aspect-square rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow">
                  <Image
                    src={src}
                    alt={`Team environment ${index + 1}`}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-500"
                  />
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
              Ready to Transform Your Team?
            </h2>
            <p className="text-white/90 text-lg max-w-2xl mx-auto mb-8">
              Let&apos;s discuss how TrustPoint can help you find the talent that drives success.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="/contact" size="lg" className="bg-trustNavy text-white hover:bg-trustBlack">
                Contact Us Today
              </Button>
              <Button href="/services" variant="outline" size="lg" className="border-trustWhite text-trustWhite hover:bg-trustWhite hover:text-trustNavy">
                View Our Services
              </Button>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
