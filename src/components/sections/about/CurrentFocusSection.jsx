import CurrentFocusBlock from '../../common/CurrentFocusBlock';
import SectionHeading from '../../common/SectionHeading';
import Reveal from '../../common/Reveal';
import { FiLayers } from "react-icons/fi";
import { TbDatabase } from "react-icons/tb";
import { RxMobile } from "react-icons/rx";

const CurrentFocusSection = () => {

    const currentFocus = [
        {
            id: "frontend",
            icon: <FiLayers />,
            title: "Modern Frontend Development",
            description:
                "Strengthening my frontend skills by building responsive and interactive user interfaces using React.js, Tailwind CSS, and modern JavaScript (ES6+), with a strong focus on performance and clean UI."
        },
        {
            id: "backend",
            icon: <TbDatabase />,
            title: "Scalable Backend & Databases",
            description:
                "Learning backend development with Node.js and Express, and working with MongoDB to design efficient schemas, APIs, and authentication systems for scalable web applications."
        },
        {
            id: "design-system",
            icon: <RxMobile />,
            title: "Reusable UI & Code Quality",
            description:
                "Creating reusable components and maintaining clean, readable, and accessible code while following best practices to improve usability and long-term maintainability."
        }
    ];

    return (
        <section className="py-8">
            <SectionHeading
                kicker="Focus"
                title="Current Focus"
                description="The areas I'm actively exploring and improving right now."
            />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {currentFocus.map((value, index) => (
                    <Reveal key={index} delay={index * 120}>
                        <CurrentFocusBlock {...value} />
                    </Reveal>
                ))}
            </div>
        </section>
    )
}

export default CurrentFocusSection
