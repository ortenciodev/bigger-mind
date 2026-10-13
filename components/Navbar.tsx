'use client'

import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { useNavbar } from '@/hooks/useNavbar'
import { getWhatsAppLink } from '@/utils/whatsapp'
import { cn } from '@/utils/cn'

const navLinks = [
  { label: 'Serviços', id: 'servicos' },
  { label: 'Por Que Nós', id: 'por-que-nos' },
  { label: 'Contato', id: 'contato' },
]

export function Navbar() {
  const { scrolled, mobileMenuOpen, activeSection, toggleMobileMenu, closeMobileMenu, scrollToSection } = useNavbar()

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
          scrolled
            ? 'bg-dark-800/85 backdrop-blur-xl border-b border-white/8 shadow-[0_4px_24px_rgba(0,0,0,0.4)]'
            : 'bg-transparent'
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            <button
              onClick={() => scrollToSection('hero')}
              className="flex items-center gap-2.5 group"
            >
              <div className="w-9 h-9 flex items-center justify-center">
                <Image src="/logo.jpeg" alt="Bigger Mind" width={36} height={36} className="object-contain" />
              </div>
              <span className="text-lg font-display font-bold text-white tracking-wide">
                BIGGER MIND
              </span>
            </button>

            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map(link => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className={cn(
                    'px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200',
                    activeSection === link.id
                      ? 'text-primary bg-primary/10'
                      : 'text-white/60 hover:text-white hover:bg-white/5'
                  )}
                >
                  {link.label}
                </button>
              ))}
            </div>

            <div className="hidden lg:flex items-center gap-3">
              <a
                href={getWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="primary" size="sm" className="font-semibold">
                  <span>Fale Conosco</span>
                </Button>
              </a>
            </div>

            <button
              onClick={toggleMobileMenu}
              className="lg:hidden p-2 rounded-lg text-white/70 hover:text-white hover:bg-white/5 transition-colors"
              aria-label="Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 lg:hidden"
          >
            <div className="absolute inset-0 bg-dark-900/95 backdrop-blur-xl" onClick={closeMobileMenu} />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ duration: 0.35, ease: 'easeInOut' }}
              className="absolute top-0 right-0 bottom-0 w-80 bg-dark-700 border-l border-white/8 flex flex-col"
            >
              <div className="flex items-center justify-between p-6 border-b border-white/8">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 flex items-center justify-center">
                    <Image src="/logo.jpeg" alt="Bigger Mind" width={32} height={32} className="object-contain" />
                  </div>
                  <span className="text-base font-display font-bold text-white tracking-wide">BIGGER MIND</span>
                </div>
                <button onClick={closeMobileMenu} className="p-2 text-white/50 hover:text-white">
                  <X className="w-5 h-5" />
                </button>
              </div>

              <nav className="flex-1 flex flex-col gap-1 p-6">
                {navLinks.map((link, i) => (
                  <motion.button
                    key={link.id}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.06 }}
                    onClick={() => scrollToSection(link.id)}
                    className={cn(
                      'text-left px-4 py-3.5 rounded-xl font-medium text-sm transition-all',
                      activeSection === link.id
                        ? 'text-primary bg-primary/10 border border-primary/20'
                        : 'text-white/70 hover:text-white hover:bg-white/5'
                    )}
                  >
                    {link.label}
                  </motion.button>
                ))}
              </nav>

              <div className="p-6 border-t border-white/8">
                <a
                  href={getWhatsAppLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={closeMobileMenu}
                  className="block"
                >
                  <Button variant="whatsapp" size="lg" className="w-full">
                    💬 Fale pelo WhatsApp
                  </Button>
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
