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
    SiNextdotjs,
    SiDjango,
    SiLaravel,
    SiPhp,
    SiInertia,
    SiPython,
    SiGooglesearchconsole,
    SiGoogleanalytics,
    SiOpenai,
    SiVercel,
    SiGithub,
} from "react-icons/si";


import SectionHeading from "../../common/SectionHeading";
import Reveal from "../../common/Reveal";

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
                    name: "React.js",
                    description: "Component-based UI library",
                    icon: FaReact,
                },
                {
                    name: "Next.js",
                    description: "React framework for production",
                    icon: SiNextdotjs,
                },
                {
                    name: "Inertia.js",
                    description: "Server-driven React apps",
                    icon: SiInertia,
                },
                {
                    name: "React Native",
                    description: "Cross-platform mobile apps",
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
                {
                    name: "Django REST API",
                    description: "Python REST framework",
                    icon: SiDjango,
                },
                {
                    name: "Laravel Blade",
                    description: "PHP templating engine",
                    icon: SiLaravel,
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
                {
                    name: "Python",
                    description: "Django & scripting",
                    icon: SiPython,
                },
                {
                    name: "PHP",
                    description: "Laravel & web development",
                    icon: SiPhp,
                },
            ],
        },

        {
            category: "Tools & Platforms",
            items: [
                {
                    name: "Google Search Console",
                    description: "SEO & site indexing",
                    icon: SiGooglesearchconsole,
                },
                {
                    name: "SEO Optimization",
                    description: "On-page SEO & analytics",
                    icon: SiGoogleanalytics,
                },
                {
                    name: "ChatGPT",
                    description: "AI assistant for coding & content",
                    icon: SiOpenai,
                },
                {
                    name: "Git & GitHub",
                    description: "Version control & collaboration",
                    icon: SiGithub,
                },
                {
                    name: "Vercel",
                    description: "Deploy & hosting",
                    icon: SiVercel,
                },
            ],
        },
    ];

    return (
        <section className="relative py-16 md:py-24 px-2 sm:px-4 overflow-hidden">
            {/* Decorative background blobs */}
            {/* <div className="absolute -top-32 -left-32 w-96 h-96 bg-primary/8 rounded-full blur-3xl animate-blob pointer-events-none"></div> */}
            {/* <div
                className="absolute -bottom-32 -right-32 w-80 h-80 bg-cyan-400/8 rounded-full blur-3xl animate-blob pointer-events-none"
                style={{ animationDelay: "-8s" }}
            ></div> */}

            <div className="relative">
                <SectionHeading
                    kicker="Expertise"
                    title="Technical Skills"
                    description="The technologies I use to design, build, and ship modern web applications."
                />

                <div className="space-y-8">
                    {skills.map((category, categoryIdx) => (
                        <Reveal key={categoryIdx} delay={categoryIdx * 120}>
                            <div>
                                <h3 className="text-lg font-bold text-gray-700 dark:text-gray-300 mb-4">{category.category}</h3>
                                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
                                    {category.items.map((skill, skillIdx) => (
                                        <div
                                            key={skillIdx}
                                            className="bento-card group flex flex-col gap-4 rounded-lg border border-gray-100 dark:border-white/10 bg-white dark:bg-white/5 p-6 shadow-sm hover:border-primary/25 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300"
                                        >
                                            <div className="text-primary group-hover:scale-110 transition-transform duration-300">
                                                <skill.icon className="text-3xl" />
                                            </div>
                                            <div>
                                                <h4 className="font-bold text-base text-gray-800 dark:text-gray-200">{skill.name}</h4>
                                                <p className="text-[#617589] dark:text-gray-500 text-xs font-medium">{skill.description}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </Reveal>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default SkillSection
