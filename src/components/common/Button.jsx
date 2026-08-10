
const Button = ({
    text,
    icon: Icon,
    onClick,
    iconPosition = "right",
    className = "",
}) => {
    return (
        <button
            onClick={onClick}
            className={`inline-flex text-nowrap items-center gap-2 cursor-pointer text-sm font-bold rounded-md transition-all ${className}`}
            >

            {iconPosition === "right" && Icon && (
                <Icon className="text-lg" />
            )}
            <span>{text}</span>

            {iconPosition === "left" && Icon && (
                <Icon className="text-lg" />
            )}
        </button>
    );
};

export default Button;
