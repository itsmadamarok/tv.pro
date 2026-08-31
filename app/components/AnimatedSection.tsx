'use client';

import { motion, useReducedMotion, type Variants } from 'motion/react';
import { ReactNode } from 'react';

interface FadeInProps {
  children: ReactNode;
  delay?: number;
  className?: string;
}

const customEase = [0.16, 1, 0.3, 1] as const;

export function FadeIn({ children, delay = 0, className = '' }: FadeInProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{
        duration: shouldReduceMotion ? 0 : 0.65,
        delay: shouldReduceMotion ? 0 : delay,
        ease: customEase,
      }}
      className={`will-change-transform ${className}`}
    >
      {children}
    </motion.div>
  );
}

export function FadeInStagger({
  children,
  className = '',
}: {
  children: ReactNode;
  className?: string;
}) {
  const shouldReduceMotion = useReducedMotion();

  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.12,
      },
    },
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-40px' }}
      variants={containerVariants}
      className={`will-change-transform ${className}`}
    >
      {children}
    </motion.div>
  );
}

export function FadeInItem({
  children,
  className = '',
}: {
  children: ReactNode;
  className?: string;
}) {
  const shouldReduceMotion = useReducedMotion();

  const itemVariants: Variants = {
    hidden: { 
      opacity: 0, 
      y: shouldReduceMotion ? 0 : 20 
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: { 
        duration: shouldReduceMotion ? 0 : 0.55, 
        ease: customEase 
      },
    },
  };

  return (
    <motion.div 
      variants={itemVariants} 
      className={`will-change-transform ${className}`}
    >
      {children}
    </motion.div>
  );
}