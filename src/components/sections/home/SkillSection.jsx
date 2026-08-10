import {
    FaHtml5,
    FaCss3Alt,
    FaReact,
    FaNodeJs,
    FaGitAlt,
    FaGithub,
    FaShieldAlt,
    FaDatabase,
    FaBootstrap,
    FaJava,
} from "react-icons/fa";

import {
    SiTailwindcss,
    SiMongodb,
    SiExpress,
    SiNextdotjs,
    SiRedux,
    SiAxios,
    SiFramer,
    SiVite,
    SiJavascript,
    SiJest,
    SiGithubactions,
    SiNginx,
    SiRazorpay,
    SiZod,
    SiJsonwebtokens,
    SiDjango,
    SiLaravel,
    SiPhp,
    SiPython,
    SiInertia,
    SiC,
    SiCplusplus,
} from "react-icons/si";

import { MdCode, MdSecurity, MdPayment, MdDevices, MdCloud } from "react-icons/md";
import { TbApi, TbBrandVite } from "react-icons/tb";

import SectionHeading from "../../common/SectionHeading";
import Reveal from "../../common/Reveal";

// Fallback text-badge icon for skills without a dedicated react-icon
const TextIcon = ({ label }) => (
    <span className="inline-flex items-center justify-center w-8 h-8 rounded-md bg-primary/10 text-primary text-[10px] font-black leading-none text-center">
        {label}
    </span>
);

const SkillSection = () => {

    const skills = [
        {
            category: "Languages",
            items: [
                { name: "JavaScript", description: "ES6+ modern JS", icon: SiJavascript },
                { name: "HTML5", description: "Semantic markup", icon: FaHtml5 },
                { name: "CSS3", description: "Styling & layouts", icon: FaCss3Alt },
                { name: "Python", description: "Django & scripting", icon: SiPython },
                { name: "Java", description: "Backend & OOP", icon: FaJava },
                { name: "C", description: "Low-level programming", icon: SiC },
                { name: "C++", description: "Object-oriented programming", icon: SiCplusplus },
                { name: "PHP", description: "Laravel & web development", icon: SiPhp },
            ],
        },

        {
            category: "Frontend",
            items: [
                { name: "React 19", description: "Component-based UI library", icon: FaReact },
                { name: "Next.js 16", description: "React framework for production", icon: SiNextdotjs },
                { name: "Vite", description: "Lightning-fast build tool", icon: SiVite },
                { name: "Redux Toolkit", description: "Predictable state management", icon: SiRedux },
                { name: "React Router", description: "Client-side routing", icon: FaReact },
                { name: "Tailwind CSS", description: "Utility-first CSS framework", icon: SiTailwindcss },
                { name: "Bootstrap", description: "Responsive UI framework", icon: FaBootstrap },
                { name: "Axios", description: "Promise-based HTTP client", icon: SiAxios },
                { name: "Framer Motion", description: "Production-ready animations", icon: SiFramer },
                { name: "Inertia.js", description: "Server-driven React apps", icon: SiInertia },
                { name: "React Native", description: "Cross-platform mobile apps", icon: FaReact },
            ],
        },

        {
            category: "Backend",
            items: [
                { name: "Node.js", description: "JavaScript runtime", icon: FaNodeJs },
                { name: "Express.js", description: "Fast, minimal web framework", icon: SiExpress },
                { name: "REST APIs", description: "Scalable API design", icon: TbApi },
                { name: "Middleware", description: "Request pipeline logic", icon: FaNodeJs },
                { name: "MVC Architecture", description: "Structured app pattern", icon: MdCode },
                { name: "Django REST API", description: "Python REST framework", icon: SiDjango },
                { name: "Laravel", description: "PHP web framework", icon: SiLaravel },
            ],
        },

        {
            category: "Database",
            items: [
                { name: "MongoDB", description: "NoSQL document database", icon: SiMongodb },
                { name: "MongoDB Atlas", description: "Cloud database service", icon: SiMongodb },
                { name: "Mongoose", description: "MongoDB ODM for Node.js", icon: FaDatabase },
                { name: "DB Modeling", description: "Schema & data design", icon: FaDatabase },
                { name: "Aggregation", description: "MongoDB pipeline queries", icon: FaDatabase },
                { name: "Indexing", description: "Query performance tuning", icon: FaDatabase },
            ],
        },

        {
            category: "Authentication & Security",
            items: [
                { name: "JWT", description: "JSON Web Token auth", icon: SiJsonwebtokens },
                { name: "Refresh Token Rotation", description: "Secure token lifecycle", icon: FaShieldAlt },
                { name: "HttpOnly Cookies", description: "XSS-safe auth storage", icon: MdSecurity },
                { name: "RBAC", description: "Role-based access control", icon: FaShieldAlt },
                { name: "bcrypt", description: "Password hashing", icon: FaShieldAlt },
                { name: "Zod Validation", description: "Type-safe schema validation", icon: SiZod },
                { name: "Helmet", description: "HTTP security headers", icon: MdSecurity },
                { name: "CORS", description: "Cross-origin resource sharing", icon: MdSecurity },
                { name: "Rate Limiting", description: "DDoS & abuse prevention", icon: MdSecurity },
                { name: "XSS Protection", description: "Cross-site scripting guard", icon: FaShieldAlt },
            ],
        },

        {
            category: "Payments & Integrations",
            items: [
                { name: "Razorpay", description: "Payment gateway integration", icon: SiRazorpay },
                { name: "Payment Webhooks", description: "Async payment events", icon: MdPayment },
                { name: "HMAC Verification", description: "Signature-based security", icon: FaShieldAlt },
                { name: "ImageKit", description: "Image CDN & optimization", icon: MdCloud },
            ],
        },

        {
            category: "Testing",
            items: [
                { name: "Jest", description: "JavaScript test framework", icon: SiJest },
                { name: "Supertest", description: "HTTP assertions for Node", icon: TbApi },
                { name: "API Testing", description: "Endpoint validation", icon: TbApi },
                { name: "Security Testing", description: "Auth & vuln testing", icon: FaShieldAlt },
            ],
        },

        {
            category: "DevOps & Deployment",
            items: [
                { name: "Git", description: "Version control", icon: FaGitAlt },
                { name: "GitHub", description: "Code hosting & collaboration", icon: FaGithub },
                { name: "GitHub Actions", description: "CI/CD pipelines", icon: SiGithubactions },
                { name: "SSH", description: "Secure server access", icon: MdCloud },
                { name: "VPS", description: "Virtual private server hosting", icon: MdCloud },
                { name: "Nginx", description: "Reverse proxy & web server", icon: SiNginx },
                { name: "PM2", description: "Node.js process manager", icon: FaNodeJs },
            ],
        },

        {
            category: "Other",
            items: [
                { name: "PDF/Excel Export", description: "Document generation", icon: MdDevices },
                { name: "SSE", description: "Server-sent events (real-time)", icon: TbApi },
                { name: "SEO", description: "On-page search optimization", icon: MdDevices },
                { name: "Responsive UI", description: "Mobile-first design", icon: MdDevices },
                { name: "Secret Scanning", description: "GitHub Actions security", icon: FaShieldAlt },
            ],
        },
    ];

    return (
        <section className="relative py-16 md:py-24 px-2 sm:px-4 overflow-hidden">
            <div className="relative">
                <SectionHeading
                    kicker="Expertise"
                    title="Technical Skills"
                    description="The technologies I use to design, build, and ship modern web applications."
                />

                <div className="space-y-8">
                    {skills.map((category, categoryIdx) => (
                        <Reveal key={categoryIdx} delay={categoryIdx * 80}>
                            <div>
                                <h3 className="text-lg font-bold text-gray-700 dark:text-gray-300 mb-4 flex items-center gap-2">
                                    <span className="inline-block w-1.5 h-5 rounded-full bg-primary mr-1"></span>
                                    {category.category}
                                </h3>
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
