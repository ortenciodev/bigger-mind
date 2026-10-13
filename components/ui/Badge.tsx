import { cn } from '@/utils/cn'

interface BadgeProps {
  children: React.ReactNode
  variant?: 'primary' | 'secondary' | 'outline' | 'glass' | 'success' | 'warning'
  className?: string
}

export function Badge({ children, variant = 'glass', className }: BadgeProps) {
  const variants = {
    primary: 'bg-primary/20 text-primary border border-primary/30',
    secondary: 'bg-secondary/20 text-secondary-300 border border-secondary/30',
    outline: 'border border-white/20 text-white/70',
    glass: 'bg-white/5 border border-white/10 text-white/70 backdrop-blur-sm',
    success: 'bg-emerald-500/15 text-emerald-400 border border-emerald-500/30',
    warning: 'bg-amber-500/15 text-amber-400 border border-amber-500/30',
  }

  return (
    <span
      className={cn(
        'inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium',
        variants[variant],
        className
      )}
    >
      {children}
    </span>
  )
}
