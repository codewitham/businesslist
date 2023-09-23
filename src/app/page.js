import BusinessContainer from '@/components/BusinessContainer'
import FeaturesSection from '@/components/FeaturesSection'
import HeroSection from '@/components/HeroSection'
import Testimonial from '@/components/Testimonial'
import WorkSection from '@/components/WorkSection'

export default function Home() {
  return (
    <div>
      <HeroSection />
      <BusinessContainer />
      <WorkSection />
      <Testimonial />
    </div>
  )
}
