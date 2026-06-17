'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { type Post, formatDate, readingTime } from '@/lib/posts'

function CoverPlaceholder({ tags }: { tags: string[] }) {
  return (
    <div className="aspect-[16/9] bg-[#1A1A1A] relative overflow-hidden">
      <span
        aria-hidden="true"
        className="absolute inset-0 flex items-center justify-center font-display font-black text-[6rem] text-white/[0.04] select-none leading-none"
      >
        {tags[0]?.slice(0, 2).toUpperCase() ?? 'LB'}
      </span>
      <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-lume-yellow" aria-hidden="true" />
      <div className="absolute top-4 left-4 flex flex-wrap gap-1.5">
        {tags.slice(0, 2).map((t) => (
          <span
            key={t}
            className="text-[10px] font-semibold text-white/40 uppercase tracking-widest"
          >
            {t}
          </span>
        ))}
      </div>
    </div>
  )
}

const cardVariants = {
  hidden: { opacity: 0, y: 28 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' as const } },
}

export default function ArticleCard({ post }: { post: Post }) {
  const mins  = readingTime(post.wordCount)
  const date  = formatDate(post.publishedAt)
  const isDraft = post.draft

  const Inner = (
    <motion.article
      variants={cardVariants}
      className={`group flex flex-col bg-white border border-neutral-100 rounded-card overflow-hidden hover:border-lume-yellow transition-colors duration-250 ${isDraft ? 'opacity-60' : ''}`}
    >
      {post.coverImage ? (
        <div className="aspect-[16/9] relative overflow-hidden">
          <Image
            src={post.coverImage}
            alt={post.title}
            fill
            className="object-cover"
          />
        </div>
      ) : (
        <CoverPlaceholder tags={post.tags} />
      )}

      <div className="flex flex-col gap-4 p-6 flex-1">
        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {post.tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="font-sans text-xs font-medium text-neutral-500 bg-neutral-50 border border-neutral-200 px-2.5 py-1 rounded-full"
            >
              {tag}
            </span>
          ))}
          {isDraft && (
            <span className="font-sans text-xs font-semibold text-lume-yellow bg-lume-yellow/10 px-2.5 py-1 rounded-full">
              Em breve
            </span>
          )}
        </div>

        {/* Title */}
        <h2 className="font-display font-bold text-[#1A1A1A] leading-[1.25] text-xl group-hover:text-neutral-700 transition-colors duration-150">
          {post.title}
        </h2>

        {/* Excerpt */}
        <p className="font-sans text-sm text-neutral-500 leading-[1.7] flex-1 line-clamp-3">
          {post.excerpt}
        </p>

        {/* Footer */}
        <div className="flex items-center justify-between pt-4 border-t border-neutral-100 gap-4 flex-wrap">
          <div className="flex items-center gap-2.5">
            <Image
              src={post.author.photo}
              alt={post.author.name}
              width={28}
              height={28}
              className="rounded-full object-cover shrink-0"
              style={{ width: 28, height: 28 }}
            />
            <span className="font-sans text-xs font-medium text-neutral-600">{post.author.name}</span>
          </div>
          <div className="flex items-center gap-3 text-neutral-400">
            <span className="font-sans text-xs">{date}</span>
            {!isDraft && (
              <>
                <span aria-hidden="true" className="text-neutral-200">·</span>
                <span className="font-sans text-xs">{mins} min</span>
              </>
            )}
          </div>
        </div>
      </div>
    </motion.article>
  )

  if (isDraft) return Inner

  return (
    <Link href={`/blog/${post.slug}`} className="block focus:outline-none focus-visible:ring-2 focus-visible:ring-lume-yellow rounded-card">
      {Inner}
    </Link>
  )
}
