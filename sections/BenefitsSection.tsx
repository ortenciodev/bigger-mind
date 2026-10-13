'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { DollarSign, BarChart3, Clock, TrendingUp, Sparkles } from 'lucide-react'
import { Badge } from '@/components/ui/Badge'
import { useCounter } from '@/hooks/useScrollAnimation'

const benefits = [
  {
    icon: DollarSign,
    prefix: '',
    value: 70,
    suffix: '%',
    label: 'Redução de Custos Operacionais',
    description: 'Automações inteligentes eliminam tarefas manuais repetitivas, reduzindo drasticamente o custo por operação.',
    iconColor: 'text-emerald-400',
    iconBg: 'bg-emerald-400/10',
    glowColor: 'rgba(52, 211, 153, 0.15)',
    border: 'border-emerald-400/15',
  },
  {
    icon: BarChart3,
    prefix: '',
    value: 5,
    suffix: 'x',
    label: 'Ganho de Produtividade',
    description: 'Sistemas otimizados e processos automatizados multiplicam a capacidade da sua equipe sem aumentar headcount.',
    iconColor: 'text-primary',
    iconBg: 'bg-primary/10',
    glowColor: 'rgba(0, 212, 255, 0.15)',
    border: 'border-primary/15',
  },
  {
    icon: Clock,
    prefix: '',
    value: 24,
    suffix: '/7',
    label: 'Operação Automatizada',
    description: 'Bots e sistemas funcionando ininterruptamente, atendendo clientes e processando dados enquanto você dorme.',
    iconColor: 'text-secondary-300',
    iconBg: 'bg-secondary/10',
    glowColor: 'rgba(124, 58, 237, 0.15)',
    border: 'border-secondary/15',
  },
  {
    icon: TrendingUp,
    prefix: '',
    value: 100,
    suffix: '%',
    label: 'Dados Seguros e Protegidos',
    description: 'Criptografia de ponta a ponta, backups automáticos e conformidade com LGPD para total segurança dos seus dados.',
    iconColor: 'text-amber-400',
    iconBg: 'bg-amber-400/10',
    glowColor: 'rgba(251, 191, 36, 0.15)',
    border: 'border-amber-400/15',
  },
]

function BenefitCard({ benefit, index, isInView }: { benefit: typeof benefits[0], index: number, isInView: boolean }) {
  const count = useCounter(benefit.value, 2000, isInView)

  return (
    <motion.div
      initial={{ opacity: 0, y: 35 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.12 }}
      className={`group relative rounded-2xl border ${benefit.border} bg-dark-600/50 backdrop-blur-sm p-8 transition-all duration-500 hover:-translate-y-2 overflow-hidden text-center`}
      style={{
        boxShadow: isInView ? `0 0 60px ${benefit.glowColor}` : 'none',
      }}
    >
      <div className="absolute inset-0 bg-gradient-radial from-white/2 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      <div className={`inline-flex w-14 h-14 rounded-2xl ${benefit.iconBg} items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
        <benefit.icon className={`w-7 h-7 ${benefit.iconColor}`} />
      </div>

      <div className={`font-display text-6xl font-bold mb-3 ${benefit.iconColor}`}>
        {benefit.prefix}
        <span className="tabular-nums">
          {benefit.suffix === '/7' ? (isInView ? '24' : '0') : count}
        </span>
        {benefit.suffix}
      </div>

      <h3 className="text-base font-bold text-white mb-3">{benefit.label}</h3>
      <p className="text-sm text-white/45 leading-relaxed">{benefit.description}</p>
    </motion.div>
  )
}

export function BenefitsSection() {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section ref={ref} className="relative section-padding bg-dark-800 overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-50" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-radial from-secondary/8 to-transparent pointer-events-none" />

      <div className="container-custom relative">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <Badge variant="primary" className="mb-4">
            <Sparkles className="w-3 h-3" />
            Resultados Concretos
          </Badge>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-5">
            O Impacto Real da{' '}
            <span className="text-gradient">Tecnologia</span>
            <br />
            no seu Negócio
          </h2>
          <p className="text-lg text-white/50 max-w-2xl mx-auto leading-relaxed">
            Números que comprovam o retorno sobre investimento dos nossos clientes.
            Tecnologia que entrega resultados mensuráveis desde o primeiro mês.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, i) => (
            <BenefitCard key={benefit.label} benefit={benefit} index={i} isInView={isInView} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="mt-16 rounded-2xl border border-primary/15 bg-gradient-to-r from-primary/8 via-dark-600/60 to-secondary/8 backdrop-blur-sm p-8 md:p-10 text-center"
        >
          <h3 className="font-display text-2xl md:text-3xl font-bold text-white mb-3">
            Pronto para esses resultados no seu negócio?
          </h3>
          <p className="text-white/50 mb-6 max-w-xl mx-auto">
            Converse com nossos especialistas e descubra como podemos transformar sua operação com tecnologia de alto impacto.
          </p>
          <a
            href="https://wa.me/5511999999999?text=Ol%C3%A1!+Quero+conhecer+os+resultados+que+voc%C3%AAs+podem+gerar+para+meu+neg%C3%B3cio."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-primary to-secondary text-dark-900 font-bold px-8 py-4 rounded-xl text-base hover:shadow-glow-lg hover:-translate-y-0.5 transition-all duration-300"
          >
            <Sparkles className="w-5 h-5" />
            Quero esses resultados
          </a>
        </motion.div>
      </div>
    </section>
  )
}
