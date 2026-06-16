'use client'

import { useState } from 'react'
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion'
import { Plus, Minus } from 'lucide-react'

const FAQS = [
  {
    q: 'Quanto tempo leva para ver os primeiros resultados?',
    a: 'Nas primeiras duas semanas já identificamos os principais gargalos e entregamos um plano de ação. Resultados mensuráveis — aumento de leads qualificados, redução de CAC, melhora na taxa de conversão — geralmente aparecem entre 30 e 90 dias, dependendo da solução contratada.',
  },
  {
    q: 'A LumeBox atua como agência ou como consultoria?',
    a: 'Somos consultoria, não agência. Trabalhamos ao lado da sua equipe — ou construímos uma para você — com foco em estratégia, processos e métricas. Não vendemos pacotes de posts nem prometemos seguidores. Vendemos resultado de negócio.',
  },
  {
    q: 'Preciso ter uma equipe de marketing para contratar vocês?',
    a: 'Não. Soluções como o CMO as a Service existem exatamente para empresas que ainda não têm estrutura de marketing. Chegamos, diagnosticamos, montamos o processo e lideramos a execução — você acompanha os resultados sem precisar de um time formado.',
  },
  {
    q: 'Como funciona o processo de onboarding?',
    a: 'Após a proposta aceita, fazemos uma imersão inicial com os principais decisores — geralmente 2 a 3 sessões na primeira semana. Mapeamos metas, público-alvo, histórico de vendas e ferramentas. A partir daí o plano entra em sprints semanais com reuniões de acompanhamento.',
  },
  {
    q: 'Com que tipo de empresa vocês trabalham?',
    a: 'Principalmente com empresas B2B e B2B2C com faturamento entre R$ 750K e R$ 30M/mês. Temos experiência em serviços profissionais, tecnologia, varejo atacadista, saúde corporativa e indústria. Se você estiver fora desse perfil, vamos ser honestos sobre isso na conversa inicial.',
  },
]

function Item({
  q, a, isOpen, onToggle,
}: {
  q: string
  a: string
  isOpen: boolean
  onToggle: () => void
}) {
  const prefersReduced = useReducedMotion()

  return (
    <div className="border-b border-neutral-100 last:border-0">
      <button
        onClick={onToggle}
        aria-expanded={isOpen}
        className="w-full flex items-start justify-between gap-8 py-7 text-left group"
      >
        <span className="font-sans text-base md:text-lg font-medium text-[#1A1A1A] leading-snug group-hover:text-neutral-600 transition-colors duration-150">
          {q}
        </span>

        <span
          aria-hidden="true"
          className={`shrink-0 mt-0.5 w-7 h-7 rounded-full border flex items-center justify-center transition-all duration-150 ${
            isOpen
              ? 'border-lume-yellow bg-lume-yellow text-[#1A1A1A]'
              : 'border-neutral-200 text-neutral-400 group-hover:border-neutral-400'
          }`}
        >
          {isOpen ? <Minus size={13} /> : <Plus size={13} />}
        </span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="answer"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: prefersReduced ? 0 : 0.28, ease: 'easeOut' }}
            className="overflow-hidden"
          >
            <p className="font-sans text-base text-neutral-500 leading-[1.7] pb-7 max-w-2xl">
              {a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0)
  const prefersReduced  = useReducedMotion()

  return (
    <section id="faq" className="bg-white py-24 md:py-36">
      <div className="max-w-6xl mx-auto px-4 md:px-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: prefersReduced ? 0 : 0.55, ease: 'easeOut' }}
          className="mb-14 md:mb-20"
        >
          <h2
            className="font-display font-bold text-[#1A1A1A] leading-[1.2] max-w-lg"
            style={{ fontSize: 'clamp(1.9rem, 3.5vw, 2.75rem)' }}
          >
            Perguntas que todo cliente faz antes de contratar.
          </h2>
        </motion.div>

        {/* Accordion */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: prefersReduced ? 0 : 0.4, delay: prefersReduced ? 0 : 0.15 }}
          className="max-w-3xl"
        >
          {FAQS.map((item, i) => (
            <Item
              key={i}
              q={item.q}
              a={item.a}
              isOpen={open === i}
              onToggle={() => setOpen((prev) => (prev === i ? null : i))}
            />
          ))}
        </motion.div>

      </div>
    </section>
  )
}
