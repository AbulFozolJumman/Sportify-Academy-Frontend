import { useContext, useState } from 'react';
import "./Navbar.css"
import { Link } from 'react-router-dom';
import { AiOutlineMenu, AiOutlineMenuFold } from "react-icons/ai";
import logo from "../../../../assets/logo.png"
import { AuthContext } from '../../../../Provider/AuthProvider';
import { FaSignOutAlt } from 'react-icons/fa';
const Navbar = () => {
    const { user, userSignOut } = useContext(AuthContext);
    const [open, setOpen] = useState(false);

    // This is User logout handler
    const handleSignOut = () => {
        userSignOut()
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser)
            })
            .catch(error => console.log(error.message)) 
    } 

    return (
        <div className='bg-green-100 z-10'>
            <nav className='flex items-center justify-between max-w-7xl mx-auto py-5'>
                <img className='h-[60px]' src={logo} alt="" />
                <div onClick={() => setOpen(!open)} className='hidden'>
                    <span>
                        {
                            open === true ?
                                <AiOutlineMenuFold />
                                : <AiOutlineMenu />
                        }
                    </span>
                </div>

                <div className={`nav-links ${open ? 'top' : 'top-m'}`}>
                    <div className='lg:flex lg:items-center'>
                        <Link className='btn-ghost rounded-lg' to="/">Home</Link>
                        <Link className='btn-ghost rounded-lg' to="/allInstructors">Instructors</Link>
                        <Link className='btn-ghost rounded-lg' to="/allClasses">Classes</Link>
                        {
                            user ? <>
                                <div className='lg:flex lg:items-center' >
                                    <Link className='btn-ghost rounded-lg' to="/dashboard">Dashboard</Link>
                                    <div className='flex items-center'>
                                    <div className='tooltip tooltip-bottom tooltip-success font-bold' data-tip={user?.displayName}>
                                        <img className="h-16 rounded-full ml-3" src={user?.photoURL} alt="" />
                                    </div>
                                    <button onClick={handleSignOut} className="btn btn-ghost px-3"><span className="text-4xl text-blue-500"><FaSignOutAlt></FaSignOutAlt></span></button>
                                    </div>
                                </div>
                            </>
                                : <Link className='btn-ghost rounded-lg' to="/login">Login</Link>
                        }
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;