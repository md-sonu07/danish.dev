import { GiSandsOfTime } from "react-icons/gi"
import { GrFormPreviousLink } from "react-icons/gr"
import { Link } from "react-router-dom"
import Button from "../components/common/Button"

const NotFound = () => {
  return (
    <section className="flex min-h-[calc(100vh-40px)] items-center justify-center px-6">
      <div className="layout-content-container flex flex-col max-w-4xl flex-1 items-center justify-center">
        <div className="relative mb-8">
          <div className="text-[180px] font-black text-primary/10 dark:text-primary/20 select-none">404</div>
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="material-symbols-outlined text-primary text-[80px]"><GiSandsOfTime />
            </span>
          </div>
        </div>
        <div className="w-full">
          <p
            className="text-[#617589] dark:text-gray-400 text-sm font-mono leading-normal pb-1 pt-1 px-4 text-center">
                    // 404: Route not found. Exception at line 0x7F4B
          </p>
        </div>
        <h1
          className="text-[#111418] dark:text-white tracking-tight text-[32px] md:text-[42px] font-bold leading-tight px-4 text-center pb-3 pt-4">
          Looks like you're lost in the code.
        </h1>
        <div className="max-w-2xl">
          <p
            className="text-[#617589] dark:text-gray-400 text-lg font-normal leading-relaxed pb-6 pt-1 px-4 text-center">
            Don't worry, even the best compilers run into errors sometimes. The link might be broken, or the
            page has moved. Let's get you back to the portfolio.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 px-4 py-3 justify-center w-full">
          <Link to="/">
            <Button text="Back to Homepage" iconPosition="right" icon={GrFormPreviousLink} className="rounded-lg h-12 px-6 bg-primary text-white text-base" />
          </Link>
          <Link to="/projects">
            <Button text="View Projects" className="rounded-lg h-12 px-6 border-2 border-primary/20 dark:border-gray-700 text-primary dark:text-primary text-base font-bold leading-normal tracking-[0.015em] hover:bg-primary/5 transition-all" />
          </Link>
        </div>
      </div>
    </section>
  )
}

export default NotFound
