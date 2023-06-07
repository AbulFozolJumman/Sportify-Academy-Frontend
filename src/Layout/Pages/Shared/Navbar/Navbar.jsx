import { useState } from 'react';
import "./Navbar.css"
import { Link } from 'react-router-dom';
import { AiOutlineMenu, AiOutlineMenuFold } from "react-icons/ai";
import logo from "../../../../assets/logo.png"
const Navbar = () => {
    const user = null
    const [open, setOpen] = useState(false);
    return (
        <div className='bg-green-100'>
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
                    <div>
                        <Link className='btn-ghost rounded-lg' to="/">Home</Link>
                        <a className='btn-ghost rounded-lg' href="#about">Instructors</a>
                        <a className='btn-ghost rounded-lg' href="#services">Classes</a>
                        {
                            user ? <>
                                <a className='btn-ghost rounded-lg' href="#contact">Dashboard</a>
                                <img className="h-12 rounded-full" src={user?.photoURL} alt="" />
                            </>
                            : <a className='btn-ghost rounded-lg' href="#contact">Login</a>
                        }
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;