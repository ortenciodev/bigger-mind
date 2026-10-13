'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Code2, Brain, Globe, Puzzle, Building2, Bot, ArrowRight, MessageCircle } from 'lucide-react'
import { Badge } from '@/components/ui/Badge'
import { getWhatsAppLink } from '@/utils/whatsapp'
import { WHATSAPP_MESSAGES } from '@/utils/whatsapp'

const services = [
  {
    icon: Code2,
    title: 'Desenvolvimento de Software',
    description: 'Sistemas robustos e escaláveis desenvolvidos sob medida. Do backend ao frontend, criamos soluções completas adaptadas às necessidades do seu negócio.',
    highlights: ['APIs RESTful & GraphQL', 'Arquitetura de microsserviços', 'Bancos de dados otimizados'],
    color: 'primary',
    gradient: 'from-primary/20 to-primary/5',
    border: 'border-primary/20',
    iconBg: 'bg-primary/15',
    iconColor: 'text-primary',
    glowColor: 'hover:shadow-glow',
    message: WHATSAPP_MESSAGES.software,
  },
  {
    icon: Brain,
    title: 'Automação com IA',
    description: 'Integre inteligência artificial ao seu negócio. Reduza custos operacionais e aumente eficiência com automações inteligentes baseadas em modelos de linguagem avançados.',
    highlights: ['ChatGPT & Claude API', 'Processamento de documentos', 'Análise preditiva'],
    color: 'secondary',
    gradient: 'from-secondary/20 to-secondary/5',
    border: 'border-secondary/20',
    iconBg: 'bg-secondary/15',
    iconColor: 'text-secondary-300',
    glowColor: 'hover:shadow-glow-purple',
    message: WHATSAPP_MESSAGES.ai,
  },
  {
    icon: Globe,
    title: 'Sites Profissionais',
    description: 'Criamos sites institucionais e landing pages de alta conversão. Design impactante, SEO otimizado e performance excepcional para impressionar seus visitantes.',
    highlights: ['Next.js & React', 'SEO técnico avançado', 'Core Web Vitals 100'],
    color: 'primary',
    gradient: 'from-cyan-500/20 to-cyan-500/5',
    border: 'border-cyan-500/20',
    iconBg: 'bg-cyan-500/15',
    iconColor: 'text-cyan-400',
    glowColor: 'hover:shadow-[0_0_30px_rgba(6,182,212,0.3)]',
    message: WHATSAPP_MESSAGES.website,
  },
  {
    icon: Puzzle,
    title: 'APIs e Integrações',
    description: 'Conectamos sistemas, plataformas e serviços através de APIs robustas. Integrações com ERPs, CRMs, gateways de pagamento e muito mais.',
    highlights: ['Integrações Stripe & Asaas', 'Webhooks & eventos', 'Documentação completa'],
    color: 'primary',
    gradient: 'from-amber-500/20 to-amber-500/5',
    border: 'border-amber-500/20',
    iconBg: 'bg-amber-500/15',
    iconColor: 'text-amber-400',
    glowColor: 'hover:shadow-[0_0_30px_rgba(245,158,11,0.3)]',
    message: WHATSAPP_MESSAGES.integration,
  },
  {
    icon: Building2,
    title: 'Sistemas Empresariais',
    description: 'ERPs, CRMs e sistemas de gestão customizados. Automatize processos, centralize informações e aumente a produtividade da sua equipe.',
    highlights: ['ERP & CRM sob medida', 'Dashboards analytics', 'Controle de permissões'],
    color: 'secondary',
    gradient: 'from-rose-500/20 to-rose-500/5',
    border: 'border-rose-500/20',
    iconBg: 'bg-rose-500/15',
    iconColor: 'text-rose-400',
    glowColor: 'hover:shadow-[0_0_30px_rgba(244,63,94,0.3)]',
    message: WHATSAPP_MESSAGES.erp,
  },
  {
    icon: Bot,
    title: 'Bots Inteligentes',
    description: 'Chatbots e assistentes virtuais com IA para atendimento 24/7. Qualifique leads, responda dúvidas e automatize o relacionamento com seus clientes.',
    highlights: ['WhatsApp & Telegram', 'NLP avançado', 'Qualificação automática de leads'],
    color: 'secondary',
    gradient: 'from-violet-500/20 to-violet-500/5',
    border: 'border-violet-500/20',
    iconBg: 'bg-violet-500/15',
    iconColor: 'text-violet-400',
    glowColor: 'hover:shadow-[0_0_30px_rgba(139,92,246,0.3)]',
    message: WHATSAPP_MESSAGES.bot,
  },
]

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

export function ServicesSection() {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="servicos" ref={ref} className="relative section-padding bg-dark-800 overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-60" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-64 bg-gradient-to-b from-primary/5 to-transparent pointer-events-none" />

      <div className="container-custom relative">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <Badge variant="primary" className="mb-4">
            <Code2 className="w-3 h-3" />
            Nossas Soluções
          </Badge>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-5">
            Serviços que{' '}
            <span className="text-gradient">Transformam</span>
            <br />
            seu Negócio
          </h2>
          <p className="text-lg text-white/50 max-w-2xl mx-auto leading-relaxed">
            Desde o desenvolvimento de sistemas complexos até automações inteligentes com IA.
            Entregamos tecnologia que gera resultados reais e mensuráveis.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service) => (
            <motion.div
              key={service.title}
              variants={itemVariants}
              className={`group relative rounded-2xl border ${service.border} bg-gradient-to-br ${service.gradient} backdrop-blur-sm overflow-hidden transition-all duration-500 ${service.glowColor} hover:-translate-y-1 cursor-default`}
            >
              <div className="absolute inset-0 bg-dark-600/70" />
              <div className="relative p-7">
                <div className={`inline-flex w-12 h-12 rounded-xl ${service.iconBg} items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className={`w-6 h-6 ${service.iconColor}`} />
                </div>

                <h3 className="text-lg font-bold text-white mb-3 leading-tight">{service.title}</h3>
                <p className="text-sm text-white/50 leading-relaxed mb-5">{service.description}</p>

                <ul className="flex flex-col gap-2 mb-6">
                  {service.highlights.map(h => (
                    <li key={h} className="flex items-center gap-2">
                      <div className={`w-1.5 h-1.5 rounded-full ${service.iconBg} flex-shrink-0`}>
                        <div className={`w-full h-full rounded-full ${service.iconColor.replace('text-', 'bg-')}`} />
                      </div>
                      <span className="text-xs text-white/50">{h}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href={getWhatsAppLink({ message: service.message })}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center gap-1.5 text-sm font-semibold ${service.iconColor} hover:gap-3 transition-all duration-200`}
                >
                  <MessageCircle className="w-4 h-4" />
                  Saber mais
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
