'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface SlideUpProps {
  children: ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
}

export const SlideUp = ({ 
  children, 
  delay = 0, 
  duration = 0.6,
  className = '' 
}: SlideUpProps) => (
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ 
      duration: duration, 
      delay: delay, 
      ease: [0.25, 0.1, 0.25, 1]
    }}
    className={className}
  >
    {children}
  </motion.div>
);

export default SlideUp;
