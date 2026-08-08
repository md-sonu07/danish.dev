import { SiDailydotdev } from "react-icons/si";

const NavLogo = () => {
    return (
        <a href="#home" className="flex items-center gap-3">
            <div className="bg-primary size-9 flex items-center justify-center rounded-md text-white">
                <span className="">
                    <SiDailydotdev />
                </span>
            </div>
            <h2 className="text-lg font-bold ">Danish.dev</h2>
        </a>
    )
}

export default NavLogo
