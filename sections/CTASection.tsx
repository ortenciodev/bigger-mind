'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { MessageCircle, ArrowRight, Rocket, CheckCircle2, Clock, Shield } from 'lucide-react'
import { getWhatsAppLink } from '@/utils/whatsapp'

const quickBenefits = [
  { icon: Clock, text: 'Resposta em até 30 minutos' },
  { icon: Shield, text: 'Sem compromisso inicial' },
  { icon: CheckCircle2, text: 'Diagnóstico gratuito' },
]

export function CTASection() {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section ref={ref} className="relative section-padding overflow-hidden bg-dark-900">
      <div className="absolute inset-0 bg-grid-pattern" />

      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-[500px] h-[400px] bg-primary/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[400px] bg-secondary/10 rounded-full blur-[120px]" />
      </div>

      <div className="container-custom relative">
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8 }}
          className="relative rounded-3xl overflow-hidden border border-white/10"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-primary/15 via-dark-600/90 to-secondary/15" />
          <div className="absolute inset-0 bg-grid-pattern opacity-40" />

          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent" />
          <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-secondary/60 to-transparent" />

          <div className="relative px-6 py-16 md:px-12 md:py-20 lg:px-20 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 }}
            >
              <div className="inline-flex w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-secondary items-center justify-center mb-6 shadow-glow-lg">
                <Rocket className="w-8 h-8 text-dark-900" />
              </div>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 }}
              className="font-display text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-5 leading-tight"
            >
              Pronto para Transformar
              <br />
              <span className="text-gradient">seu Negócio</span>?
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4 }}
              className="text-lg md:text-xl text-white/55 max-w-2xl mx-auto mb-8 leading-relaxed"
            >
              Fale com nossos especialistas agora mesmo. Vamos entender seu projeto, propor a melhor solução e te mostrar como a tecnologia pode elevar sua empresa ao próximo nível.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.5 }}
              className="flex flex-wrap justify-center gap-4 mb-10"
            >
              {quickBenefits.map((b) => (
                <div key={b.text} className="flex items-center gap-2">
                  <b.icon className="w-4 h-4 text-primary flex-shrink-0" />
                  <span className="text-sm text-white/60">{b.text}</span>
                </div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <a
                href={getWhatsAppLink({ message: 'Olá! Quero iniciar um projeto com a BIGGER MIND. Podem me atender agora?' })}
                target="_blank"
                rel="noopener noreferrer"
              >
                <motion.button
                  whileHover={{ scale: 1.03, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="inline-flex items-center gap-3 bg-[#25D366] hover:bg-[#20BC5C] text-white font-bold px-10 py-5 rounded-2xl text-lg shadow-[0_8px_40px_rgba(37,211,102,0.4)] hover:shadow-[0_8px_60px_rgba(37,211,102,0.6)] transition-all duration-300"
                >
                  <MessageCircle className="w-6 h-6 fill-white" />
                  Falar pelo WhatsApp Agora
                  <ArrowRight className="w-5 h-5" />
                </motion.button>
              </a>

              <a
                href={getWhatsAppLink({ message: 'Olá! Gostaria de agendar uma reunião de diagnóstico gratuito com a equipe da BIGGER MIND.' })}
                target="_blank"
                rel="noopener noreferrer"
              >
                <motion.button
                  whileHover={{ scale: 1.02, y: -1 }}
                  whileTap={{ scale: 0.98 }}
                  className="inline-flex items-center gap-2 border-2 border-white/20 hover:border-white/40 text-white/80 hover:text-white font-semibold px-8 py-5 rounded-2xl text-base backdrop-blur-sm transition-all duration-300"
                >
                  Agendar diagnóstico grátis
                </motion.button>
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.8 }}
              className="mt-10 flex flex-wrap items-center justify-center gap-6"
            >
              {[
                '✦ Orçamento sem compromisso',
                '✦ NDA assinado na primeira reunião',
                '✦ Proposta em até 48h',
              ].map(item => (
                <span key={item} className="text-xs text-white/35">{item}</span>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
