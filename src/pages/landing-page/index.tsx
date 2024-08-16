import Features from './Features'
import Footer from './Footer'
import HeroSection from './Hero'
import Integrations from './Integrations'
import LogoCloud from './LogoCloud'
import Teams from './Teams'
import Testimonials from './Testimonials'

const LandingPage = () => {
  return (
    <>
      <HeroSection />
      <LogoCloud />
      <Features />
      <Integrations />
      <Teams />
      <Testimonials />
      <Footer />
    </>
  )
}

export default LandingPage
