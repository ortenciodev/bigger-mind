'use client'

import { cn } from '@/utils/cn'
import { motion } from 'framer-motion'

interface CardProps {
  children: React.ReactNode
  className?: string
  glowColor?: 'primary' | 'secondary' | 'none'
  hover?: boolean
  as?: 'div' | 'article' | 'section'
}

export function Card({ children, className, glowColor = 'none', hover = true, as = 'div' }: CardProps) {
  const glowClasses = {
    primary: 'hover:border-primary/40 hover:shadow-glow',
    secondary: 'hover:border-secondary/40 hover:shadow-glow-purple',
    none: 'hover:border-white/20',
  }

  const Component = motion[as] as typeof motion.div

  return (
    <Component
      className={cn(
        'relative rounded-2xl border border-white/8 bg-dark-600/60 backdrop-blur-md overflow-hidden',
        hover && 'transition-all duration-500 cursor-default',
        hover && glowClasses[glowColor],
        hover && 'hover:-translate-y-1',
        className
      )}
      whileHover={hover ? { y: -4 } : undefined}
      transition={{ duration: 0.3 }}
    >
      {children}
    </Component>
  )
}
