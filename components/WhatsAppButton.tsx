'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MessageCircle, X } from 'lucide-react'
import { getWhatsAppLink } from '@/utils/whatsapp'

export function WhatsAppButton() {
  const [isExpanded, setIsExpanded] = useState(false)

  const messages = [
    { label: 'Desenvolvimento de Software', key: 'software' },
    { label: 'Automação com IA', key: 'ai' },
    { label: 'Site Profissional', key: 'website' },
    { label: 'Falar com especialista', key: 'general' },
  ]

  const handleClick = (messageKey: string) => {
    const messageMap: Record<string, string> = {
      software: 'Olá! Tenho interesse em Desenvolvimento de Software Sob Medida. Podemos conversar?',
      ai: 'Olá! Quero saber mais sobre Automação com Inteligência Artificial para meu negócio.',
      website: 'Olá! Preciso de um site profissional para minha empresa. Como funciona?',
      general: 'Olá! Vim pelo site da BIGGER MIND e gostaria de falar com um especialista.',
    }
    window.open(
      getWhatsAppLink({ message: messageMap[messageKey] }),
      '_blank',
      'noopener,noreferrer'
    )
    setIsExpanded(false)
  }

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="flex flex-col gap-2 items-end"
          >
            <div className="bg-dark-600/95 backdrop-blur-xl border border-white/10 rounded-2xl p-4 shadow-card w-64">
              <p className="text-xs text-white/50 font-medium uppercase tracking-wider mb-3">
                Como posso ajudar?
              </p>
              <div className="flex flex-col gap-2">
                {messages.map((msg, i) => (
                  <motion.button
                    key={msg.key}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                    onClick={() => handleClick(msg.key)}
                    className="text-left text-sm text-white/80 hover:text-white bg-white/5 hover:bg-[#25D366]/15 border border-white/8 hover:border-[#25D366]/40 rounded-xl px-4 py-3 transition-all duration-200 font-medium"
                  >
                    {msg.label}
                  </motion.button>
                ))}
              </div>
            </div>
            <div className="bg-dark-600/95 backdrop-blur-xl border border-white/10 rounded-xl px-4 py-2 shadow-card">
              <p className="text-xs text-white/60">
                💬 Resposta em <span className="text-[#25D366] font-semibold">minutos</span>
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        onClick={() => setIsExpanded(prev => !prev)}
        className="relative w-16 h-16 rounded-2xl bg-[#25D366] flex items-center justify-center shadow-[0_8px_32px_rgba(37,211,102,0.4)] hover:shadow-[0_8px_48px_rgba(37,211,102,0.6)] transition-shadow duration-300"
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        animate={{ y: isExpanded ? 0 : [0, -4, 0] }}
        transition={isExpanded ? {} : { duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
      >
        <motion.div
          animate={{ rotate: isExpanded ? 90 : 0 }}
          transition={{ duration: 0.25 }}
        >
          {isExpanded ? (
            <X className="w-6 h-6 text-white" />
          ) : (
            <MessageCircle className="w-7 h-7 text-white fill-white" />
          )}
        </motion.div>

        {!isExpanded && (
          <span className="absolute top-0 right-0 w-4 h-4 rounded-full bg-red-500 border-2 border-dark-900 flex items-center justify-center">
            <span className="text-[8px] text-white font-bold">1</span>
          </span>
        )}

        <motion.div
          className="absolute inset-0 rounded-2xl bg-[#25D366]"
          animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
          transition={{ duration: 2.5, repeat: Infinity }}
        />
      </motion.button>
    </div>
  )
}
