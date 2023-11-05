import { useContext, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa'; // Import FontAwesome icons
import { AuthContext } from '../../providers/AuthProvider';
import Swal from 'sweetalert2';

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then(() => {
                // Display a success message with SweetAlert2
                Swal.fire({
                    icon: 'success',
                    title: 'Logout Successful!',
                    text: 'You have successfully logged out.',
                });
            })
            .catch(error => {
                console.error('Error during logout:', error);
                // Handle the error as needed

                // Display an error message with SweetAlert2
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Logout failed. Please try again later.',
                });
            });
    };

    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!isMobileMenuOpen);
    };

    const navLinks = <>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/assignments">Assignments</NavLink></li>
        <li><NavLink to="/create">Create Assignments</NavLink></li>
        <li><NavLink to="/my">My Assignments</NavLink></li>
        <li><NavLink to="/submitted">Submitted Assignments</NavLink></li>
    </>

    return (
        <nav className="py-4 px-7 flex justify-between items-center">
            {/* Left Side: Logo */}
            <Link to="/" className="flex items-center">
                <h2 className='text-lg font-bold'>Group Study Assignment</h2>
            </Link>

            {/* Middle Section: Navigation Links */}
            <div className="hidden md:flex space-x-6">
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu gap-2 menu-horizontal px-1">
                        {navLinks}
                        {user ? (
                            <div className="group relative">
                                <div className='flex items-center group-hover:bg-gray-200 cursor-pointer rounded-full p-2'>
                                    <div className="avatar">
                                        <div className="w-12 rounded-full">
                                            <img className='im w-[25px]' src={user.photoURL} alt="" />
                                        </div>
                                    </div>
                                    <div className="hidden group-hover:block mt-2 p-2 space-y-2">
                                        <h2 className="user-name">{user.displayName}</h2>
                                        <button onClick={handleLogOut} className="w-full text-center font-bold hover:text-red-500">Logout</button>
                                    </div>
                                </div>

                            </div>
                        ) : (
                            <>
                                <li>
                                    <Link to="/login">
                                        <h2 className="">Login</h2>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/register">
                                        <h2 className="">Register</h2>
                                    </Link>
                                </li>
                            </>
                        )}
                    </ul>
                </div>
            </div>

            {/* Right Side: Icons and Buttons */}
            <div className="flex items-center space-x-4">
                {/* You can add other buttons or icons here if needed */}
            </div>

            {/* Mobile Menu Toggle Button */}
            <div className='md:hidden'>
                <button
                    className=""
                    onClick={toggleMobileMenu}
                >
                    {isMobileMenuOpen ? (
                        <FaTimes />
                    ) : (
                        <FaBars />
                    )}
                </button>

                {/* Mobile Menu */}
                {isMobileMenuOpen && (
                    <div className="md:hidden flex m-auto">
                        <ul className='menu'>
                            {navLinks}
                            {user ? (
                                <div className="group relative">
                                    <div className='flex flex-col items-center group-hover:bg-gray-200 cursor-pointer rounded-full p-2'>
                                        <div className="avatar">
                                            <div className="w-12 rounded-full">
                                                <img className='im w-[25px]' src={user.photoURL} alt="" />
                                            </div>
                                        </div>
                                        <div className="hidden group-hover:block mt-2 p-2 space-y-2">
                                            <h2 className="user-name font-extralight">{user.displayName}</h2>
                                            <button onClick={handleLogOut} className="w-full text-center hover:text-red-500">Logout</button>
                                        </div>
                                    </div>

                                </div>
                            ) : (
                                <>
                                    <li>
                                        <Link to="/login">
                                            <h2 className="">Login</h2>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/register">
                                            <h2 className="">Register</h2>
                                        </Link>
                                    </li>
                                </>
                            )}
                        </ul>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
