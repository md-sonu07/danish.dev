import profileImage from "../../../assets/portfolio_img.jpeg";
import {MdOutlineFileDownload} from "react-icons/md";
import Button from "../../common/Button";
import { Link } from "react-router-dom";

const ProfileSection = () => {
    return (
        <section className="flex p-10 @container bg-white dark:bg-gray-900 rounded-xl shadow-sm mb-8 border border-gray-100 dark:border-gray-800">
            <div className="flex w-full flex-col gap-6 @[520px]:flex-row @[520px]:items-center">

                <div
                    className="bg-center ring-4 ring-white shadow-2xl bg-no-repeat aspect-square bg-cover rounded-xl min-h-72 w-48"
                    style={{ backgroundImage: `url(${profileImage})` }}
                />

                <div className="flex flex-col justify-center flex-1">
                    <h2 className="text-3xl font-extrabold text-[#020617]">
                        Who Am I?
                    </h2>

                    <p className="text-gray-700 mt-4 text-lg leading-relaxed">
                        Hey there! I&apos;m{" "}
                        <span className="font-semibold text-[#020617]">Md Sonu</span>, also known as{" "}
                        <span className="font-semibold text-[#020617]">Danish Farhan</span>. Both names are mine, so feel free to call me by either! I&apos;m a passionate{" "}
                        <span className="font-semibold text-[#020617]">full-stack developer</span>{" "}
                        from Araria, Bihar, with a love for building interactive and scalable web applications.
                    </p>

                    <p className="text-gray-700 mt-3 text-lg leading-relaxed">
                        I specialize in{" "}
                        <span className="font-semibold text-[#020617]">
                            JavaScript, React.js, Tailwind CSS, Node.js, and MongoDB
                        </span>
                        . I enjoy transforming ideas into reality through clean, efficient, and user-friendly code.
                    </p>

                    <div className="mt-6 flex flex-wrap gap-3">
                        <Link to="/resume">
                        <Button text="Download Resume" className="h-12 px-6 bg-primary text-white hover:bg-primary/90 shadow-md shadow-primary/20" icon={MdOutlineFileDownload} />
                        </Link>
                        <Link to="/contact">
                        <Button text="Let's Talk" className="h-12 px-6 bg-primary/10 text-primary text-sm font-bold hover:bg-primary/20 transition" />
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProfileSection;
