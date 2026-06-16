import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import BlogIndex from '@/components/blog/BlogIndex'
import Footer from '@/components/Footer'
import { POSTS } from '@/lib/posts'

export const metadata: Metadata = {
  title: 'Publicações | LumeBox',
  description: 'Conteúdo direto sobre marketing, comercial e crescimento previsível.',
}

export default function BlogPage() {
  return (
    <>
      <Navbar />
      <main className="pt-24">
        {/* Header */}
        <div className="bg-white border-b border-neutral-100 py-16 md:py-24">
          <div className="max-w-6xl mx-auto px-4 md:px-8">
            <p className="font-sans text-xs font-semibold text-neutral-400 tracking-[0.18em] uppercase mb-5">
              Insights
            </p>
            <h1
              className="font-display font-bold text-[#1A1A1A] leading-[1.15] max-w-xl mb-4"
              style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}
            >
              Publicações
            </h1>
            <p className="font-sans text-lg text-neutral-500 leading-[1.7] max-w-2xl">
              Conteúdo direto sobre marketing, comercial e crescimento previsível.
            </p>
          </div>
        </div>

        {/* Posts */}
        <div className="bg-neutral-50 py-16 md:py-24">
          <div className="max-w-6xl mx-auto px-4 md:px-8">
            <BlogIndex posts={POSTS} />
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
