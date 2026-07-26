import { useState, useEffect } from "react";
import {
    MdEmail, MdPhone, MdLocationOn, MdWork, MdSchool,
    MdPerson, MdLink, MdPrint, MdCode, MdTerminal,
    MdDns, MdEmojiObjects, MdOutlineContactPage, MdOutlineShare, MdFileDownload
} from "react-icons/md";
import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";
import portfolioImage from "../assets/portfolio_img.jpeg";

const Resume = () => {
    const [resumeData, setResumeData] = useState(null);

    useEffect(() => {
        const savedData = localStorage.getItem("resumeData");
        if (savedData) {
            setResumeData(JSON.parse(savedData));
        } else {
            // Updated default data based on user's specific information
            setResumeData({
                personalInfo: {
                    name: "Danish Farhan",
                    title: "Aspiring Full-Stack Developer | BCA Student",
                    email: "danishfarhan@example.com",
                    phone: "+91 000 000 0000",
                    location: "Araria, Bihar",
                    linkedin: "https://linkedin.com/in/danish-farhan",
                    github: "https://github.com/danishfarhan",
                    website: "danishfarhan.io"
                },
                summary: "Hey there! I'm Md Sonu, also known as Danish Farhan. Both names are mine, so feel free to call me by either! I'm a passionate full-stack developer from Araria, Bihar, with a love for building interactive and scalable web applications. I specialize in JavaScript, React.js, Tailwind CSS, Node.js, and MongoDB. I enjoy transforming ideas into reality through clean, efficient, and user-friendly code.",
                experience: [
                    {
                        company: "Project Expertise",
                        position: "Scalable Backend & Databases",
                        duration: "2024 - PRESENT",
                        description: "Building backend systems with Node.js and Express. Designing efficient schemas with MongoDB, developing RESTful APIs, and implementing robust authentication systems for scalable web applications."
                    },
                    {
                        company: "Technical Focus",
                        position: "Modern Frontend Development",
                        duration: "2023 - 2024",
                        description: "Building responsive and interactive user interfaces using React.js, Tailwind CSS, and modern JavaScript (ES6+), with a strong focus on performance and clean, accessible UI components."
                    }
                ],
                education: [
                    {
                        institution: "Vidya Vihar Institute of Technology (VVIT)",
                        degree: "Bachelor of Computer Applications (BCA)",
                        duration: "2024 - Present",
                        description: "Focus on Full-Stack Development. Learning MERN stack and database technologies while building real-world projects."
                    },
                    {
                        institution: "Bihar School Examination Board (BSEB)",
                        degree: "Senior Secondary (12th Grade Commerce)",
                        duration: "2022 - 2024",
                        description: "Completed 12th grade with a Commerce background. Studied Business Studies, Accountancy, and Economics."
                    },
                    {
                        institution: "Bihar School Examination Board (BSEB)",
                        degree: "Secondary School (10th Grade)",
                        duration: "2020 - 2022",
                        description: "Completed 10th grade with a strong academic foundation and early interest in technology."
                    }
                ],
                skills: ["React", "JavaScript (ES6+)", "Node.js", "Express.js", "MongoDB", "Tailwind CSS", "Bootstrap", "HTML & CSS", "C", "C++", "Java", "RESTful APIs", "Git & GitHub", "Scalable Systems", "Responsive Design"]
            });
        }
    }, []);

    const handlePrint = () => {
        window.print();
    };

    if (!resumeData) return null;

    const { personalInfo, summary, experience, education, skills } = resumeData;

    // Categories for chips
    const frontendSkills = ["React", "JavaScript (ES6+)", "Tailwind CSS", "Bootstrap", "HTML & CSS"];
    const backendSkills = ["Node.js", "Express.js", "MongoDB", "RESTful APIs"];
    const languages = ["C", "C++", "Java"];
    const tools = ["Git & GitHub", "Scalable Systems", "Responsive UI"];

    return (
        <div className="min-h-screen bg-slate-50 dark:bg-slate-950 pt-10 font-sans transition-colors duration-500 pb-32">
            <div className="max-w-6xl mx-auto px-6 space-y-10 animate-in fade-in slide-in-from-bottom-8 duration-1000">

                {/* PDF Header - Hidden in Print */}
                <div className="print:hidden flex flex-col md:flex-row items-center justify-between gap-6 mb-12">
                    <div className="space-y-1 text-center md:text-left">
                        <h2 className="text-3xl font-black text-slate-900 dark:text-white tracking-tight">Professional Dossier</h2>
                        <p className="text-slate-500 font-bold uppercase tracking-widest text-[10px]">Curated Experience & Expertise</p>
                    </div>
                    <div className="flex gap-4">
                        <button
                            onClick={handlePrint}
                            className="bg-slate-900 dark:bg-white text-white dark:text-slate-900 px-8 py-4 rounded-2xl font-black text-sm flex items-center gap-3 transition-all hover:scale-105 active:scale-95 shadow-xl shadow-slate-200 dark:shadow-none"
                        >
                            <MdPrint className="text-xl" />
                            <span>Export PDF</span>
                        </button>
                    </div>
                </div>

                {/* Resume Paper Container */}
                <div className="bg-white dark:bg-slate-900 rounded-[3rem] shadow-sm border border-slate-100 dark:border-slate-800 overflow-hidden print:border-0 print:shadow-none print:rounded-none">
                    
                    {/* Top Branding Section */}
                    <div className="bg-slate-900 dark:bg-slate-800 p-12 sm:p-20 print:p-10 flex flex-col md:flex-row items-center gap-12 relative overflow-hidden">
                        {/* Decorative Blur */}
                        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-indigo-500/10 rounded-full blur-[100px] -mr-48 -mt-48 print:hidden"></div>
                        
                        <div className="relative shrink-0">
                            <div className="w-56 h-56 print:w-40 print:h-40 rounded-4xl border-[12px] border-white/5 shadow-2xl overflow-hidden relative z-10">
                                <img 
                                    src={portfolioImage} 
                                    className="w-full h-full object-cover grayscale md:grayscale-0 hover:grayscale-0 transition-all duration-700" 
                                    alt={personalInfo.name} 
                                />
                            </div>
                            <div className="absolute -bottom-4 -right-4 w-12 h-12 print:w-8 print:h-8 bg-indigo-600 rounded-2xl flex items-center justify-center text-white z-20 shadow-xl print:hidden">
                                <MdAutoAwesome className="text-2xl print:text-lg" />
                            </div>
                        </div>

                        <div className="flex-1 space-y-6 text-center md:text-left z-10">
                            <div>
                                <h1 className="text-5xl sm:text-6xl print:text-5xl font-black text-white tracking-tighter mb-4 leading-none">
                                    {personalInfo.name}
                                </h1>
                                <div className="inline-block px-5 py-2 print:px-3 print:py-1 bg-indigo-600/20 border border-indigo-500/20 text-indigo-400 font-black uppercase tracking-[0.3em] text-[11px] print:text-[9px] rounded-xl">
                                    {personalInfo.title}
                                </div>
                            </div>

                            <div className="flex flex-wrap justify-center md:justify-start gap-x-10 gap-y-4 print:gap-x-6">
                                <div className="flex items-center gap-3 text-slate-400 font-bold text-xs print:text-[10px] uppercase tracking-widest leading-none">
                                    <MdLocationOn className="text-indigo-500 text-lg print:text-base" />
                                    <span>{personalInfo.location}</span>
                                </div>
                                <div className="flex items-center gap-3 text-slate-400 font-bold text-xs print:text-[10px] uppercase tracking-widest leading-none underline decoration-indigo-500/30 underline-offset-8">
                                    <MdEmail className="text-indigo-500 text-lg print:text-base" />
                                    <span>{personalInfo.email}</span>
                                </div>
                                <div className="flex items-center gap-3 text-slate-400 font-bold text-xs print:text-[10px] uppercase tracking-widest leading-none underline decoration-indigo-500/30 underline-offset-8">
                                    <MdLink className="text-indigo-500 text-lg print:text-base" />
                                    <span>{personalInfo.website}</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Content Section */}
                    <div className="p-10 sm:p-20 print:p-8 grid lg:grid-cols-12 gap-20 print:gap-14">
                        {/* LEFT COLUMN: Sidebar style */}
                        <div className="lg:col-span-4 space-y-14 print:space-y-10">
                            
                            {/* Executive Summary */}
                            <div className="space-y-6 print:space-y-4">
                                <div className="flex items-center gap-4 text-slate-900 dark:text-white">
                                    <div className="w-10 h-10 print:w-8 print:h-8 bg-slate-100 dark:bg-slate-800 rounded-xl flex items-center justify-center">
                                        <MdPerson className="text-xl print:text-lg text-indigo-600" />
                                    </div>
                                    <h3 className="font-black uppercase tracking-widest text-sm print:text-xs">Professional Narrative</h3>
                                </div>
                                <p className="text-slate-600 dark:text-slate-400 text-sm print:text-xs leading-relaxed font-bold">
                                    {summary}
                                </p>
                            </div>

                            {/* Skills Competency */}
                            <div className="space-y-10 print:space-y-6">
                                <div className="flex items-center gap-4 text-slate-900 dark:text-white">
                                    <div className="w-10 h-10 print:w-8 print:h-8 bg-slate-100 dark:bg-slate-800 rounded-xl flex items-center justify-center">
                                        <MdEmojiObjects className="text-xl print:text-lg text-indigo-600" />
                                    </div>
                                    <h3 className="font-black uppercase tracking-widest text-sm print:text-xs">Competency Matrix</h3>
                                </div>
                                
                                <div className="space-y-8 print:space-y-5">
                                    {[
                                        { label: "Frontend", list: frontendSkills },
                                        { label: "Backend", list: backendSkills },
                                        { label: "Languages", list: languages },
                                        { label: "Engineering", list: tools }
                                    ].map((cat) => (
                                        <div key={cat.label} className="space-y-4 print:space-y-2">
                                            <p className="text-[10px] print:text-[8px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-widest border-l-2 border-indigo-600 pl-4">{cat.label}</p>
                                            <div className="flex flex-wrap gap-2 print:gap-1.5">
                                                {cat.list.map((skill) => (
                                                    <span key={skill} className="bg-slate-50 dark:bg-slate-800/50 text-slate-600 dark:text-slate-400 px-3 pb-1 pt-1.5 rounded-md flex items-center justify-center text-[10px] print:text-[8px] font-black uppercase tracking-wider border border-slate-100 dark:border-slate-800 transition-all hover:border-indigo-500/50 hover:text-indigo-600">
                                                        {skill}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* RIGHT COLUMN: Major Content */}
                        <div className="lg:col-span-8 space-y-16 print:space-y-10">
                            
                            {/* Education History */}
                            <div className="space-y-10 print:space-y-6 break-inside-avoid">
                                <div className="flex items-center gap-4 text-slate-900 dark:text-white">
                                    <div className="w-10 h-10 print:w-8 print:h-8 bg-slate-100 dark:bg-slate-800 rounded-xl flex items-center justify-center">
                                        <MdSchool className="text-xl print:text-lg text-indigo-600" />
                                    </div>
                                    <h3 className="font-black uppercase tracking-widest text-sm print:text-xs">Education Timeline</h3>
                                </div>
                                
                                <div className="space-y-10 print:space-y-6">
                                    {education.map((edu, idx) => (
                                        <div key={idx} className="group relative border-l-2 border-slate-100 dark:border-slate-800 pl-10 print:pl-6 ml-5 print:ml-3 hover:border-indigo-600 transition-colors duration-500">
                                            <div className="absolute -left-[9px] print:-left-[7px] top-0 w-4 h-4 print:w-3 print:h-3 rounded-full bg-white dark:bg-slate-900 border-2 border-slate-100 dark:border-slate-800 group-hover:border-indigo-600 transition-all duration-500"></div>
                                            <div className="space-y-2">
                                                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                                                    <h4 className="text-lg print:text-base font-black text-slate-900 dark:text-white tracking-tight leading-tight">{edu.degree}</h4>
                                                    <span className="text-[10px] print:text-[8px] font-black text-indigo-600 uppercase tracking-widest shrink-0">{edu.duration}</span>
                                                </div>
                                                <p className="text-slate-400 font-bold uppercase tracking-widest text-[11px] print:text-[9px]">{edu.institution}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Professional Milestones */}
                            <div className="space-y-10 print:space-y-6 pb-4">
                                <div className="flex items-center gap-4 text-slate-900 dark:text-white">
                                    <div className="w-10 h-10 print:w-8 print:h-8 bg-slate-100 dark:bg-slate-800 rounded-xl flex items-center justify-center">
                                        <MdWork className="text-xl print:text-lg text-indigo-600" />
                                    </div>
                                    <h3 className="font-black uppercase tracking-widest text-sm print:text-xs">Experience & Projects</h3>
                                </div>
                                
                                <div className="space-y-12 print:space-y-6">
                                    {experience.map((exp, idx) => (
                                        <div key={idx} className="space-y-4 print:space-y-2 break-inside-avoid">
                                            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 print:gap-2">
                                                <div className="space-y-1">
                                                    <h4 className="text-xl print:text-base font-black text-slate-900 dark:text-white tracking-tight leading-tight">{exp.position}</h4>
                                                    <p className="text-indigo-600 font-black uppercase tracking-[0.2em] text-[10px] print:text-[8px]">{exp.company}</p>
                                                </div>
                                                <span className="px-5 py-2.5 print:px-3 print:py-1.5 bg-slate-900 text-white dark:bg-white dark:text-slate-900 rounded-xl text-[10px] print:text-[8px] font-black uppercase tracking-[0.2em] shadow-lg shadow-indigo-500/10">
                                                    {exp.duration}
                                                </span>
                                            </div>
                                            <p className="text-slate-600 dark:text-slate-400 text-sm print:text-[11px] font-bold leading-relaxed whitespace-pre-line">
                                                {exp.description}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Footer Info */}
                    <div className="bg-slate-50 dark:bg-slate-800/30 p-12 print:p-8 text-center print:bg-white">
                        <p className="text-slate-400 font-black uppercase tracking-[0.5em] text-[9px] mb-4 print:mb-2 print:text-[8px]">Verification & Authenticity</p>
                        <div className="flex flex-wrap justify-center gap-8 print:gap-6 opacity-50 grayscale hover:grayscale-0 transition-all duration-700">
                             <a href={personalInfo.github} target="_blank" className="flex items-center gap-3 text-slate-900 dark:text-white font-bold text-xs print:text-[10px]">
                                <FaGithub className="text-xl print:text-lg" />
                                <span className="print:hidden">GITHUB</span>
                             </a>
                             <a href={personalInfo.linkedin} target="_blank" className="flex items-center gap-3 text-slate-900 dark:text-white font-bold text-xs print:text-[10px]">
                                <FaLinkedin className="text-xl print:text-lg" />
                                <span className="print:hidden">LINKEDIN</span>
                             </a>
                             <div className="flex items-center gap-3 text-slate-900 dark:text-white font-bold text-xs print:text-[10px]">
                                <MdOutlineContactPage className="text-xl print:text-lg" />
                                <span className="print:hidden">PORTFOLIO</span>
                             </div>
                        </div>
                    </div>
                </div>

                {/* Print Attribution */}
                <div className="text-center py-10 opacity-30 text-[10px] font-black tracking-widest dark:text-slate-500">
                    AUTOMATICALLY GENERATED FROM DANISH FARHAN'S OFFICIAL PORTFOLIO NODE
                </div>
            </div>

            {/* Print Styling Hooks */}
            <style dangerouslySetInnerHTML={{
                __html: `
                @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&display=swap');
                
                body { font-family: 'Space Grotesk', sans-serif !important; }

                @media print {
                    @page { 
                        margin: 0; 
                        size: A4;
                    }
                    body { 
                        background: white !important; 
                        font-size: 8pt !important; 
                        margin: 0 !important;
                        padding: 0 !important;
                        overflow: visible !important;
                    }

                    /* Aggressively hide everything except the resume container */
                    nav, header, footer, .navbar, .nav-container, .print\\:hidden, [class*="navbar"], [class*="Header"], [class*="Footer"] { 
                        display: none !important; 
                        height: 0 !important;
                        margin: 0 !important;
                        padding: 0 !important;
                    }
                    
                    /* Reset all padding & height on root containers */
                    .min-h-screen, .pb-32, .pt-10, .py-20, .p-20 { 
                        min-height: 0 !important; 
                        height: auto !important;
                        padding: 0 !important; 
                        margin: 0 !important;
                    }

                    .max-w-6xl { 
                        max-width: 100% !important; 
                        width: 100% !important; 
                        margin: 0 !important; 
                        padding: 0.5cm !important;
                        transform: scale(0.82); 
                        transform-origin: top center;
                    }

                    .rounded-\\[3rem\\], .rounded-[2.5rem] { border-radius: 0 !important; }
                    .shadow-sm, .shadow-xl, .shadow-2xl { box-shadow: none !important; }
                    .bg-slate-50 { background: white !important; }
                    .bg-slate-900 { background: #0f172a !important; -webkit-print-color-adjust: exact; print-color-adjust: exact; }
                    .text-white { color: white !important; -webkit-print-color-adjust: exact; print-color-adjust: exact; }
                    .border { border: 0 !important; }
                    .animate-in { animation: none !important; transform: none !important; opacity: 1 !important; }
                    .grayscale { filter: none !important; }
                    
                    /* Prevent unwanted breaks and force single page */
                    .break-inside-avoid {
                        break-inside: avoid;
                        page-break-inside: avoid;
                    }
                    
                    /* Adjust padding specifically for print to save space */
                    .p-10, .p-12, .p-14, .p-20, .sm\\:p-20, .p-10.sm\\:p-20 { padding: 1rem !important; }
                    .gap-20 { gap: 1rem !important; }
                    .gap-16 { gap: 1rem !important; }
                    .gap-10 { gap: 0.5rem !important; }
                    .space-y-16 { margin-top: 1rem !important; margin-bottom: 1rem !important; }
                    .space-y-14 { margin-top: 1rem !important; margin-bottom: 1rem !important; }
                    .space-y-10 { margin-top: 0.5rem !important; margin-bottom: 0.5rem !important; }
                    .space-y-12 { margin-top: 0.5rem !important; margin-bottom: 0.5rem !important; }
                }

                /* Custom Utilities */
                .rounded-4xl { border-radius: 2rem; }
            `}} />
        </div>
    );
};

// Help with missing React Icons
const MdAutoAwesome = (props) => (
    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path d="M19 9l1.25-2.75L23 5l-2.75-1.25L19 1l-1.25 2.75L15 5l2.75 1.25L19 9zm-7.5.5L9 4 6.5 9.5 1 12l5.5 2.5L9 20l2.5-5.5 5.5-2.5-5.5-2.5zM19 15l-1.25 2.75L15 19l2.75 1.25L19 23l1.25-2.75L23 19l-2.75-1.25L19 15z"></path>
    </svg>
);

export default Resume;
