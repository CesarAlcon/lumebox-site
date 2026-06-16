'use client'

import { motion, useReducedMotion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

const WA_LINK = 'https://wa.me/5511914887343'

const STATS = [
  { value: '90+', label: 'empresas atendidas' },
  { value: '90d', label: 'para os primeiros resultados' },
  { value: '3×',  label: 'retorno médio sobre o investimento' },
]

export default function Hero() {
  const prefersReduced = useReducedMotion()
  const d  = (n: number) => prefersReduced ? 0 : n
  const dl = (n: number) => prefersReduced ? 0 : n

  return (
    <section
      id="hero"
      className="relative bg-white overflow-hidden pt-40 pb-24 md:pt-52 md:pb-36"
    >
      {/* Decorative background numeral — purely visual, desktop only */}
      <span
        aria-hidden="true"
        className="hidden lg:block pointer-events-none select-none absolute right-0 top-1/2 -translate-y-1/2 translate-x-[18%] font-display font-black text-[22rem] leading-none text-neutral-100 tracking-tighter"
      >
        LB
      </span>

      <div className="relative z-10 max-w-6xl mx-auto px-4 md:px-8">

        {/* Eyebrow */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: d(0.45), delay: dl(0.1), ease: 'easeOut' }}
          className="font-sans text-sm font-medium text-neutral-400 tracking-wide mb-7"
        >
          Consultoria de Marketing Orientado a Dados
        </motion.p>

        {/* H1 */}
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: d(0.6), delay: dl(0.2), ease: 'easeOut' }}
          className="font-display font-bold text-[#1A1A1A] tracking-tight mb-8 max-w-4xl"
          style={{ fontSize: 'clamp(2.6rem, 6.5vw, 5rem)', lineHeight: 1.12 }}
        >
          Marketing que{' '}
          <span className="relative inline-block whitespace-nowrap">
            Vende.
            <span
              aria-hidden="true"
              className="absolute left-0 -bottom-1 w-full h-[4px] bg-lume-yellow rounded-full"
            />
          </span>
          <br className="hidden sm:block" />
          {' '}Sem Blá-Blá-Blá.
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: d(0.55), delay: dl(0.35), ease: 'easeOut' }}
          className="font-sans text-lg md:text-xl text-neutral-500 max-w-2xl leading-[1.7] mb-12"
        >
          Somos a consultoria que transforma dados em vendas
          e processos em crescimento previsível.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: d(0.5), delay: dl(0.5), ease: 'easeOut' }}
          className="flex flex-col sm:flex-row items-start sm:items-center gap-6"
        >
          <a
            href="#servicos"
            className="inline-flex items-center gap-2 bg-lume-yellow text-[#1A1A1A] font-sans text-base font-semibold px-8 py-4 rounded-btn hover:bg-lume-yellow-dark transition-colors duration-150"
          >
            Conheça nossas soluções
          </a>

          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 font-sans text-base font-medium text-[#1A1A1A] hover:text-neutral-500 transition-colors duration-150"
          >
            Solicitar Proposta via WhatsApp
            <ArrowRight
              size={17}
              aria-hidden="true"
              className="transition-transform duration-150 group-hover:translate-x-1"
            />
          </a>
        </motion.div>

        {/* Stats bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: d(0.6), delay: dl(0.75), ease: 'easeOut' }}
          className="mt-20 md:mt-28 pt-10 border-t border-neutral-200 grid grid-cols-3 gap-6 md:gap-12"
        >
          {STATS.map(({ value, label }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: d(0.4), delay: dl(0.85 + i * 0.1), ease: 'easeOut' }}
              className="flex flex-col gap-1.5"
            >
              <span
                className="font-display font-bold text-[#1A1A1A] leading-none"
                style={{ fontSize: 'clamp(1.75rem, 3.5vw, 2.75rem)' }}
              >
                {value}
              </span>
              <span className="font-sans text-sm text-neutral-400 leading-snug">{label}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
