import profileImage from "../../../assets/portfolio_img.jpeg";
import { FiArrowUpRight } from "react-icons/fi";
import Button from "../../common/Button";
import SectionHeading from "../../common/SectionHeading";
import Reveal from "../../common/Reveal";

const ProfileSection = () => {
    const chips = [
        "Full-Stack Developer",
        "BCA Student",
        "Araria, Bihar",
        "Open to Opportunities",
    ];

    return (
        <section className="py-16 md:py-24">
            <SectionHeading
                kicker="About Me"
                title="Who Am I?"
                description="Get to know the developer behind the screen."
            />

            <Reveal>
                <div className="grid lg:grid-cols-5 gap-10 items-center">
                    {/* Portrait */}
                    <div className="lg:col-span-2">
                        <div className="relative max-w-sm mx-auto w-full">
                            <div className="absolute inset-0 bg-gradient-to-tr from-primary/25 to-cyan-400/25 rounded-[2.5rem] rotate-3"></div>
                            <div className="relative rounded-[2.5rem] overflow-hidden shadow-xl ring-1 ring-white/60 dark:ring-white/10 aspect-square">
                                <img
                                    src={profileImage}
                                    alt="Danish Farhan"
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/40 to-transparent"></div>
                                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                                    <p className="text-white font-bold text-sm drop-shadow">Danish Farhan</p>
                                    <span className="px-3 py-1 rounded-full bg-emerald-500/80 backdrop-blur-sm text-white text-[10px] font-bold uppercase tracking-wider">
                                        Available
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Bio */}
                    <div className="lg:col-span-3 space-y-6">
                        <div className="flex flex-wrap gap-2">
                            {chips.map((c) => (
                                <span
                                    key={c}
                                    className="px-4 py-2 rounded-full bg-primary/10 text-primary text-xs font-bold border border-primary/20"
                                >
                                    {c}
                                </span>
                            ))}
                        </div>

                        <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
                            Hey there! I&apos;m{" "}
                            <span className="font-semibold text-[#020617] dark:text-white">Md Sonu</span>,
                            also known as <span className="font-semibold text-[#020617] dark:text-white">Danish Farhan</span>.
                            Both names are mine, so feel free to call me by either! I&apos;m a passionate{" "}
                            <span className="font-semibold text-[#020617] dark:text-white">full-stack developer</span>{" "}
                            from Araria, Bihar, with a love for building interactive and scalable web applications.
                        </p>

                        <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
                            I specialize in{" "}
                            <span className="font-semibold text-[#020617] dark:text-white">
                                JavaScript, React.js, Tailwind CSS, Node.js, and MongoDB
                            </span>
                            . I enjoy transforming ideas into reality through clean, efficient, and user-friendly code.
                        </p>

                        <div className="flex flex-wrap gap-3 pt-2">
                            <a href="#projects">
                                <Button
                                    text="View Projects"
                                    className="h-12 px-6 bg-primary text-white hover:bg-primary/90 shadow-md shadow-primary/20"
                                    icon={FiArrowUpRight}
                                />
                            </a>
                            <a href="#contact">
                                <Button
                                    text="Let's Talk"
                                    className="h-12 px-6 bg-primary/10 text-primary text-sm font-bold hover:bg-primary/20 transition"
                                />
                            </a>
                        </div>
                    </div>
                </div>
            </Reveal>
        </section>
    );
};

export default ProfileSection;
