export interface WhatsAppConfig {
  phone?: string
  message?: string
}

export function getWhatsAppLink(config?: WhatsAppConfig): string {
  const phone = config?.phone || process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '5511999999999'
  const message = config?.message || process.env.NEXT_PUBLIC_WHATSAPP_MESSAGE || 'Olá! Vim pelo site da BIGGER MIND e gostaria de saber mais sobre os serviços de desenvolvimento.'
  const encodedMessage = encodeURIComponent(message)
  return `https://wa.me/${phone}?text=${encodedMessage}`
}

export const WHATSAPP_MESSAGES = {
  general: 'Olá! Vim pelo site da BIGGER MIND e gostaria de saber mais sobre os serviços de desenvolvimento.',
  software: 'Olá! Tenho interesse em Desenvolvimento de Software Sob Medida. Podemos conversar?',
  ai: 'Olá! Quero saber mais sobre Automação com Inteligência Artificial para meu negócio.',
  website: 'Olá! Preciso de um site profissional para minha empresa. Como funciona?',
  integration: 'Olá! Tenho interesse em Integração de APIs e Sistemas. Podemos agendar uma conversa?',
  erp: 'Olá! Quero saber mais sobre Sistemas Empresariais (ERP/CRM). Podem me ajudar?',
  bot: 'Olá! Tenho interesse em desenvolver um Chatbot com IA. Quais são as possibilidades?',
  cta: 'Olá! Quero iniciar um projeto com a BIGGER MIND. Podem me atender?',
} as const
