# BIGGER MIND — Landing Page

Landing page premium para empresa de tecnologia. Desenvolvida com Next.js 14, TypeScript, TailwindCSS e Framer Motion.

## Stack Tecnológico

- **Framework**: Next.js 14 (App Router)
- **Linguagem**: TypeScript
- **Estilização**: TailwindCSS 3
- **Animações**: Framer Motion 11
- **Ícones**: Lucide React
- **Fontes**: Inter + Space Grotesk (Google Fonts)

## Funcionalidades

- Dark mode premium com glassmorphism e glow effects
- Loading screen com animação de logo
- Navbar responsiva com efeito glassmorphism ao rolar
- Hero com typewriter animado + dashboard mockup
- 7 seções completas com animações ao scroll
- Botão flutuante WhatsApp com menu de opções
- Contadores animados de métricas
- Cards com hover effects sofisticados
- SEO metadata completo com Open Graph
- Totalmente responsivo (mobile, tablet, desktop)
- Performance otimizada

## Seções

| Seção | Descrição |
|---|---|
| Hero | Typewriter, dashboard mockup, stats |
| Serviços | 6 serviços com cards animados |
| Por Que Nós | 6 diferenciais + garantias |
| Benefícios | Contadores animados com ROI |
| Portfólio | 6 projetos com hover reveal |
| Depoimentos | 6 avaliações 5 estrelas |
| CTA Final | Chamada para WhatsApp |

## Pré-requisitos

- Node.js 18.17 ou superior
- npm, yarn ou pnpm

## Instalação e Execução

```bash
# 1. Clone ou acesse o diretório do projeto
cd /caminho/do/projeto

# 2. Instale as dependências
npm install

# 3. Configure as variáveis de ambiente
cp .env.example .env.local
# Edite o .env.local com seu número do WhatsApp

# 4. Execute em desenvolvimento
npm run dev
```

Acesse: http://localhost:3000

## Configuração do WhatsApp

Edite o arquivo `.env.local`:

```env
NEXT_PUBLIC_WHATSAPP_NUMBER=5511999999999
NEXT_PUBLIC_WHATSAPP_MESSAGE=Olá! Vim pelo site e gostaria de conhecer mais sobre os serviços.
```

**Formato do número**: DDI + DDD + Número (apenas dígitos)
- Brasil: `55` + DDD (2 dígitos) + Número (9 dígitos)
- Exemplo SP: `5511987654321`

## Estrutura do Projeto

```
/
├── app/
│   ├── globals.css          # Estilos globais, custom utilities
│   ├── layout.tsx           # Layout raiz, metadata SEO, fontes
│   └── page.tsx             # Página principal (composição)
│
├── components/
│   ├── ui/
│   │   ├── Button.tsx       # Botão com variantes
│   │   ├── Badge.tsx        # Badge/pill
│   │   └── Card.tsx         # Card com motion
│   ├── LoadingScreen.tsx    # Tela de loading inicial
│   ├── Navbar.tsx           # Navegação com mobile menu
│   ├── Footer.tsx           # Rodapé completo
│   └── WhatsAppButton.tsx   # Botão flutuante WhatsApp
│
├── sections/
│   ├── HeroSection.tsx      # Hero com dashboard mockup
│   ├── ServicesSection.tsx  # Grade de serviços
│   ├── WhyUsSection.tsx     # Diferenciais e garantias
│   ├── BenefitsSection.tsx  # Métricas animadas
│   ├── PortfolioSection.tsx # Projetos com hover
│   ├── TestimonialsSection.tsx # Depoimentos
│   └── CTASection.tsx       # Chamada final para ação
│
├── hooks/
│   ├── useNavbar.ts         # Estado e comportamento da navbar
│   └── useScrollAnimation.ts # Animações de scroll + counter
│
├── utils/
│   ├── cn.ts                # Merge de classes Tailwind
│   └── whatsapp.ts          # Links e mensagens WhatsApp
│
├── public/                  # Assets estáticos
├── .env.example             # Variáveis de ambiente (modelo)
├── next.config.js           # Configuração Next.js
├── tailwind.config.ts       # Configuração Tailwind
└── tsconfig.json            # Configuração TypeScript
```

## Personalização

### Informações da Empresa

Busque por `BIGGER MIND` e `biggermind.com.br` nos arquivos e substitua pelo nome/domínio real.

### Cores

Edite `tailwind.config.ts` nas chaves `primary` e `secondary`:

```ts
primary: { DEFAULT: '#00D4FF', ... },   // Azul elétrico
secondary: { DEFAULT: '#7C3AED', ... }, // Roxo
```

### Conteúdo das Seções

Cada seção tem seus dados definidos como arrays/objetos no início do arquivo. Edite-os diretamente:

- **Serviços**: `sections/ServicesSection.tsx` → array `services`
- **Portfólio**: `sections/PortfolioSection.tsx` → array `projects`
- **Depoimentos**: `sections/TestimonialsSection.tsx` → array `testimonials`
- **Métricas**: `sections/BenefitsSection.tsx` → array `benefits`

### SEO

Edite `app/layout.tsx` → objeto `metadata`:

```ts
export const metadata: Metadata = {
  title: { default: 'Sua Empresa | Slogan' },
  description: 'Sua descrição aqui...',
  ...
}
```

## Build para Produção

```bash
npm run build
npm start
```

## Deploy

### Vercel (Recomendado)

```bash
npm install -g vercel
vercel --prod
```

Configure as variáveis de ambiente no painel da Vercel.

### Outros provedores

O projeto exporta arquivos estáticos ou pode ser servido via Node.js.
Consulte a [documentação do Next.js](https://nextjs.org/docs/deployment).

## Scripts

| Comando | Descrição |
|---|---|
| `npm run dev` | Servidor de desenvolvimento |
| `npm run build` | Build para produção |
| `npm start` | Inicia servidor de produção |
| `npm run lint` | Lint do código |

## Licença

Projeto privado. Todos os direitos reservados.
