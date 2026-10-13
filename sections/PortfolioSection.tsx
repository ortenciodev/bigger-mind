'use client'

import { useRef, useState } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { ExternalLink, MessageCircle, Layers, Brain, ShoppingBag, Building, CreditCard, BarChart2 } from 'lucide-react'
import { Badge } from '@/components/ui/Badge'
import { getWhatsAppLink } from '@/utils/whatsapp'

const projects = [
  {
    icon: Layers,
    category: 'Sistema de Gestão',
    title: 'LogiTrack Pro',
    description: 'Plataforma completa para gestão de frota e logística com rastreamento em tempo real, dashboards executivos e alertas automáticos.',
    tags: ['Next.js', 'Node.js', 'PostgreSQL', 'WebSockets'],
    gradient: 'from-primary/30 via-primary/10 to-transparent',
    borderColor: 'border-primary/25',
    iconBg: 'bg-primary/15',
    iconColor: 'text-primary',
    stats: [{ label: 'Veículos Gerenciados', value: '2.400+' }, { label: 'Redução de Custo', value: '38%' }],
    result: 'Redução de 38% nos custos operacionais da frota',
  },
  {
    icon: ShoppingBag,
    category: 'E-commerce',
    title: 'NexStore Platform',
    description: 'Loja virtual de alta performance com gestão inteligente de estoque, integração com marketplaces e checkout otimizado.',
    tags: ['React', 'Shopify API', 'Stripe', 'Redis'],
    gradient: 'from-emerald-500/30 via-emerald-500/10 to-transparent',
    borderColor: 'border-emerald-500/25',
    iconBg: 'bg-emerald-500/15',
    iconColor: 'text-emerald-400',
    stats: [{ label: 'Conversão', value: '+127%' }, { label: 'Produtos', value: '15K+' }],
    result: 'Aumento de 127% na taxa de conversão em 60 dias',
  },
  {
    icon: Brain,
    category: 'IA & Automação',
    title: 'AtendIA',
    description: 'Assistente virtual treinado com dados do cliente para atendimento 24/7. Integração com WhatsApp, CRM e sistema de tickets.',
    tags: ['OpenAI GPT-4', 'Python', 'FastAPI', 'WhatsApp API'],
    gradient: 'from-secondary/30 via-secondary/10 to-transparent',
    borderColor: 'border-secondary/25',
    iconBg: 'bg-secondary/15',
    iconColor: 'text-secondary-300',
    stats: [{ label: 'Satisfação', value: '97%' }, { label: 'Atendimentos/dia', value: '3.200+' }],
    result: 'Equipe de suporte reduzida em 60% mantendo 97% de satisfação',
  },
  {
    icon: Building,
    category: 'ERP Corporativo',
    title: 'CorpSuite ERP',
    description: 'Sistema de gestão empresarial completo com módulos de finanças, RH, estoque, compras e relatórios executivos em tempo real.',
    tags: ['React', 'Node.js', 'MySQL', 'AWS'],
    gradient: 'from-amber-500/30 via-amber-500/10 to-transparent',
    borderColor: 'border-amber-500/25',
    iconBg: 'bg-amber-500/15',
    iconColor: 'text-amber-400',
    stats: [{ label: 'Usuários Ativos', value: '850+' }, { label: 'Produtividade', value: '+4.2x' }],
    result: 'Produtividade aumentada em 4.2x após implementação',
  },
  {
    icon: CreditCard,
    category: 'Fintech & Pagamentos',
    title: 'PayFlex Gateway',
    description: 'Gateway de pagamentos personalizado com suporte a múltiplas bandeiras, split de pagamentos, antifraude e relatórios avançados.',
    tags: ['Node.js', 'Stripe', 'Asaas', 'PCI-DSS'],
    gradient: 'from-rose-500/30 via-rose-500/10 to-transparent',
    borderColor: 'border-rose-500/25',
    iconBg: 'bg-rose-500/15',
    iconColor: 'text-rose-400',
    stats: [{ label: 'Volume Mensal', value: 'R$12M+' }, { label: 'Uptime', value: '99.99%' }],
    result: 'Processando R$12M/mês com 99.99% de uptime',
  },
  {
    icon: BarChart2,
    category: 'Business Intelligence',
    title: 'InsightFlow',
    description: 'Plataforma de BI com visualizações interativas em tempo real, relatórios automatizados e insights acionáveis gerados por IA.',
    tags: ['React', 'Python', 'Metabase', 'BigQuery'],
    gradient: 'from-violet-500/30 via-violet-500/10 to-transparent',
    borderColor: 'border-violet-500/25',
    iconBg: 'bg-violet-500/15',
    iconColor: 'text-violet-400',
    stats: [{ label: 'Dashboards Ativos', value: '240+' }, { label: 'Decisões/dia', value: '1.800+' }],
    result: 'Tomada de decisão 5x mais rápida com dados em tempo real',
  },
]

type Project = typeof projects[0]

function ProjectCard({ project, index, isInView }: { project: Project, index: number, isInView: boolean }) {
  const [hovered, setHovered] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 35 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className={`group relative rounded-2xl border ${project.borderColor} bg-dark-600/60 backdrop-blur-sm overflow-hidden cursor-default transition-all duration-500 hover:-translate-y-2 hover:shadow-card-hover`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className={`h-44 bg-gradient-to-br ${project.gradient} relative overflow-hidden`}>
        <div className="absolute inset-0 bg-dark-700/60" />
        <div className="absolute inset-0 bg-grid-pattern opacity-50" />

        <div className="absolute top-4 left-4 right-4 flex items-start justify-between">
          <Badge variant="glass" className="text-xs">{project.category}</Badge>
          <div className={`w-10 h-10 rounded-xl ${project.iconBg} flex items-center justify-center`}>
            <project.icon className={`w-5 h-5 ${project.iconColor}`} />
          </div>
        </div>

        <div className="absolute bottom-4 left-4 right-4 grid grid-cols-2 gap-3">
          {project.stats.map(stat => (
            <div key={stat.label} className="glass-dark rounded-lg p-2.5">
              <p className={`text-lg font-bold font-mono ${project.iconColor}`}>{stat.value}</p>
              <p className="text-[10px] text-white/40">{stat.label}</p>
            </div>
          ))}
        </div>

        <AnimatePresence>
          {hovered && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-dark-900/80 backdrop-blur-sm flex items-center justify-center"
            >
              <motion.div
                initial={{ scale: 0.9, y: 10 }}
                animate={{ scale: 1, y: 0 }}
                className="text-center px-6"
              >
                <p className={`text-sm font-semibold ${project.iconColor} mb-4`}>{project.result}</p>
                <a
                  href={getWhatsAppLink({ message: `Olá! Vi o projeto ${project.title} no site e gostaria de saber mais sobre projetos similares.` })}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-xl px-5 py-2.5 text-sm text-white font-semibold hover:bg-white/20 transition-colors"
                >
                  <MessageCircle className="w-4 h-4" />
                  Quero algo similar
                </a>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <div className="p-6">
        <h3 className="text-base font-bold text-white mb-2">{project.title}</h3>
        <p className="text-sm text-white/45 leading-relaxed mb-4">{project.description}</p>
        <div className="flex flex-wrap gap-1.5">
          {project.tags.map(tag => (
            <span key={tag} className="text-[10px] font-medium px-2 py-1 rounded-md bg-white/5 border border-white/8 text-white/45">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  )
}

export function PortfolioSection() {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="portfolio" ref={ref} className="relative section-padding bg-dark-900 overflow-hidden">
      <div className="absolute inset-0 bg-dot-pattern" />
      <div className="absolute right-0 top-0 w-96 h-96 bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute left-0 bottom-0 w-80 h-80 bg-secondary/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="container-custom relative">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <Badge variant="primary" className="mb-4">
            <ExternalLink className="w-3 h-3" />
            Projetos Selecionados
          </Badge>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-5">
            Soluções que{' '}
            <span className="text-gradient">Geramos</span>{' '}
            para
            <br />
            Nossos Clientes
          </h2>
          <p className="text-lg text-white/50 max-w-2xl mx-auto leading-relaxed">
            Uma seleção dos projetos mais impactantes que desenvolvemos. Passe o mouse sobre cada card para ver os resultados.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} isInView={isInView} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="text-center mt-12"
        >
          <p className="text-white/40 text-sm mb-4">
            Quer ver um projeto como o seu?
          </p>
          <a
            href={getWhatsAppLink({ message: 'Olá! Gostaria de conversar sobre um projeto para minha empresa. Podem me atender?' })}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border border-white/12 rounded-xl px-6 py-3 text-sm text-white/70 hover:text-white hover:border-primary/30 hover:bg-primary/5 transition-all duration-300"
          >
            <MessageCircle className="w-4 h-4" />
            Solicitar avaliação do meu projeto
          </a>
        </motion.div>
      </div>
    </section>
  )
}
