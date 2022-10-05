import { Link } from "react-router-dom"
import { AiFillPlusCircle, AiFillHome, AiFillClockCircle, } from "react-icons/ai"
import { FaBookOpen, FaCheckDouble, FaSignOutAlt } from "react-icons/fa"

const Navbar = () => {
    return (
        <nav className=" bg-[#262322] h-[90vh] my-auto px-12 py-8 rounded-3xl flex flex-col gap-6 text-3xl text-[] relative">
            <Link to="/home">
                <AiFillHome />
            </Link>
            <Link to="/new">
                <AiFillPlusCircle />
            </Link>
            <Link to="/current">
                <AiFillClockCircle />
            </Link>
            <Link to="/to-be-read">
                <FaBookOpen />
            </Link>
            <Link to="/read">
                <FaCheckDouble />
            </Link>
            <FaSignOutAlt className="absolute bottom-8" />
        </nav>
    );
}

export default Navbar;