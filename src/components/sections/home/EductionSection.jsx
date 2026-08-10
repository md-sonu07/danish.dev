import EductionBlock from '../../common/EductionBlock';
import SectionHeading from '../../common/SectionHeading';
import Reveal from '../../common/Reveal';

const EductionSection = () => {

    const EduExperience = [
        {
            title: "Bachelor of Computer Applications",
            organization: "Vidya Vihar Institute of Technology (VVIT)",
            duration: "2024 - Present",
            description: [
                "Pursuing BCA with a focus on Full-Stack Development.",
                "Learning front-end, back-end, and database technologies.",
                "Actively building projects using React, Node.js, Express, and MongoDB."
            ],
        },
        {
            title: "Senior Secondary (12th Grade / +2)",
            organization: "Bihar School Examination Board (BSEB)",
            duration: "2022 - 2024",
            description: [
                "Completed 12th grade with a Commerce background.",
                "Studied Business Studies, Accountancy, and Economics.",
                "Developed analytical thinking and foundational academic skills."
            ],
        },
        {
            title: "Secondary (10th Grade)",
            organization: "Bihar School Examination Board (BSEB)",
            duration: "2020 - 2022",
            description: [
                "Completed 10th grade with a strong academic foundation.",
                "Developed early interest in computers and technology.",
                "Built discipline and problem-solving skills during school years."
            ],
        },
    ];

    return (
        <section className="py-16 md:py-24 px-2 sm:px-4">
            <SectionHeading
                kicker="Career"
                title="Education"
                description="The academic foundation behind my development journey."
            />
            <Reveal>
                <div
                    className="relative space-y-12 md:before:absolute md:before:inset-0 md:before:mx-auto md:before:translate-x-0 md:before:h-full md:before:w-0.5 md:before:bg-linear-to-b md:before:from-transparent md:before:via-gray-200 md:before:to-transparent">
                        {EduExperience.map((value, index) => (
                            <EductionBlock key={index} {...value} />
                        ))}
                </div>
            </Reveal>
        </section>
    )
}

export default EductionSection
