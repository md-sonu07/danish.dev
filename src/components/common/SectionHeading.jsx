const SectionHeading = ({ kicker, title, description, align = "left" }) => {
  const isCenter = align === "center";

  return (
    <div className={`mb-10 ${isCenter ? "text-center" : ""}`}>
      {kicker && (
        <p
          className={`text-primary font-bold text-sm uppercase tracking-[0.25em] mb-3 ${
            isCenter ? "justify-center" : ""
          } flex items-center gap-3`}
        >
          <span className="h-px w-8 bg-primary/40"></span>
          {kicker}
          {isCenter && <span className="h-px w-8 bg-primary/40"></span>}
        </p>
      )}
      <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-[#111418] dark:text-white">
        {title}
      </h2>
      {description && (
        <p
          className={`text-[#617589] dark:text-gray-400 text-lg mt-3 leading-relaxed ${
            isCenter ? "mx-auto" : ""
          } max-w-2xl`}
        >
          {description}
        </p>
      )}
    </div>
  );
};

export default SectionHeading;
