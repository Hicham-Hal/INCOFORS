import { motion } from "framer-motion";
import { FaBars } from "react-icons/fa6";
import { NavLink, Outlet } from "react-router-dom";
import { useGlobalContext } from '../../context';
import google from '../../images/goo.png';
import './r.css';
import './secondnav.css';
export const SecondNavbar = () => {
    const { openSidebar , nav} = useGlobalContext();
return (
    <>
    <header className='navbarAll second-bar-header-nav'>
        <div className="navbarHome">
        <div className="logo-nav">
            <img src={google} alt='logo'/>
        </div>
            <ul className={nav ? 'links color' : 'links asecond'}>
                <li><NavLink to={'/'}>Accueil</NavLink></li>
                <li><NavLink to={'/contact'}>Contact</NavLink></li>
                <li className="dropdown"><NavLink to={'/formations'}>Formation</NavLink>
                    <div className="dropdown-content">
                        <NavLink to={'/formations/course1'}>Course 1</NavLink>
                        <NavLink to={'/formations/course2'}>Course 2</NavLink>
                        <NavLink to={'/formations/course3'}>Course 3</NavLink>
                        <NavLink to={'/formations/course4'}>Course 4</NavLink>
                    </div>
                </li>
                <li><NavLink to={'/contact'}>Contact</NavLink></li>
                <li><NavLink to={'/contact'}>Contact</NavLink></li>
            </ul>
        <div>
            <motion.button className='contact-nav'
            whileHover={{
                scale: 0.9,
            }}
            whileTap={{
                scale: 1.1
            }}
            >
                <span className='button-content'>INSECRIPTION</span>
            </motion.button>
        </div>
        </div>
        <div>
            <button onClick={openSidebar} className='sidebar-toggle'>
                <FaBars/>
            </button>
        </div>
        </header>
<Outlet/>
    </>
  )
}
export default SecondNavbar;