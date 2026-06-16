'use client'

import { motion, useReducedMotion, type Variants } from 'framer-motion'
import { Briefcase, Rocket, Search, GraduationCap } from 'lucide-react'

const WA_LINK = 'https://wa.me/5511914887343'

const SERVICES = [
  {
    Icon:        Briefcase,
    title:       'CMO as a Service',
    description: 'Liderança executiva sênior sem custo CLT. Direção estratégica, processos e resultados desde o primeiro mês.',
    ideal:       'Empresas em crescimento que precisam profissionalizar o marketing rapidamente.',
  },
  {
    Icon:        Rocket,
    title:       'Marketing Intensivo',
    description: '12 semanas que transformam seu marketing em máquina de vendas. Metodologia comprovada, acompanhamento semanal e métricas claras.',
    ideal:       'Empresas com equipe formada que precisa de direcionamento estratégico.',
  },
  {
    Icon:        Search,
    title:       'Diagnóstico Estratégico LumeBox',
    description: 'Imersão que identifica os 3 principais gargalos que travam suas vendas. Plano de ação detalhado e executável.',
    ideal:       'Empresas que querem análise profunda antes de decidir.',
  },
  {
    Icon:        GraduationCap,
    title:       'Treinamentos In-Company',
    description: 'Programas customizados para sua equipe dominar marketing orientado a vendas. Menos teoria, mais prática aplicada ao seu negócio.',
    ideal:       'Empresas que querem autonomia e conhecimento interno.',
  },
]

const container: Variants = {
  hidden: {},
  show:   { transition: { staggerChildren: 0.11 } },
}

const card: Variants = {
  hidden: { opacity: 0, y: 36 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' as const } },
}

export default function Services() {
  const prefersReduced = useReducedMotion()

  return (
    <section id="servicos" className="bg-white py-24 md:py-36">
      <div className="max-w-6xl mx-auto px-4 md:px-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: prefersReduced ? 0 : 0.55, ease: 'easeOut' }}
          className="mb-16 md:mb-20"
        >
          <h2
            className="font-display font-bold text-[#1A1A1A] leading-[1.2] max-w-lg"
            style={{ fontSize: 'clamp(1.9rem, 3.5vw, 2.75rem)' }}
          >
            Soluções que movem o ponteiro de vendas.
          </h2>
        </motion.div>

        {/* Grid 2×2 */}
        <motion.div
          variants={prefersReduced ? undefined : container}
          initial={prefersReduced ? false : 'hidden'}
          whileInView="show"
          viewport={{ once: true, margin: '-60px' }}
          className="grid grid-cols-1 md:grid-cols-2 gap-px bg-neutral-100"
        >
          {SERVICES.map(({ Icon, title, description, ideal }) => (
            <motion.article
              key={title}
              variants={prefersReduced ? undefined : card}
              className="group flex flex-col gap-8 p-8 md:p-10 bg-white hover:bg-neutral-50 transition-colors duration-250"
            >
              {/* Icon */}
              <div className="w-10 h-10 rounded-card-sm bg-neutral-100 group-hover:bg-lume-yellow/15 flex items-center justify-center shrink-0 transition-colors duration-250">
                <Icon
                  size={20}
                  className="text-neutral-500 group-hover:text-[#1A1A1A] transition-colors duration-250"
                  aria-hidden="true"
                />
              </div>

              {/* Content */}
              <div className="flex flex-col gap-3 flex-1">
                <h3 className="font-display text-xl font-semibold text-[#1A1A1A] leading-[1.2]">
                  {title}
                </h3>
                <p className="font-sans text-base text-neutral-500 leading-[1.7]">
                  {description}
                </p>
              </div>

              {/* Ideal para */}
              <div className="pt-6 border-t border-neutral-100">
                <p className="font-sans text-sm text-neutral-400 leading-[1.6]">
                  <span className="font-semibold text-[#1A1A1A]">Ideal para: </span>
                  {ideal}
                </p>
              </div>
            </motion.article>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: prefersReduced ? 0 : 0.45, delay: prefersReduced ? 0 : 0.3 }}
          className="mt-14 flex justify-center"
        >
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-lume-yellow text-[#1A1A1A] font-sans text-base font-semibold px-8 py-4 rounded-btn hover:bg-lume-yellow-dark transition-colors duration-150"
          >
            Qual solução é ideal para minha empresa?
          </a>
        </motion.div>

      </div>
    </section>
  )
}
