'use client'

import { useState, useMemo } from 'react'
import { motion, AnimatePresence, useReducedMotion, type Variants } from 'framer-motion'
import { type Post } from '@/lib/posts'
import ArticleCard from './ArticleCard'

const ALL = 'Todos'

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09 } },
}

export default function BlogIndex({ posts }: { posts: Post[] }) {
  const prefersReduced = useReducedMotion()

  const allTags = useMemo(() => {
    const set = new Set<string>()
    posts.forEach((p) => p.tags.forEach((t) => set.add(t)))
    return [ALL, ...Array.from(set)]
  }, [posts])

  const [activeTag, setActiveTag] = useState(ALL)

  const filtered = useMemo(
    () => activeTag === ALL ? posts : posts.filter((p) => p.tags.includes(activeTag)),
    [posts, activeTag],
  )

  return (
    <div>
      {/* Tag filter */}
      <div className="flex flex-wrap gap-2 mb-12" role="group" aria-label="Filtrar por tema">
        {allTags.map((tag) => {
          const active = tag === activeTag
          return (
            <button
              key={tag}
              onClick={() => setActiveTag(tag)}
              className={`font-sans text-sm font-medium px-4 py-2 rounded-full border transition-all duration-150 ${
                active
                  ? 'bg-lume-yellow border-lume-yellow text-[#1A1A1A]'
                  : 'bg-white border-neutral-200 text-neutral-500 hover:border-neutral-400'
              }`}
              aria-pressed={active}
            >
              {tag}
            </button>
          )
        })}
      </div>

      {/* Grid */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeTag}
          variants={prefersReduced ? undefined : container}
          initial={prefersReduced ? false : 'hidden'}
          animate="show"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filtered.map((post) => (
            <ArticleCard key={post.slug} post={post} />
          ))}
        </motion.div>
      </AnimatePresence>

      {filtered.length === 0 && (
        <p className="font-sans text-neutral-400 text-center py-20">
          Nenhum artigo encontrado para este tema.
        </p>
      )}
    </div>
  )
}
