import Link from 'next/link'
import { type Post, formatDate } from '@/lib/posts'

function Tag({ label }: { label: string }) {
  return (
    <span className="font-sans text-xs font-medium text-neutral-500 bg-neutral-100 px-2.5 py-0.5 rounded-full">
      {label}
    </span>
  )
}

export default function RelatedPosts({ posts }: { posts: Post[] }) {
  if (posts.length === 0) return null

  return (
    <section className="mt-20 pt-16 border-t border-neutral-100">
      <h2 className="font-display text-2xl font-bold text-[#1A1A1A] leading-[1.2] mb-10">
        Continue lendo
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {posts.map((post) => {
          const card = (
            <article
              key={post.slug}
              className={`flex flex-col gap-4 p-6 bg-white border border-neutral-100 rounded-card hover:border-lume-yellow transition-colors duration-250 ${post.draft ? 'opacity-60' : ''}`}
            >
              <div className="flex flex-wrap gap-1.5">
                {post.tags.slice(0, 2).map((t) => <Tag key={t} label={t} />)}
                {post.draft && (
                  <span className="font-sans text-xs font-semibold text-lume-yellow bg-lume-yellow/10 px-2.5 py-0.5 rounded-full">
                    Em breve
                  </span>
                )}
              </div>

              <h3 className="font-display font-semibold text-[#1A1A1A] text-lg leading-[1.3] line-clamp-3">
                {post.title}
              </h3>

              <p className="font-sans text-xs text-neutral-400 mt-auto pt-4 border-t border-neutral-100">
                {formatDate(post.publishedAt)}
              </p>
            </article>
          )

          return post.draft ? (
            <div key={post.slug}>{card}</div>
          ) : (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="block focus:outline-none focus-visible:ring-2 focus-visible:ring-lume-yellow rounded-card"
            >
              {card}
            </Link>
          )
        })}
      </div>
    </section>
  )
}
