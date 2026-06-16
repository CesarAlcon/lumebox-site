'use client'

import { motion, useReducedMotion } from 'framer-motion'

const WA_LINK = 'https://wa.me/5511914887343'

const SIGNALS = [
  'Fatura mais de R$ 750K/mês',
  'Cansada de marketing que não vende',
  'Quer resultados mensuráveis em 90 dias',
]

export default function Qualification() {
  const prefersReduced = useReducedMotion()
  const d  = (n: number) => prefersReduced ? 0 : n
  const dl = (n: number) => prefersReduced ? 0 : n

  return (
    <section
      id="qualificacao"
      className="bg-lume-dark py-24 md:py-36 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <div className="max-w-3xl">

          {/* Eyebrow */}
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: d(0.4), ease: 'easeOut' }}
            className="font-sans text-xs font-semibold text-neutral-500 tracking-[0.18em] uppercase mb-10"
          >
            Para quem é a LumeBox
          </motion.p>

          {/* Title */}
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: d(0.6), delay: dl(0.08), ease: 'easeOut' }}
            className="font-display font-bold text-white leading-[1.15] mb-16"
            style={{ fontSize: 'clamp(2.4rem, 5.5vw, 4rem)' }}
          >
            Vamos Direto<br />ao Ponto.
          </motion.h2>

          {/* Signals */}
          <ul className="flex flex-col gap-7 mb-16" role="list">
            {SIGNALS.map((signal, i) => (
              <motion.li
                key={signal}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: d(0.5), delay: dl(0.2 + i * 0.12), ease: 'easeOut' }}
                className="flex items-center gap-5"
              >
                <span
                  aria-hidden="true"
                  className="w-2 h-2 rounded-full bg-lume-yellow shrink-0"
                />
                <span className="font-sans text-lg md:text-xl text-white/80 leading-snug">
                  {signal}
                </span>
              </motion.li>
            ))}
          </ul>

          {/* Body */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: d(0.5), delay: dl(0.55), ease: 'easeOut' }}
            className="font-sans text-base md:text-lg text-white/40 leading-[1.7] mb-12 border-l-2 border-white/10 pl-6"
          >
            Se sua empresa se encaixa nesses três pontos —{' '}
            <span className="text-white/80 font-medium">
              precisamos conversar.
            </span>{' '}
            Não prometemos milagres. Entregamos estratégia com execução e métricas reais.
          </motion.p>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: d(0.45), delay: dl(0.7), ease: 'easeOut' }}
          >
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-lume-yellow text-[#1A1A1A] font-sans text-base font-semibold px-10 py-4 rounded-btn hover:bg-lume-yellow-dark transition-colors duration-150"
            >
              Solicitar Proposta
            </a>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
