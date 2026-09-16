const NavLogo = () => {
    return (
        <a href="#home" className="flex items-center gap-3 group">
            <img 
                src="/title_img.svg" 
                alt="Danish.dev Logo" 
                className="size-9 rounded-md object-contain shadow-sm group-hover:scale-105 transition-transform" 
            />
            <h2 className="text-lg font-bold tracking-tight">Danish.dev</h2>
        </a>
    )
}

export default NavLogo

