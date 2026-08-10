import HeroSection from '../components/sections/home/HeroSection'
import ProfileSection from '../components/sections/about/ProfileSection'
import CurrentFocusSection from '../components/sections/about/CurrentFocusSection'
import SkillSection from '../components/sections/home/SkillSection'
import EducationSection from '../components/sections/home/EducationSection'
import ProjectsSection from '../components/sections/project/ProjectsSection'
import ContactSection from '../components/sections/contact/ContactSection'
import ScrollToTop from '../components/common/ScrollToTop'

const Home = () => {
  return (
    <main className="max-w-7xl mx-auto px-6 md:px-10 lg:px-14 pb-20">
      <section id="home">
        <HeroSection />
      </section>
      <section id="about">
        <ProfileSection />
        <CurrentFocusSection />
      </section>
      <section id="skills">
        <SkillSection />
      </section>
      <section id="education">
        <EducationSection />
      </section>
      <section id="projects">
        <ProjectsSection />
      </section>
      <section id="contact">
        <ContactSection />
      </section>
      <ScrollToTop />
    </main>
  )
}

export default Home
