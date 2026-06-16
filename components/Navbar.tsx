'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import logoMarca from '@/assets/lumebox/lumebox-marca.png'

const NAV_LOGO_H = 32
const NAV_LOGO_W = Math.round((logoMarca.width / logoMarca.height) * NAV_LOGO_H)

const WA_LINK = 'https://wa.me/5511914887343'

const NAV_ITEMS = [
  { label: 'Serviços',          href: '#servicos' },
  { label: 'Por que a LumeBox', href: '#qualificacao' },
  { label: 'Publicações',        href: '/blog' },
  { label: 'FAQ',               href: '#faq' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [])

  return (
    <motion.header
      initial={{ y: -64, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
      className={`fixed top-0 inset-x-0 z-50 bg-white transition-shadow duration-250 ${
        scrolled ? 'shadow-[0_1px_16px_rgba(0,0,0,0.07)]' : ''
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 md:px-8 h-16 flex items-center justify-between gap-8">

        {/* Logo */}
        <a href="#" aria-label="LumeBox — início" className="shrink-0">
          <Image
            src={logoMarca}
            alt="LumeBox"
            width={NAV_LOGO_W}
            height={NAV_LOGO_H}
            priority
          />
        </a>

        {/* Desktop nav */}
        <nav
          className="hidden md:flex items-center gap-10"
          aria-label="Navegação principal"
        >
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="font-sans text-sm font-medium text-[#1A1A1A]/60 hover:text-[#1A1A1A] transition-colors duration-150"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Desktop CTA */}
        <a
          href={WA_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:inline-flex items-center border border-[#1A1A1A] text-[#1A1A1A] font-sans text-sm font-medium px-5 py-2.5 rounded-btn hover:bg-lume-yellow hover:border-lume-yellow transition-all duration-150 shrink-0"
        >
          Solicitar Proposta
        </a>

        {/* Mobile toggle */}
        <button
          className="md:hidden p-2 -mr-1 text-[#1A1A1A]"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={menuOpen}
          aria-controls="mobile-nav"
        >
          {menuOpen
            ? <X size={22} aria-hidden="true" />
            : <Menu size={22} aria-hidden="true" />}
        </button>
      </div>

      {/* Mobile drawer */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            id="mobile-nav"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.22, ease: 'easeOut' }}
            className="md:hidden border-t border-neutral-100 bg-white overflow-hidden"
          >
            <nav
              className="flex flex-col px-4 pb-4 pt-2"
              aria-label="Navegação mobile"
            >
              {NAV_ITEMS.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className="font-sans text-base font-medium text-[#1A1A1A] py-3.5 border-b border-neutral-100 last:border-0"
                >
                  {item.label}
                </a>
              ))}
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex justify-center border border-[#1A1A1A] text-[#1A1A1A] font-sans text-sm font-medium px-5 py-3 rounded-btn mt-4 hover:bg-lume-yellow hover:border-lume-yellow transition-all duration-150"
              >
                Solicitar Proposta
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
