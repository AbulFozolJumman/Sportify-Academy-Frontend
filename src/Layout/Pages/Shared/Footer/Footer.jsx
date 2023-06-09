import { CgPhone, CgMail } from "react-icons/cg";
import { FaFacebookSquare, FaMapMarkerAlt, FaGithub, FaLinkedin } from "react-icons/fa";
import logo from "../../../../assets/logo.png"

const Footer = () => {
    return (
        <div className="bg-green-100">
            <footer className="footer p-10 bg-transparent px-5 lg:px-0 max-w-7xl mx-auto">
                <div>
                    <img className='h-[60px]' src={logo} alt="" />
                    <p className="font-medium text-2xl">Sportify Academy Ltd.</p>
                    <p className="font-medium text-xl flex items-center gap-2"><span><FaMapMarkerAlt /></span> 106/5, Monesshor Road, Zigatola, Dhaka, Bangladesh</p>
                </div>
                <div className="mb-5">
                    <p className="text-3xl mb-3 font-bold">Our contact info</p>
                    <div className="w-80 text-xl" id="contact">
                        <p className="flex items-center gap-2 font-medium"><span className="font-bold text-xl"><CgPhone></CgPhone></span> +8801677949565</p>
                        <p className="flex items-center gap-2 font-medium"><span className="font-bold text-xl"><CgPhone></CgPhone></span> (614) 377 6275</p>
                        <p className="flex items-center gap-2 font-medium"><span className="font-bold text-2xl"><CgMail></CgMail></span>sportifyacademy@gmail.com</p>
                    </div>
                    <div className="flex gap-4 mt-5 justify-start">
                        <a target={"_blank"} rel="noreferrer" className="font-bold text-3xl" href="https://www.facebook.com/MDAFZumman/"><FaFacebookSquare /></a>
                        <a target={"_blank"} rel="noreferrer" className="font-bold text-3xl" href="https://github.com/AbulFozolJumman/"><FaGithub /></a>
                        <a target={"_blank"} rel="noreferrer" className="font-bold text-3xl" href="https://www.linkedin.com/in/abul-fozol-jumman-414734279/"><FaLinkedin /></a>
                    </div>
                </div>
            </footer >
            <p className="text-center text-sm pb-1"><i>Copyright © 2023 - All right reserved by Sportify Academy Ltd.</i></p>
        </div>
    );
};

export default Footer;