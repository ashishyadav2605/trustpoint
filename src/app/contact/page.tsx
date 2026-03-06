'use client';

import Image from 'next/image';
import { Mail, Phone, MapPin, MessageCircle, Clock, Send } from 'lucide-react';
import { PageHeader, Button } from '@/components/ui';
import { FadeIn } from '@/components/motion';
import { CONTACT_INFO, COMPANY_INFO } from '@/data/content';

export default function ContactPage() {
  return (
    <>
      <PageHeader
        subtitle="Contact Us"
        title="Partner With Trustpoint"
        description="Whether you are scaling operations, entering new markets, or optimizing workforce costs—Trustpoint delivers staffing solutions you can rely on."
      />

      {/* Contact Section */}
      <section className="py-16 md:py-24 bg-trustWhite">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Contact Info */}
            <FadeIn delay={0.1}>
              <div>
                <h2 className="font-serif text-3xl md:text-4xl font-bold text-trustNavy mb-6">
                  Get in Touch
                </h2>
                <p className="text-trustGrey text-lg mb-8 leading-relaxed">
                  Ready to find your next great hire or take the next step in your career? 
                  Our team is standing by to assist you. Reach out through any of the channels below.
                </p>

                {/* Contact Details */}
                <div className="space-y-6 mb-10">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-trustBlue rounded-lg flex items-center justify-center flex-shrink-0">
                      <Phone size={22} className="text-white" />
                    </div>
                    <div>
                      <p className="font-semibold text-trustNavy mb-1">Phone</p>
                      <a 
                        href={`tel:${CONTACT_INFO.phone}`}
                        className="text-trustGrey hover:text-trustBlue transition-colors"
                      >
                        {CONTACT_INFO.phone}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-trustGold rounded-lg flex items-center justify-center flex-shrink-0">
                      <Mail size={22} className="text-white" />
                    </div>
                    <div>
                      <p className="font-semibold text-trustNavy mb-1">Email</p>
                      <a 
                        href={`mailto:${CONTACT_INFO.email}`}
                        className="text-trustGrey hover:text-trustGold transition-colors"
                      >
                        {CONTACT_INFO.email}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-trustTeal rounded-lg flex items-center justify-center flex-shrink-0">
                      <MapPin size={22} className="text-white" />
                    </div>
                    <div>
                      <p className="font-semibold text-trustNavy mb-1">Address</p>
                      <p className="text-trustGrey">
                        {CONTACT_INFO.address}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-trustNavy rounded-lg flex items-center justify-center flex-shrink-0">
                      <Clock size={22} className="text-white" />
                    </div>
                    <div>
                      <p className="font-semibold text-trustNavy mb-1">Business Hours</p>
                      <p className="text-trustGrey">Mon - Fri: 9:00 AM - 6:00 PM</p>
                      <p className="text-trustGrey">Saturday: 10:00 AM - 4:00 PM</p>
                    </div>
                  </div>
                </div>

                {/* Brand Message */}
                <div className="p-6 rounded-lg" style={{ background: 'linear-gradient(135deg, #3D5A7F 0%, #5A7091 100%)' }}>
                  <p className="font-serif text-xl font-bold text-white mb-2">
                    {COMPANY_INFO.name}
                  </p>
                  <p className="text-white/80 italic">
                    &quot;{COMPANY_INFO.tagline}&quot;
                  </p>
                </div>
              </div>
            </FadeIn>

            {/* Action Buttons */}
            <FadeIn delay={0.2}>
              <div className="bg-gradient-to-br from-trustLightGrey to-white rounded-lg p-8 md:p-10 border border-gray-100">
                <h3 className="font-serif text-2xl md:text-3xl font-bold text-trustNavy mb-6">
                  Quick Contact
                </h3>
                <p className="text-trustGrey mb-8">
                  Choose your preferred way to reach us. We typically respond within 24 business hours.
                </p>

                <div className="space-y-4">
                  {/* WhatsApp Button */}
                  <a
                    href={`https://wa.me/${CONTACT_INFO.whatsapp}?text=Hello%20TrustPoint,%20I%20would%20like%20to%20inquire%20about%20your%20staffing%20services.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-3 w-full bg-gradient-to-r from-green-500 to-green-600 text-white px-6 py-4 rounded-lg hover:from-green-600 hover:to-green-700 transition-all duration-300 text-lg font-medium shadow-md hover:shadow-lg"
                  >
                    <MessageCircle size={24} />
                    Chat on WhatsApp
                  </a>

                  {/* Email Button */}
                  <a
                    href={`mailto:${CONTACT_INFO.email}?subject=Staffing%20Inquiry%20-%20TrustPoint`}
                    className="flex items-center justify-center gap-3 w-full bg-gradient-to-r from-trustBlue to-trustBlueDark text-white px-6 py-4 rounded-lg hover:from-trustBlueDark hover:to-trustNavy transition-all duration-300 text-lg font-medium shadow-md hover:shadow-lg"
                  >
                    <Send size={24} />
                    Send an Email
                  </a>

                  {/* Call Button */}
                  <a
                    href={`tel:${CONTACT_INFO.phone}`}
                    className="flex items-center justify-center gap-3 w-full bg-gradient-to-r from-trustGold to-trustGoldLight text-white px-6 py-4 rounded-lg hover:from-amber-600 hover:to-amber-500 transition-all duration-300 text-lg font-medium shadow-md hover:shadow-lg"
                  >
                    <Phone size={24} />
                    Call Us Directly
                  </a>
                </div>

                {/* Additional Info */}
                <div className="mt-8 pt-8 border-t border-gray-200">
                  <h4 className="font-semibold text-trustNavy mb-4">
                    What happens next?
                  </h4>
                  <ol className="space-y-3 text-trustGrey">
                    <li className="flex gap-3">
                      <span className="font-bold text-trustBlue">1.</span>
                      We&apos;ll review your inquiry and requirements
                    </li>
                    <li className="flex gap-3">
                      <span className="font-bold text-trustGold">2.</span>
                      A specialist will contact you within 24 hours
                    </li>
                    <li className="flex gap-3">
                      <span className="font-bold text-trustTeal">3.</span>
                      We&apos;ll schedule a consultation to discuss your needs
                    </li>
                  </ol>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Map Section Placeholder */}
      <section className="bg-gradient-to-br from-trustLightGrey via-white to-trustLightGrey">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 py-16 md:py-24">
          <FadeIn>
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-trustNavy mb-6">
                Visit Our Office
              </h2>
              <p className="text-trustGrey text-lg mb-8">
                We welcome you to visit our office for in-person consultations. 
                Please schedule an appointment in advance to ensure our team can give you their full attention.
              </p>
            </div>
          </FadeIn>
          
          {/* Office Images Grid */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <FadeIn delay={0.1}>
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-lg">
                <Image
                  src="https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Modern office space"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            </FadeIn>
            <FadeIn delay={0.2}>
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-lg">
                <Image
                  src="https://images.unsplash.com/photo-1497215842964-222b430dc094?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Office meeting room"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            </FadeIn>
            <FadeIn delay={0.3}>
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-lg">
                <Image
                  src="https://images.unsplash.com/photo-1604328698692-f76ea9498e76?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Office reception area"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            </FadeIn>
          </div>

          <FadeIn delay={0.4}>
            <div className="bg-gradient-to-br from-trustNavy via-trustBlue to-trustTeal rounded-lg aspect-[16/9] md:aspect-[21/9] flex items-center justify-center shadow-lg">
              <div className="text-center">
                <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin size={40} className="text-white" />
                </div>
                <p className="text-white text-lg">
                  {CONTACT_INFO.address}
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-24 bg-trustWhite">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-trustNavy mb-6">
                Frequently Asked Questions
              </h2>
            </div>
          </FadeIn>

          <div className="max-w-3xl mx-auto space-y-6">
            {[
              {
                question: 'How quickly can you fill a position?',
                answer: 'Our average time-to-fill is 2-3 weeks for standard positions. For urgent needs, we offer expedited services with placements in as little as 5 business days.',
                color: 'border-l-trustBlue'
              },
              {
                question: 'What industries do you specialize in?',
                answer: 'We serve a wide range of industries including IT, Healthcare, Finance, Manufacturing, Retail, and more. Our specialized teams bring sector-specific expertise to each search.',
                color: 'border-l-trustGold'
              },
              {
                question: 'Do you offer guarantee periods for placements?',
                answer: 'Yes, all our permanent placements come with a guarantee period. If a candidate leaves or doesn\'t work out within the specified timeframe, we\'ll find a replacement at no additional cost.',
                color: 'border-l-trustTeal'
              },
              {
                question: 'Can you handle large-scale recruitment projects?',
                answer: 'Absolutely. Our RPO (Recruitment Process Outsourcing) services are designed for organizations with high-volume hiring needs. We can scale our team to match your requirements.',
                color: 'border-l-trustNavy'
              }
            ].map((faq, index) => (
              <FadeIn key={faq.question} delay={index * 0.1}>
                <div className={`bg-trustLightGrey rounded-lg p-6 border-l-4 ${faq.color} hover:shadow-md transition-shadow duration-300`}>
                  <h3 className="font-semibold text-lg text-trustNavy mb-3">
                    {faq.question}
                  </h3>
                  <p className="text-trustGrey leading-relaxed">
                    {faq.answer}
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
