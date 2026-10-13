'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Zap, TrendingUp, Shield, Headphones, Cpu, LineChart, CheckCircle2 } from 'lucide-react'
import { Badge } from '@/components/ui/Badge'

const reasons = [
  {
    number: '01',
    icon: Zap,
    title: 'Velocidade de Entrega',
    description: 'Metodologias ágeis e equipe experiente garantem entregas rápidas sem comprometer qualidade. Sprints bem definidas e comunicação transparente.',
    color: 'text-primary',
    iconBg: 'bg-primary/10',
    borderColor: 'border-primary/20',
    accentColor: 'bg-primary',
  },
  {
    number: '02',
    icon: TrendingUp,
    title: 'Escalabilidade Total',
    description: 'Arquiteturas cloud-native projetadas para crescer. Do MVP até milhões de usuários, sua solução evolui sem refazer do zero.',
    color: 'text-emerald-400',
    iconBg: 'bg-emerald-400/10',
    borderColor: 'border-emerald-400/20',
    accentColor: 'bg-emerald-400',
  },
  {
    number: '03',
    icon: Shield,
    title: 'Segurança de Alto Nível',
    description: 'Implementamos as melhores práticas de segurança: criptografia, autenticação robusta, proteção contra OWASP Top 10 e compliance LGPD.',
    color: 'text-secondary-300',
    iconBg: 'bg-secondary/10',
    borderColor: 'border-secondary/20',
    accentColor: 'bg-secondary',
  },
  {
    number: '04',
    icon: Headphones,
    title: 'Suporte Especializado',
    description: 'Time dedicado com suporte técnico humano via WhatsApp. Monitoramento proativo, manutenção preventiva e SLA de suporte.',
    color: 'text-cyan-400',
    iconBg: 'bg-cyan-400/10',
    borderColor: 'border-cyan-400/20',
    accentColor: 'bg-cyan-400',
  },
  {
    number: '05',
    icon: Cpu,
    title: 'Stack Tecnológico Moderno',
    description: 'Utilizamos React, Next.js, Node.js, Python, Cloud AWS/GCP e as IAs mais avançadas. Tecnologia atual que não envelhece rápido.',
    color: 'text-amber-400',
    iconBg: 'bg-amber-400/10',
    borderColor: 'border-amber-400/20',
    accentColor: 'bg-amber-400',
  },
  {
    number: '06',
    icon: LineChart,
    title: 'ROI Comprovado',
    description: 'Projetos focados em resultados mensuráveis. Definimos KPIs claros, entregamos relatórios e otimizamos continuamente para maximizar seu retorno.',
    color: 'text-rose-400',
    iconBg: 'bg-rose-400/10',
    borderColor: 'border-rose-400/20',
    accentColor: 'bg-rose-400',
  },
]

const guarantees = [
  'Código-fonte 100% seu',
  'Documentação completa',
  'Confidencialidade total',
  'Sem taxas ocultas',
  'Suporte pós-lançamento',
]

export function WhyUsSection() {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="por-que-nos" ref={ref} className="relative section-padding bg-dark-900 overflow-hidden">
      <div className="absolute inset-0 bg-dot-pattern" />
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-96 h-96 bg-secondary/6 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute right-0 top-1/3 w-80 h-80 bg-primary/5 rounded-full blur-[80px] pointer-events-none" />

      <div className="container-custom relative">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <Badge variant="secondary" className="mb-4">
            <Shield className="w-3 h-3" />
            Nossos Diferenciais
          </Badge>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-5">
            Por Que Escolher a{' '}
            <span className="text-gradient">BIGGER MIND</span>?
          </h2>
          <p className="text-lg text-white/50 max-w-2xl mx-auto leading-relaxed">
            Não somos apenas uma agência de desenvolvimento. Somos parceiros estratégicos comprometidos
            com o sucesso do seu negócio através da tecnologia.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {reasons.map((reason, i) => (
            <motion.div
              key={reason.number}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className={`group relative rounded-2xl border ${reason.borderColor} bg-dark-600/50 backdrop-blur-sm p-7 transition-all duration-500 hover:-translate-y-1 overflow-hidden`}
            >
              <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-current to-transparent opacity-0 group-hover:opacity-100 transition-opacity" style={{ color: reason.accentColor.replace('bg-', '') }} />

              <div className="flex items-start gap-5">
                <div className={`flex-shrink-0 w-12 h-12 rounded-xl ${reason.iconBg} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                  <reason.icon className={`w-6 h-6 ${reason.color}`} />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-base font-bold text-white leading-tight">{reason.title}</h3>
                    <span className="text-xs font-mono text-white/15 font-bold ml-2 flex-shrink-0">{reason.number}</span>
                  </div>
                  <p className="text-sm text-white/50 leading-relaxed">{reason.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="rounded-2xl border border-white/8 bg-dark-600/40 backdrop-blur-sm p-8 md:p-10"
        >
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
            <div>
              <h3 className="text-2xl font-display font-bold text-white mb-2">
                Nossas Garantias para você
              </h3>
              <p className="text-white/50 text-sm">
                Trabalhamos com total transparência e compromisso.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 lg:min-w-[420px]">
              {guarantees.map((item, i) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, x: 20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.6 + i * 0.06 }}
                  className="flex items-center gap-2.5"
                >
                  <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                  <span className="text-sm text-white/70">{item}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
