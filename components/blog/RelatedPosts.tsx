'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { type Post, formatDate } from '@/lib/posts'

function CoverPlaceholder({ tags }: { tags: string[] }) {
  return (
    <div className="h-[200px] bg-[#1A1A1A] relative overflow-hidden">
      <span
        aria-hidden="true"
        className="absolute inset-0 flex items-center justify-center font-display font-black text-[6rem] text-white/[0.04] select-none leading-none"
      >
        {tags[0]?.slice(0, 2).toUpperCase() ?? 'LB'}
      </span>
      <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-lume-yellow" aria-hidden="true" />
    </div>
  )
}

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
}

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' as const } },
}

export default function RelatedPosts({ posts }: { posts: Post[] }) {
  const published = posts.filter((p) => !p.draft)
  if (published.length === 0) return null

  return (
    <div>
      <h2 className="font-display text-3xl md:text-4xl font-bold text-[#1A1A1A] leading-[1.15] mb-12">
        Continue lendo.
      </h2>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.15 }}
        className="grid grid-cols-1 md:grid-cols-3 gap-8"
      >
        {published.slice(0, 3).map((post) => (
          <motion.div key={post.slug} variants={item}>
            <Link
              href={`/blog/${post.slug}`}
              className="group block h-full focus:outline-none focus-visible:ring-2 focus-visible:ring-lume-yellow rounded-card"
            >
              <article className="flex flex-col bg-white border border-neutral-200 rounded-card overflow-hidden min-h-[380px] h-full transition-all duration-250 group-hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)] group-hover:scale-[1.02]">
                <CoverPlaceholder tags={post.tags} />

                <div className="flex flex-col gap-4 p-6 flex-1">
                  <div className="flex flex-wrap gap-2">
                    {post.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="font-sans text-[11px] font-semibold text-[#1A1A1A] bg-lume-yellow/20 px-2.5 py-1 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <h3 className="font-display font-bold text-[#1A1A1A] text-lg leading-[1.3]">
                    {post.title}
                  </h3>

                  <p className="font-sans text-sm text-neutral-500 leading-[1.7] line-clamp-2">
                    {post.excerpt}
                  </p>

                  <div className="mt-auto pt-4 border-t border-neutral-100 flex items-center justify-between">
                    <span className="font-sans text-xs text-neutral-400">
                      {formatDate(post.publishedAt)}
                    </span>
                    <span className="font-sans text-sm font-semibold text-[#1A1A1A] group-hover:text-lume-yellow-dark transition-colors duration-150">
                      Leia o artigo →
                    </span>
                  </div>
                </div>
              </article>
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}
