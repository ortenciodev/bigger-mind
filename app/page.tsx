'use client'

import { LoadingScreen } from '@/components/LoadingScreen'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'
import { WhatsAppButton } from '@/components/WhatsAppButton'
import { HeroSection } from '@/sections/HeroSection'
import { ServicesSection } from '@/sections/ServicesSection'
import { WhyUsSection } from '@/sections/WhyUsSection'
import { CTASection } from '@/sections/CTASection'

export default function Home() {
  return (
    <>
      <LoadingScreen />
      <Navbar />
      <main className="overflow-hidden">
        <HeroSection />
        <ServicesSection />
        <WhyUsSection />
        <CTASection />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}
