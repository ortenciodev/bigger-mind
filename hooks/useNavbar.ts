'use client'

import { useState, useEffect, useCallback } from 'react'

export function useNavbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('hero')

  const handleScroll = useCallback(() => {
    const scrollY = window.scrollY
    setScrolled(scrollY > 20)

    const sections = ['hero', 'servicos', 'por-que-nos', 'portfolio', 'depoimentos', 'contato']
    for (const section of sections.reverse()) {
      const el = document.getElementById(section)
      if (el && scrollY >= el.offsetTop - 100) {
        setActiveSection(section)
        break
      }
    }
  }, [])

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [handleScroll])

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [mobileMenuOpen])

  const toggleMobileMenu = () => setMobileMenuOpen(prev => !prev)
  const closeMobileMenu = () => setMobileMenuOpen(false)

  const scrollToSection = (sectionId: string) => {
    closeMobileMenu()
    const el = document.getElementById(sectionId)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return {
    scrolled,
    mobileMenuOpen,
    activeSection,
    toggleMobileMenu,
    closeMobileMenu,
    scrollToSection,
  }
}
