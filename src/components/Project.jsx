const ProjectCard = ({ image, title, description, technologies, link = "#" }) => {
    return (
    <div className="flex w-full max-w-[600px] h-full flex-col gap-5 rounded-[23px] border border-[#363749]/60 bg-gradient-to-br from-[#04071d] to-[#0c0e23] p-4 sm:p-5">
        <div className="aspect-[16/9] w-full overflow-hidden rounded-[10px]">
            <img src={image} alt={title} className="h-full w-full object-cover" />
        </div>
        <div className="flex flex-col gap-2">
            <h3 className="text-2xl font-bold leading-tight text-white lg:text-[28px]">
            {title}
            </h3>
            <p className="text-base leading-snug text-[#c1c2d3] lg:text-xl">
            {description}
            </p>
        </div>
        <div className="mt-auto flex items-center justify-between gap-3">
            <div className="flex items-center gap-1.5">
                {technologies.map((tech) => (
                    <div key={tech} title={title}
                        className="flex h-9 w-9 items-center justify-center rounded-full border border-[#363749]/60 bg-gradient-to-br from-[#04071d] to-[#0c0e23] sm:h-10 sm:w-10"
                    >
                    <img src={tech} alt={tech} className="h-5 w-5 object-contain sm:h-6 sm:w-6"/>
                </div>
                ))}
            </div>
            <a href={link} target="_blank" rel="noreferrer" className="flex shrink-0 items-center gap-1.5 text-sm font-medium text-[#d3b8ff] transition-opacity duration-300 hover:opacity-80 sm:text-base lg:text-lg">
                Check Live Site
            </a>
        </div>
    </div>
    );
};

export default ProjectCard;