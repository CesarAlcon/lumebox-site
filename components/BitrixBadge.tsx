'use client'

import { motion, useReducedMotion } from 'framer-motion'

function BitrixLogo() {
  return (
    <svg
      viewBox="0 0 168 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Bitrix24"
      role="img"
      className="h-9 w-auto"
    >
      {/* Icon */}
      <rect width="40" height="40" rx="8" fill="#FF5722" />
      {/* Inner "B" letter */}
      <path
        d="M12 10h10c3.3 0 5.5 1.6 5.5 4.2 0 1.7-.9 3-2.4 3.7 1.9.6 3.1 2 3.1 3.9 0 3-2.3 4.7-5.9 4.7H12V10zm4 6.5h5.5c1.3 0 2.1-.6 2.1-1.7s-.8-1.7-2.1-1.7H16v3.4zm0 7.4h6c1.4 0 2.3-.7 2.3-1.9 0-1.2-.9-1.9-2.3-1.9H16v3.8z"
        fill="white"
      />
      {/* Wordmark */}
      <text
        x="52"
        y="27"
        fontFamily="-apple-system, BlinkMacSystemFont, 'Segoe UI', Arial, sans-serif"
        fontWeight="700"
        fontSize="18"
        fill="#1A1A1A"
        letterSpacing="-0.3"
      >
        Bitrix24
      </text>
    </svg>
  )
}

const CAPABILITIES = [
  'CRM e funil de vendas',
  'Automação de marketing',
  'Painéis de gestão e inteligência de vendas',
]

export default function BitrixBadge() {
  const prefersReduced = useReducedMotion()
  const d = (n: number) => prefersReduced ? 0 : n

  return (
    <section className="bg-neutral-50 border-y border-neutral-100 py-16 md:py-20">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: d(0.5), ease: 'easeOut' }}
          className="flex flex-col md:flex-row md:items-center gap-10 md:gap-16"
        >

          {/* Left — badge */}
          <div className="flex flex-col gap-4 shrink-0">
            <p className="font-sans text-xs font-semibold text-neutral-400 tracking-[0.16em] uppercase">
              Parceiro Oficial
            </p>
            <BitrixLogo />
          </div>

          {/* Divider */}
          <div
            aria-hidden="true"
            className="hidden md:block w-px h-20 bg-neutral-200 shrink-0"
          />

          {/* Right — description */}
          <div className="flex flex-col gap-5">
            <p className="font-display text-xl md:text-2xl font-semibold text-[#1A1A1A] leading-[1.3] max-w-lg">
              Implementamos e integramos o Bitrix24
              ao seu processo de vendas.
            </p>

            <ul className="flex flex-col gap-2.5" role="list">
              {CAPABILITIES.map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <span
                    aria-hidden="true"
                    className="w-1.5 h-1.5 rounded-full bg-lume-yellow shrink-0"
                  />
                  <span className="font-sans text-base text-neutral-500">{item}</span>
                </li>
              ))}
            </ul>
          </div>

        </motion.div>
      </div>
    </section>
  )
}
