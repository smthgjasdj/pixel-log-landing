import { Hero } from '@/components/home/hero'
import { Features } from '@/components/home/features'
import { Audience } from '@/components/home/audience'
import { CtaBanner } from '@/components/home/cta'

export default function HomePage() {
  return (
    <>
      <Hero />
      <Features />
      <Audience />
      <CtaBanner />
    </>
  )
}
