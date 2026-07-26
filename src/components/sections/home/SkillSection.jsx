import {
    FaHtml5,
    FaCss3Alt,
    FaBootstrap,
    FaReact,
    FaNodeJs,
    FaJava,
} from "react-icons/fa";

import {
    SiTailwindcss,
    SiMongodb,
    SiExpress,
    SiC,
    SiCplusplus,
} from "react-icons/si";

const SkillSection = () => {

    const skills = [
        {
            category: "Frontend",
            items: [
                {
                    name: "HTML",
                    description: "Structure of web pages",
                    icon: FaHtml5,
                },
                {
                    name: "CSS",
                    description: "Styling & layouts",
                    icon: FaCss3Alt,
                },
                {
                    name: "Tailwind CSS",
                    description: "Utility-first CSS framework",
                    icon: SiTailwindcss,
                },
                {
                    name: "Bootstrap",
                    description: "Responsive UI framework",
                    icon: FaBootstrap,
                },
                {
                    name: "React",
                    description: "Component-based UI library",
                    icon: FaReact,
                },
            ],
        },

        {
            category: "Backend",
            items: [
                {
                    name: "Node.js",
                    description: "JavaScript runtime",
                    icon: FaNodeJs,
                },
                {
                    name: "Express.js",
                    description: "Backend framework",
                    icon: SiExpress,
                },
                {
                    name: "MongoDB",
                    description: "NoSQL database",
                    icon: SiMongodb,
                },
            ],
        },

        {
            category: "Programming Languages",
            items: [
                {
                    name: "C",
                    description: "Low-level programming",
                    icon: SiC,
                },
                {
                    name: "C++",
                    description: "Object-oriented programming",
                    icon: SiCplusplus,
                },
                {
                    name: "Java",
                    description: "Backend & OOP",
                    icon: FaJava,
                },
            ],
        },
    ];


    return (
        <section className="pt-10">
            <div className="flex items-end justify-between mb-8 px-4">
                <div>
                    <p className="text-primary font-bold text-sm uppercase tracking-[0.2em] mb-2">Expertise</p>
                    <h2 className="text-3xl font-bold tracking-tight">Technical Skills</h2>
                </div>
            </div>
            <div className="p-4">
                {skills.map((category, categoryIdx) => (
                    <div key={categoryIdx} className="mb-8">
                        <h3 className="text-lg font-bold text-gray-700 mb-4">{category.category}</h3>
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
                            {category.items.map((skill, skillIdx) => (
                                <div
                                    key={skillIdx}
                                    className="bento-card flex flex-col gap-4 rounded-xl border border-gray-100 bg-white dark:bg-background-dark p-6 shadow-sm"
                                >
                                    <div className="text-primary">
                                        <skill.icon className="text-3xl" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-base">{skill.name}</h4>
                                        <p className="text-[#617589] text-xs font-medium">{skill.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default SkillSection
