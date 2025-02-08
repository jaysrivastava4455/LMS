import React, { useContext } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { assets } from '../../assets/assets';
import { useClerk, UserButton, useUser } from '@clerk/clerk-react';
import { AppContext } from '../../context/AppContext';

const Navbar = () => {
    const location = useLocation();
    const isCourseListPage = location.pathname.includes('/course-list');
    const { navigate, isEducator } = useContext(AppContext);


    const { openSignIn } = useClerk();
    const { user } = useUser(); // Destructure `user` from useUser

    return (
        <div
            className={`flex items-center justify-between px-4 sm:px-10 md:px-14 lg:px-36 border-b border-gray-500 py-4 ${isCourseListPage ? 'bg-white' : 'bg-cyan-100/70'
                }`}
        >
            <img onClick={() => navigate('/')} src={assets.logo} alt="Logo" className="w-28 lg:w-32 cursor-pointer" />

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-5 text-gray-500">
                <div className="flex items-center gap-5">
                    {user && (
                        <>
                            <button onClick={() => { navigate('/educator') }}>{isEducator ? 'Educator Dashv=board' : 'Become Educator'}</button>
                            <span>|</span>
                            <Link to="/my-enrollment">My Enrollments</Link>
                        </>
                    )}
                </div>
                {user ? (
                    <UserButton />
                ) : (
                    <button
                        onClick={() => openSignIn()}
                        className="bg-blue-600 text-white px-5 py-2 rounded-full"
                    >
                        Create Account
                    </button>
                )}
            </div>

            {/* Mobile Menu */}
            <div className="md:hidden flex items-center gap-2 sm:gap-5 text-gray-500">
                <div className="flex items-center gap-1 sm:gap-2 text-xs">
                    <button onClick={() => { navigate('/educator') }}>{isEducator ? 'Educator Dashv=board' : 'Become Educator'}</button>
                    | {
                        user && <Link to='/my-enrollments' >My Enrollments</Link>
                    }

                </div>
                {user
                    ? <UserButton />
                    : <button onClick={() => openSignIn()}>
                        <img src={assets.user_icon} alt="" />
                    </button>}
            </div>
        </div >
    );
};

export default Navbar;
