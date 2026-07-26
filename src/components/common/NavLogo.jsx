import { SiDailydotdev } from "react-icons/si";
import { Link } from "react-router-dom";

const NavLogo = () => {
    return (
        <Link to="/" className="flex items-center gap-3">
            <div className="bg-primary size-9 flex items-center justify-center rounded-md text-white">
                <span className="">
                    <SiDailydotdev />
                </span>
            </div>
            <h2 className="text-lg font-bold ">Danish.dev</h2>
        </Link>
    )
}

export default NavLogo
