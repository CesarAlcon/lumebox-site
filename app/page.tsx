import Navbar       from '@/components/Navbar'
import Hero         from '@/components/Hero'
import BitrixBadge  from '@/components/BitrixBadge'
import Services     from '@/components/Services'
import Qualification from '@/components/Qualification'
import FAQ          from '@/components/FAQ'
import Footer       from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <BitrixBadge />
        <Services />
        <Qualification />
        <FAQ />
      </main>
      <Footer />
    </>
  )
}
