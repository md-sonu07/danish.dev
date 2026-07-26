import { PiStudent } from "react-icons/pi"

const EductionBlock = ({
    title,
    organization,
    duration,
    description
}) => {
    return (
        <div
            className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
            <div
                className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-primary text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                <span className="text-base">
                    <PiStudent  />
                </span>
            </div>
            <div
                className="w-[calc(100%-4rem)] md:w-[45%] p-6 rounded-2xl bg-white dark:bg-background-dark border border-gray-100 shadow-sm transition-all hover:shadow-md">
                <div className="flex items-center justify-between space-x-2 mb-2">
                    <h3 className="font-bold text-lg">{title}</h3>
                    <time className="text-xs text-nowrap font-bold text-primary px-3 py-1 bg-primary/10 rounded-full">{duration} </time>
                </div>
                <div className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-4">{organization}
                </div>
                <p className="text-sm text-gray-500 leading-relaxed">
                    {description}
                </p>
            </div>
        </div>
    )
}

export default EductionBlock
