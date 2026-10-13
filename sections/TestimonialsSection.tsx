'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Star, Quote, MessageCircle } from 'lucide-react'
import { Badge } from '@/components/ui/Badge'

const testimonials = [
  {
    name: 'Carlos Eduardo Mendes',
    role: 'CEO',
    company: 'TechFlow Solutions',
    avatar: 'CM',
    avatarColor: 'from-primary to-cyan-400',
    rating: 5,
    text: 'A BIGGER MIND transformou completamente nossa operação. O sistema desenvolvido reduziu nossos custos operacionais em 65% e triplicou nossa produtividade em menos de 4 meses. Equipe extremamente competente e parceira de verdade.',
    highlight: '65% redução de custos',
    category: 'Sistema de Gestão',
  },
  {
    name: 'Ana Lúcia Ferreira',
    role: 'Diretora de TI',
    company: 'Grupo Prisma',
    avatar: 'AF',
    avatarColor: 'from-secondary to-violet-400',
    rating: 5,
    text: 'Implementaram nossa plataforma de e-commerce em tempo recorde. A qualidade do código, a arquitetura e a documentação são impecáveis. O projeto ficou acima das expectativas tanto em performance quanto em design.',
    highlight: 'Entrega em tempo recorde',
    category: 'E-commerce',
  },
  {
    name: 'Roberto Costa',
    role: 'Fundador',
    company: 'StartupXP',
    avatar: 'RC',
    avatarColor: 'from-emerald-400 to-teal-500',
    rating: 5,
    text: 'O chatbot com IA desenvolvido pela BIGGER MIND reduziu nossa equipe de suporte em 60% mantendo 97% de satisfação dos clientes. O ROI foi atingido em apenas 2 meses. Melhor investimento em tecnologia que já fiz.',
    highlight: 'ROI em 2 meses',
    category: 'IA & Automação',
  },
  {
    name: 'Marina Santos',
    role: 'COO',
    company: 'LogiPro Brasil',
    avatar: 'MS',
    avatarColor: 'from-amber-400 to-orange-500',
    rating: 5,
    text: 'Profissionalismo, entrega rigorosa dentro do prazo e resultado acima do esperado. O ERP customizado que desenvolveram para nós integrou todos os nossos setores. Parceria de longo prazo garantida.',
    highlight: 'Entrega no prazo + resultado superior',
    category: 'ERP Corporativo',
  },
  {
    name: 'Diego Alves Neto',
    role: 'CTO',
    company: 'FinanzApp',
    avatar: 'DN',
    avatarColor: 'from-rose-400 to-pink-500',
    rating: 5,
    text: 'Precisávamos de um gateway de pagamentos robusto e seguro. A BIGGER MIND entregou uma solução que hoje processa R$12 milhões por mês com 99,99% de uptime. Suporte técnico sempre presente e muito ágil.',
    highlight: 'R$12M/mês processados',
    category: 'Fintech',
  },
  {
    name: 'Patrícia Oliveira',
    role: 'Gerente de Projetos',
    company: 'InnovateCorp',
    avatar: 'PO',
    avatarColor: 'from-violet-400 to-purple-500',
    rating: 5,
    text: 'Nossa plataforma de BI com IA transformou como tomamos decisões. Antes aguardávamos dias por relatórios, agora temos insights em tempo real. A equipe da BIGGER MIND é top e o pós-venda é exemplar.',
    highlight: 'Decisões em tempo real',
    category: 'Business Intelligence',
  },
]

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={`w-3.5 h-3.5 ${i < rating ? 'text-amber-400 fill-amber-400' : 'text-white/20'}`}
        />
      ))}
    </div>
  )
}

export function TestimonialsSection() {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="depoimentos" ref={ref} className="relative section-padding bg-dark-800 overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-50" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-gradient-radial from-secondary/6 to-transparent pointer-events-none" />

      <div className="container-custom relative">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <Badge variant="secondary" className="mb-4">
            <Star className="w-3 h-3 fill-current" />
            Depoimentos Reais
          </Badge>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-5">
            O Que Nossos{' '}
            <span className="text-gradient">Clientes</span>{' '}
            Dizem
          </h2>
          <p className="text-lg text-white/50 max-w-2xl mx-auto leading-relaxed">
            Resultados comprovados. Parcerias reais. Empresas que confiaram na BIGGER MIND e transformaram seus negócios.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group relative rounded-2xl border border-white/8 bg-dark-600/50 backdrop-blur-sm p-6 transition-all duration-500 hover:-translate-y-1 hover:border-white/15 hover:shadow-card"
            >
              <Quote className="w-8 h-8 text-primary/20 mb-4" />

              <p className="text-sm text-white/60 leading-relaxed mb-5 italic">
                &ldquo;{t.text}&rdquo;
              </p>

              <div className="rounded-xl bg-dark-500/60 border border-white/5 px-4 py-2.5 mb-5 inline-block">
                <p className="text-xs text-primary font-semibold">&ldquo;{t.highlight}&rdquo;</p>
              </div>

              <div className="flex items-center justify-between border-t border-white/8 pt-4">
                <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${t.avatarColor} flex items-center justify-center flex-shrink-0`}>
                    <span className="text-xs font-bold text-white">{t.avatar}</span>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-white">{t.name}</p>
                    <p className="text-xs text-white/40">{t.role} · {t.company}</p>
                  </div>
                </div>
                <div className="flex flex-col items-end gap-1">
                  <StarRating rating={t.rating} />
                  <Badge variant="glass" className="text-[10px]">{t.category}</Badge>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.7 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-6 glass-dark rounded-2xl px-8 py-5 border border-white/8">
            <div className="text-center">
              <div className="text-3xl font-display font-bold text-gradient">4.9</div>
              <div className="text-xs text-white/40 mt-0.5">Avaliação Média</div>
            </div>
            <div className="w-px h-10 bg-white/10" />
            <div className="flex flex-col items-center">
              <div className="flex gap-1 mb-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-amber-400 fill-amber-400" />
                ))}
              </div>
              <p className="text-xs text-white/40">Baseado em 140+ avaliações</p>
            </div>
            <div className="w-px h-10 bg-white/10" />
            <div>
              <a
                href="https://wa.me/5511999999999?text=Ol%C3%A1!+Gostaria+de+conversar+sobre+um+projeto+para+minha+empresa."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-semibold text-[#25D366] hover:underline"
              >
                <MessageCircle className="w-4 h-4" />
                Seja o próximo caso de sucesso
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
