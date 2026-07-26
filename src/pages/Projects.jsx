import ProjectFilterSection from '../components/sections/project/ProjectFilterSection'
import ProjectGridSection from '../components/sections/project/ProjectGridSection'
import ProjectHeadingSection from '../components/sections/project/ProjectHeadingSection'

const Projects = () => {
  return (
    <section className="max-w-7xl mx-auto lg:px-14 p-14">
        <ProjectHeadingSection />
        <ProjectFilterSection />
        <ProjectGridSection />
      
    </section>
  )
}

export default Projects
