import { Link } from "react-router-dom"
import { AiFillPlusCircle, AiFillHome, AiFillClockCircle, } from "react-icons/ai"
import { FaBookOpen, FaCheckDouble, FaSignOutAlt } from "react-icons/fa"
import { useState } from "react"

const Navbar = () => {
    const [showBtn, setShowBtn] = useState(false)
    return (
        <nav className=" bg-hibiscus md:h-[90vh] md:my-auto px-6 py-4 md:px-12 md:py-8 md:rounded-3xl flex md:flex-col flex-row md:gap-6 text-3xl text-bon-jour sticky md:relative justify-between md:justify-start">
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
            <div>
                <FaSignOutAlt className="md:absolute md:bottom-8 cursor-pointer" onClick={() => setShowBtn(!showBtn)} />
                {showBtn && <button className="absolute right-4 -bottom-2 md:bottom-2 cursor-pointer text-sm bg-white text-black px-6">Log Out</button>}
            </div>
        </nav>
    );
}

export default Navbar;