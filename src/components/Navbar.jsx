import logo from "../assets/logo.png"
import { NavLink, Link } from 'react-router';
const Navbar = () => {
    const link = <>
        <li><NavLink to="/" className={({ isActive }) => isActive ? "bg-red-600 text-white text-lg font-medium ml-3" : "text-black text-lg font-medium ml-3"}>Home</NavLink></li>
        <li><NavLink to="/services" className={({ isActive }) => isActive ? "bg-red-600 text-white text-lg font-medium ml-3" : "text-black text-lg font-medium ml-3"}>All Services</NavLink></li>
        <li><NavLink to="/addServices" className={({ isActive }) => isActive ? "bg-red-600 text-white text-lg font-medium ml-3" : "text-black text-lg font-medium ml-3"}>Add Services</NavLink></li>
        <li><NavLink to="/myServices" className={({ isActive }) => isActive ? "bg-red-600 text-white text-lg font-medium ml-3" : "text-black text-lg font-medium ml-3"}>My Services</NavLink></li>
        <li><NavLink to="/myReview" className={({ isActive }) => isActive ? "bg-red-600 text-white text-lg font-medium ml-3" : "text-black text-lg font-medium ml-3"}>My Review</NavLink></li>
    </>
    return (
        <div>
            <div className="navbar bg-base-100 shadow-sm">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            {link}
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl"><img src={logo} alt="" />
                        Vouch Vault</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {link}
                    </ul>
                </div>
                <div className="navbar-end">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
                        <Link className="btn text-red-600 bg-white">User PHOTO</Link>
                        <Link className="btn bg-red-600 text-white hover:text-red-600 hover:bg-white" to="/auth/register">Register</Link>
                        <Link className="btn bg-red-600 text-white hover:text-red-600 hover:bg-white" to="/auth/login">Login</Link>
                        <Link className="btn bg-red-600 text-white hover:text-red-600 hover:bg-white" to="/auth/logout">Log Out</Link>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Navbar;