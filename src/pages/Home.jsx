import HeroSection from '../components/sections/home/HeroSection'
import SkillSection from '../components/sections/home/SkillSection'
import EductionSection from '../components/sections/home/EductionSection'

const Home = () => {
  return (
    <main className="max-w-7xl mx-auto px-8 lg:px-14 pb-20">
      <HeroSection />
      <SkillSection />
      <EductionSection /> 
    </main>
  )
}

export default Home
