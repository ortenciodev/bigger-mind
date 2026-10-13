'use client'

import { forwardRef } from 'react'
import { cn } from '@/utils/cn'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'whatsapp'
  size?: 'sm' | 'md' | 'lg' | 'xl'
  isLoading?: boolean
  asChild?: boolean
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', isLoading, children, disabled, ...props }, ref) => {
    const base = 'inline-flex items-center justify-center gap-2 font-semibold rounded-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-dark-800 disabled:opacity-50 disabled:cursor-not-allowed select-none'

    const variants = {
      primary: 'bg-gradient-to-r from-primary to-secondary text-dark-900 hover:shadow-glow hover:shadow-glow-lg hover:-translate-y-0.5 focus:ring-primary',
      secondary: 'bg-dark-500 border border-dark-300 text-white hover:border-primary/50 hover:bg-dark-400 hover:-translate-y-0.5 focus:ring-primary/50',
      outline: 'border-2 border-primary/50 text-primary hover:bg-primary/10 hover:border-primary hover:-translate-y-0.5 focus:ring-primary/50',
      ghost: 'text-white/70 hover:text-white hover:bg-white/5 focus:ring-white/20',
      whatsapp: 'bg-[#25D366] hover:bg-[#20BC5C] text-white hover:shadow-[0_0_30px_rgba(37,211,102,0.4)] hover:-translate-y-0.5 focus:ring-[#25D366]',
    }

    const sizes = {
      sm: 'px-4 py-2 text-sm',
      md: 'px-6 py-3 text-sm',
      lg: 'px-8 py-4 text-base',
      xl: 'px-10 py-5 text-lg',
    }

    return (
      <button
        ref={ref}
        disabled={disabled || isLoading}
        className={cn(base, variants[variant], sizes[size], className)}
        {...props}
      >
        {isLoading ? (
          <span className="inline-block w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
        ) : null}
        {children}
      </button>
    )
  }
)

Button.displayName = 'Button'
export { Button }
