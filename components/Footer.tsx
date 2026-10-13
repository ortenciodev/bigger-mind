'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Mail, Phone, MapPin, ArrowUpRight } from 'lucide-react'
import { getWhatsAppLink } from '@/utils/whatsapp'

const footerLinks = {
  services: [
    { label: 'Desenvolvimento de Software', href: '#servicos' },
    { label: 'Automação com IA', href: '#servicos' },
    { label: 'Sites Profissionais', href: '#servicos' },
    { label: 'APIs e Integrações', href: '#servicos' },
    { label: 'Sistemas Empresariais', href: '#servicos' },
    { label: 'Bots Inteligentes', href: '#servicos' },
  ],
  company: [
    { label: 'Por Que Nós', href: '#por-que-nos' },
    { label: 'Contato', href: '#contato' },
  ],
}

export function Footer() {
  const scrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId.replace('#', ''))
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer className="relative bg-dark-900 border-t border-white/8 overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-50" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-9 h-9 flex items-center justify-center">
                <Image src="/logo.jpeg" alt="Bigger Mind" width={36} height={36} className="object-contain" />
              </div>
              <span className="text-lg font-display font-bold text-white tracking-wide">BIGGER MIND</span>
            </div>
            <p className="text-sm text-white/50 leading-relaxed">
              Transformamos ideias em soluções digitais de alto impacto. Tecnologia que gera resultados reais para o seu negócio.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white/80 uppercase tracking-wider mb-5">Serviços</h3>
            <ul className="flex flex-col gap-2.5">
              {footerLinks.services.map(link => (
                <li key={link.label}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-sm text-white/45 hover:text-primary transition-colors duration-200 text-left flex items-center gap-1 group"
                  >
                    <span>{link.label}</span>
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white/80 uppercase tracking-wider mb-5">Empresa</h3>
            <ul className="flex flex-col gap-2.5">
              {footerLinks.company.map(link => (
                <li key={link.label}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-sm text-white/45 hover:text-primary transition-colors duration-200 text-left"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div id="contato">
            <h3 className="text-sm font-semibold text-white/80 uppercase tracking-wider mb-5">Contato</h3>
            <ul className="flex flex-col gap-4">
              <li>
                <a
                  href={getWhatsAppLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 group"
                >
                  <div className="w-8 h-8 rounded-lg bg-[#25D366]/15 flex items-center justify-center flex-shrink-0 group-hover:bg-[#25D366]/25 transition-colors">
                    <Phone className="w-4 h-4 text-[#25D366]" />
                  </div>
                  <div>
                    <p className="text-xs text-white/30 mb-0.5">WhatsApp</p>
                    <p className="text-sm text-white/60 group-hover:text-white/90 transition-colors">+55 41 99612-8712</p>
                  </div>
                </a>
              </li>
              <li>
                <a href="mailto:biggermit@gmail.com" className="flex items-start gap-3 group">
                  <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                    <Mail className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs text-white/30 mb-0.5">E-mail</p>
                    <p className="text-sm text-white/60 group-hover:text-white/90 transition-colors">biggermit@gmail.com</p>
                  </div>
                </a>
              </li>
              <li>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-secondary/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-4 h-4 text-secondary-300" />
                  </div>
                  <div>
                    <p className="text-xs text-white/30 mb-0.5">Localização</p>
                    <p className="text-sm text-white/60">Curitiba, PR — Brasil</p>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/8 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/30">
            © {new Date().getFullYear()} BIGGER MIND. Todos os direitos reservados.
          </p>
          <p className="text-xs text-white/30">
            Feito com <span className="text-primary">♥</span> para transformar negócios
          </p>
        </div>
      </div>
    </footer>
  )
}
