'use client';

import { FadeIn } from '@/components/motion';

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  description?: string;
  className?: string;
}

export const PageHeader = ({
  title,
  subtitle,
  description,
  className = '',
}: PageHeaderProps) => {
  return (
    <div className={`py-16 md:py-24 text-trustWhite ${className}`} style={{ background: 'linear-gradient(135deg, #3D5A7F 0%, #5A7091 50%, #6B82A0 100%)' }}>
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <FadeIn>
          {subtitle && (
            <p className="text-white/80 text-sm md:text-base uppercase tracking-widest mb-4">
              {subtitle}
            </p>
          )}
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            {title}
          </h1>
          {description && (
            <p className="text-white/90 text-lg md:text-xl max-w-2xl">
              {description}
            </p>
          )}
        </FadeIn>
      </div>
    </div>
  );
};

export default PageHeader;
