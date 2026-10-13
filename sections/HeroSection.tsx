'use client'

import { useEffect, useState, useRef } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, MessageCircle, ChevronDown, Cpu, Database, Globe, Sparkles, Shield, Zap } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { Badge } from '@/components/ui/Badge'
import { getWhatsAppLink } from '@/utils/whatsapp'

const TYPEWRITER_WORDS = [
  'Desenvolvimento de Software',
  'Automação com Inteligência Artificial',
  'Sistemas Empresariais',
  'Integrações & APIs',
  'Sites de Alto Impacto',
]

const stats = [
  { value: '50+', label: 'Projetos Entregues' },
  { value: '98%', label: 'Satisfação dos Clientes' },
  { value: '5x', label: 'Ganho de Produtividade' },
  { value: '24/7', label: 'Suporte Dedicado' },
]

const techBadges = [
  { icon: Cpu, label: 'React & Next.js' },
  { icon: Database, label: 'Node.js & APIs' },
  { icon: Sparkles, label: 'OpenAI & IA' },
  { icon: Globe, label: 'Cloud & DevOps' },
  { icon: Shield, label: 'Segurança' },
]

function TypewriterText() {
  const [wordIndex, setWordIndex] = useState(0)
  const [charIndex, setCharIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)
  const [displayText, setDisplayText] = useState('')

  useEffect(() => {
    const currentWord = TYPEWRITER_WORDS[wordIndex]
    const speed = isDeleting ? 40 : 80

    const timer = setTimeout(() => {
      if (!isDeleting) {
        setDisplayText(currentWord.slice(0, charIndex + 1))
        setCharIndex(prev => prev + 1)
        if (charIndex + 1 === currentWord.length) {
          setTimeout(() => setIsDeleting(true), 1800)
        }
      } else {
        setDisplayText(currentWord.slice(0, charIndex - 1))
        setCharIndex(prev => prev - 1)
        if (charIndex - 1 === 0) {
          setIsDeleting(false)
          setWordIndex(prev => (prev + 1) % TYPEWRITER_WORDS.length)
        }
      }
    }, speed)

    return () => clearTimeout(timer)
  }, [charIndex, isDeleting, wordIndex])

  return (
    <span className="text-gradient">
      {displayText}
      <span className="inline-block w-0.5 h-[0.9em] bg-primary ml-1 animate-blink align-middle" />
    </span>
  )
}

function MockDashboard() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 60, rotateY: -10 }}
      animate={{ opacity: 1, x: 0, rotateY: 0 }}
      transition={{ duration: 1, delay: 0.4, ease: 'easeOut' }}
      className="relative w-full max-w-lg mx-auto"
    >
      <div className="relative z-10 rounded-2xl border border-white/12 bg-dark-600/80 backdrop-blur-xl shadow-[0_32px_80px_rgba(0,0,0,0.6)] overflow-hidden">
        <div className="flex items-center gap-2 px-4 py-3 border-b border-white/8 bg-dark-700/50">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-red-500/80" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
            <div className="w-3 h-3 rounded-full bg-green-500/80" />
          </div>
          <div className="flex-1 mx-4">
            <div className="h-5 rounded-md bg-dark-400/60 flex items-center px-3 gap-2">
              <Shield className="w-3 h-3 text-primary/60" />
              <span className="text-[10px] text-white/30 font-mono">biggermind.app/dashboard</span>
            </div>
          </div>
        </div>

        <div className="p-5">
          <div className="flex items-center justify-between mb-5">
            <div>
              <p className="text-xs text-white/40 font-medium mb-0.5">BIGGER MIND Platform</p>
              <h3 className="text-sm font-bold text-white">Dashboard Principal</h3>
            </div>
            <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/15 border border-emerald-500/30">
              <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-[10px] text-emerald-400 font-semibold">ONLINE</span>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-3 mb-5">
            {[
              { label: 'Req/s', value: '2.4K', trend: '+12%', color: 'text-primary' },
              { label: 'Uptime', value: '99.9%', trend: '30d', color: 'text-emerald-400' },
              { label: 'Latência', value: '18ms', trend: '-5%', color: 'text-amber-400' },
            ].map((item) => (
              <div key={item.label} className="rounded-xl bg-dark-500/60 border border-white/5 p-3">
                <p className="text-[10px] text-white/40 mb-1">{item.label}</p>
                <p className={`text-lg font-bold font-mono ${item.color}`}>{item.value}</p>
                <p className="text-[10px] text-white/30">{item.trend}</p>
              </div>
            ))}
          </div>

          <div className="rounded-xl bg-dark-500/50 border border-white/5 p-4 mb-4">
            <div className="flex items-center justify-between mb-3">
              <p className="text-xs font-semibold text-white/60">Performance — 7 dias</p>
              <p className="text-xs text-primary font-mono">+24.5%</p>
            </div>
            <div className="flex items-end gap-1.5 h-16">
              {[35, 52, 41, 68, 58, 80, 92].map((h, i) => (
                <motion.div
                  key={i}
                  className="flex-1 rounded-t-md bg-gradient-to-t from-primary/40 to-primary/80"
                  initial={{ height: 0 }}
                  animate={{ height: `${h}%` }}
                  transition={{ delay: 0.8 + i * 0.07, duration: 0.5, ease: 'easeOut' }}
                />
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-2">
            {[
              { label: 'API Gateway', status: 'Operacional', pct: 98, color: 'bg-emerald-400' },
              { label: 'Database Cluster', status: 'Operacional', pct: 100, color: 'bg-emerald-400' },
              { label: 'IA Engine', status: 'Processando', pct: 74, color: 'bg-primary' },
            ].map((service) => (
              <div key={service.label} className="flex items-center gap-3">
                <div className={`w-1.5 h-1.5 rounded-full ${service.color} flex-shrink-0`} />
                <span className="text-xs text-white/60 flex-1">{service.label}</span>
                <div className="w-20 h-1 bg-dark-400 rounded-full overflow-hidden">
                  <motion.div
                    className={`h-full ${service.color} rounded-full`}
                    initial={{ width: 0 }}
                    animate={{ width: `${service.pct}%` }}
                    transition={{ delay: 1.2, duration: 0.8 }}
                  />
                </div>
                <span className="text-[10px] text-white/30 font-mono w-8 text-right">{service.pct}%</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <motion.div
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute -top-4 -right-4 z-20 glass-dark rounded-xl px-3 py-2 border border-primary/20 shadow-glow-sm"
      >
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-lg bg-primary/15 flex items-center justify-center">
            <Zap className="w-3.5 h-3.5 text-primary" />
          </div>
          <div>
            <p className="text-[10px] text-white/40">IA Processou</p>
            <p className="text-xs font-bold text-white">1.2M tokens/dia</p>
          </div>
        </div>
      </motion.div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        className="absolute -bottom-4 -left-4 z-20 glass-dark rounded-xl px-3 py-2 border border-secondary/20 shadow-glow-purple"
      >
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-lg bg-secondary/15 flex items-center justify-center">
            <Sparkles className="w-3.5 h-3.5 text-secondary-300" />
          </div>
          <div>
            <p className="text-[10px] text-white/40">Automações Ativas</p>
            <p className="text-xs font-bold text-white">48 bots online</p>
          </div>
        </div>
      </motion.div>

      <motion.div
        animate={{ y: [0, -6, 0] }}
        transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
        className="absolute top-1/2 -left-10 z-20 glass-dark rounded-xl px-3 py-2 border border-emerald-500/20"
      >
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <p className="text-xs text-emerald-400 font-semibold">+47% eficiência</p>
        </div>
      </motion.div>

      <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-primary/5 to-transparent pointer-events-none" />
      <div className="absolute -inset-4 bg-gradient-radial from-primary/8 via-transparent to-transparent rounded-3xl pointer-events-none" />
    </motion.div>
  )
}

export function HeroSection() {
  const scrollToServices = () => {
    document.getElementById('servicos')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden bg-dark-900">
      <div className="absolute inset-0 bg-grid-pattern" />
      <div className="absolute inset-0 bg-gradient-hero" />

      <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-secondary/8 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-primary/6 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16 lg:pt-32 lg:pb-24 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-6"
            >
              <Badge variant="primary" className="text-xs">
                <Sparkles className="w-3 h-3" />
                Tecnologia que Transforma Negócios
              </Badge>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.1] text-white mb-4"
            >
              <span className="text-gradient">Especialistas em</span>
              <span className="block relative">
                <span className="invisible block" aria-hidden="true">
                  Automação com Inteligência Artificial
                </span>
                <span className="absolute inset-0">
                  <TypewriterText />
                </span>
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-lg text-white/55 leading-relaxed mb-8 max-w-xl"
            >
              Desenvolvemos software sob medida, sistemas web, automações com IA e muito mais.
              Transforme seu negócio com tecnologia de <span className="text-white/80 font-medium">alta performance</span> e resultados comprovados.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 mb-10"
            >
              <a
                href={getWhatsAppLink({ message: 'Olá! Quero iniciar um projeto com a BIGGER MIND. Podemos conversar?' })}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="primary" size="lg" className="w-full sm:w-auto font-bold shadow-glow">
                  <MessageCircle className="w-5 h-5" />
                  Iniciar Projeto
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </a>
              <Button
                variant="secondary"
                size="lg"
                className="w-full sm:w-auto"
                onClick={scrollToServices}
              >
                Ver Nossos Serviços
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="flex flex-wrap gap-2"
            >
              {techBadges.map((tech, i) => (
                <motion.div
                  key={tech.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5 + i * 0.08 }}
                >
                  <Badge variant="glass" className="gap-1.5">
                    <tech.icon className="w-3 h-3 text-primary" />
                    {tech.label}
                  </Badge>
                </motion.div>
              ))}
            </motion.div>
          </div>

          <div className="hidden lg:block">
            <MockDashboard />
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="mt-20 pt-10 border-t border-white/8"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 + i * 0.1 }}
                className="text-center"
              >
                <div className="text-3xl sm:text-4xl font-display font-bold text-gradient mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-white/40 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      <motion.button
        onClick={scrollToServices}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/30 hover:text-white/60 transition-colors"
      >
        <span className="text-xs font-medium tracking-wider uppercase">Explorar</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ChevronDown className="w-5 h-5" />
        </motion.div>
      </motion.button>
    </section>
  )
}
