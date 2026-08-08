
const CurrentFocusBlock = ({index, icon, title, description }) => {
    return (
        <div key={index}
            className="h-full bg-white dark:bg-gray-900 p-6 rounded-xl border border-gray-100 dark:border-gray-800 shadow-sm">
            <div
                className="w-12 h-12 bg-primary/10 text-primary rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">{icon}</span>
            </div>
            <h4 className="font-bold text-lg mb-2">{title}</h4>
            <p className="text-[#617589] dark:text-gray-400 text-sm leading-relaxed">
                {description}
            </p>
        </div>
    )
}

export default CurrentFocusBlock
