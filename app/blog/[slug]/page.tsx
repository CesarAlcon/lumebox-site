import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import AuthorBlock from '@/components/blog/AuthorBlock'
import SidebarConclusions from '@/components/blog/SidebarConclusions'
import RelatedPosts from '@/components/blog/RelatedPosts'
import { getPost, getRelatedPosts, POSTS } from '@/lib/posts'

const WA_LINK = 'https://wa.me/5511914887343'
const SITE    = 'https://lumebox.com.br'

/* ── Static params ─────────────────────────────────── */
export function generateStaticParams() {
  return POSTS.filter((p) => !p.draft).map((p) => ({ slug: p.slug }))
}

/* ── Metadata ──────────────────────────────────────── */
export async function generateMetadata({
  params,
}: {
  params: { slug: string }
}): Promise<Metadata> {
  const post = getPost(params.slug)
  if (!post) return {}

  const url       = `${SITE}/blog/${post.slug}`
  const ogImage   = `${url}/opengraph-image`
  const isoDate   = new Date(post.publishedAt + 'T00:00:00').toISOString()

  return {
    title:       `${post.title} | LumeBox`,
    description: post.description,
    alternates:  { canonical: url },
    openGraph: {
      title:         post.title,
      description:   post.description,
      url,
      type:          'article',
      publishedTime: isoDate,
      authors:       [post.author.name],
      tags:          post.tags,
      images:        [{ url: ogImage, width: 1200, height: 630, alt: post.title }],
    },
    twitter: {
      card:        'summary_large_image',
      title:       post.title,
      description: post.description,
      images:      [ogImage],
    },
  }
}

/* ── JSON-LD ────────────────────────────────────────── */
function JsonLd({ slug }: { slug: string }) {
  const post = getPost(slug)
  if (!post) return null
  const url     = `${SITE}/blog/${post.slug}`
  const isoDate = new Date(post.publishedAt + 'T00:00:00').toISOString()

  const schema = {
    '@context': 'https://schema.org',
    '@type':    'Article',
    headline:   post.title,
    description:post.description,
    datePublished:  isoDate,
    dateModified:   isoDate,
    url,
    keywords: post.tags.join(', '),
    author: { '@type': 'Person', name: post.author.name },
    publisher: {
      '@type': 'Organization',
      name:    'LumeBox',
      logo: {
        '@type': 'ImageObject',
        url:     `${SITE}/favicon.png`,
      },
    },
    image: `${url}/opengraph-image`,
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

/* ── Page ───────────────────────────────────────────── */
export default function ArticlePage({ params }: { params: { slug: string } }) {
  const post = getPost(params.slug)
  if (!post || post.draft) notFound()

  const related = getRelatedPosts(params.slug)

  return (
    <>
      <JsonLd slug={params.slug} />
      <Navbar />

      <main className="bg-white pt-24">

        {/* ── Article header ── */}
        <header className="max-w-6xl mx-auto px-4 md:px-8 pt-14 pb-12 md:pt-20 md:pb-16 border-b border-neutral-100">

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-6">
            {post.tags.map((tag) => (
              <Link
                key={tag}
                href={`/blog?tag=${encodeURIComponent(tag)}`}
                className="font-sans text-xs font-medium text-neutral-500 bg-neutral-50 border border-neutral-200 px-3 py-1 rounded-full hover:bg-lume-yellow hover:border-lume-yellow hover:text-[#1A1A1A] transition-all duration-150"
              >
                {tag}
              </Link>
            ))}
          </div>

          {/* Title */}
          <h1
            className="font-display font-bold text-[#1A1A1A] leading-[1.15] mb-6 max-w-3xl"
            style={{ fontSize: 'clamp(2rem, 4.5vw, 3.5rem)' }}
          >
            {post.title}
          </h1>

          {/* Description */}
          <p className="font-sans text-lg md:text-xl text-neutral-500 leading-[1.7] max-w-2xl mb-8">
            {post.description}
          </p>

          {/* Author */}
          <AuthorBlock
            author={post.author}
            publishedAt={post.publishedAt}
            wordCount={post.wordCount}
          />
        </header>

        {/* ── Two-column layout ── */}
        <div className="max-w-6xl mx-auto px-4 md:px-8 py-14 md:py-20">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">

            {/* Main content */}
            <div className="flex-1 min-w-0">
              <div
                className="article-prose"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />

              {/* End CTA */}
              <div className="mt-16 p-8 bg-neutral-50 border border-neutral-100 rounded-card">
                <p className="font-sans text-xs font-semibold text-neutral-400 tracking-[0.16em] uppercase mb-3">
                  Diagnóstico Estratégico LumeBox
                </p>
                <p className="font-display text-xl font-bold text-[#1A1A1A] leading-[1.3] mb-5">
                  Identificamos os três gargalos que estão travando suas vendas — e entregamos um plano de ação executável.
                </p>
                <a
                  href={WA_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-lume-yellow text-[#1A1A1A] font-sans text-base font-semibold px-7 py-3.5 rounded-btn hover:bg-lume-yellow-dark transition-colors duration-150"
                >
                  Fale com a LumeBox →
                </a>
              </div>

              {/* Related */}
              <RelatedPosts posts={related} />
            </div>

            {/* Sticky sidebar */}
            <div className="w-full lg:w-72 xl:w-80 shrink-0 lg:sticky lg:top-24">
              <SidebarConclusions conclusions={post.conclusions} />
            </div>

          </div>
        </div>
      </main>

      {/* Mobile sticky CTA */}
      <div className="lg:hidden fixed bottom-0 inset-x-0 z-40 bg-white border-t border-neutral-200 px-4 py-3">
        <a
          href={WA_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 bg-lume-yellow text-[#1A1A1A] font-sans text-sm font-semibold w-full py-3.5 rounded-btn hover:bg-lume-yellow-dark transition-colors duration-150"
        >
          Fale com a LumeBox →
        </a>
      </div>

      <Footer />
    </>
  )
}
