'use client';

import { motion } from 'framer-motion';
import * as Icons from 'lucide-react';
import { Service } from '@/types';

interface ServiceCardProps {
  service: Service;
  delay?: number;
}

// Colors for cycling through service cards
const iconColors = [
  { bg: 'bg-trustBlue', text: 'text-white' },
  { bg: 'bg-trustGold', text: 'text-white' },
  { bg: 'bg-trustTeal', text: 'text-white' },
  { bg: 'bg-trustNavy', text: 'text-white' },
];

export const ServiceCard = ({ service, delay = 0 }: ServiceCardProps) => {
  // Dynamically get the icon component
  const IconComponent = Icons[service.icon as keyof typeof Icons] as React.ComponentType<{ size?: number; className?: string }>;
  
  // Get color based on delay (which correlates to card index)
  const colorIndex = Math.round(delay / 0.1) % iconColors.length;
  const iconColor = iconColors[colorIndex];

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: delay, ease: "easeOut" }}
      whileHover={{ y: -5 }}
      className="bg-trustWhite border border-gray-100 rounded-lg p-6 md:p-8 shadow-sm hover:shadow-lg hover:border-trustBlue/30 transition-all duration-300"
    >
      <div className="mb-4">
        {IconComponent && (
          <div className={`w-16 h-16 ${iconColor.bg} rounded-xl flex items-center justify-center`}>
            <IconComponent size={32} className={iconColor.text} />
          </div>
        )}
      </div>
      <h3 className="font-serif text-xl md:text-2xl font-bold text-trustNavy mb-3">
        {service.title}
      </h3>
      <p className="text-trustGrey text-base leading-relaxed">
        {service.description}
      </p>
    </motion.div>
  );
};

export default ServiceCard;
