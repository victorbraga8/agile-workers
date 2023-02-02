import { Hero } from '@/components/hero'
import { HeroIllustration } from '@/components/hero-illustration'
import { Layout } from '@/components/layout'

export default function HomePage() {
  return (
    <Layout>
      <Hero
        title="Agile Workers"
        content="A simplicidade em soluções de um jeito que você nunca viu."
        illustration={<HeroIllustration />}
      />
    </Layout>
  )
}
