import portfolioImage from "../../../assets/portfolio_img.jpeg"
import {TiArrowRight} from "react-icons/ti"
import Button from "../../common/Button"

const HeroSection = () => {
  return (
    <section className="py-16 md:py-24" >
            <div className="flex flex-col lg:flex-row items-center gap-12">
                <div className="flex-1 flex flex-col gap-8">
                    <div className="space-y-4">
                        <h1 className="text-5xl md:text-7xl font-black leading-[1.1] tracking-tight">
                            Hi, I'm <span className="text-gradient">Danish</span>. I build scalable solutions.
                        </h1>
                        <p className="text-lg text-gray-600 dark:text-gray-400 max-w-xl leading-relaxed">
                            Aspiring full-stack developer | BCA student at VVIT | Passionate about coding, web development, and tech innovation.
                        </p>
                    </div>
                    <div className="flex flex-wrap gap-4">
                        <Button iconPosition="left" text="Contact Me" className="h-14 px-8 bg-primary text-white hover:bg-primary/90 shadow-md shadow-primary/20" icon={TiArrowRight} />
                        <Button text="View Projects" className="h-14 px-8 bg-white border border-gray-200 text-[#111418] hover:bg-gray-50"/>
                    </div>
                </div>
                <div className="w-full lg:w-1/2 aspect-square max-w-md relative">
                    <div className="absolute inset-0 bg-primary/10 rounded-3xl -rotate-6"></div>
                    <div className="relative w-full h-full rounded-3xl shadow-2xl border-4 border-white overflow-hidden">
                        <img className="w-full h-full object-cover" src={portfolioImage} alt="Portfolio" />
                    </div>
                </div>
            </div>
    </section>
  )
}

export default HeroSection
