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
                    className="relative space-y-12 before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-linear-to-b before:from-transparent before:via-gray-200 before:to-transparent">
                        {EduExperience.map((value, index) => (
                            <EductionBlock key={index} {...value} />
                        ))}
                </div>
            </Reveal>
        </section>
    )
}

export default EductionSection
