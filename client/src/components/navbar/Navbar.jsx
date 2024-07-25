import { motion } from "framer-motion";
import React from 'react';
import { useTranslation } from "react-i18next";
import { FaBars } from "react-icons/fa6";
import { IoIosArrowDown } from "react-icons/io";
import { NavLink } from "react-router-dom";
import { useGlobalContext } from '../../context';
import '../../I18next';
import google from '../../images/goo.png';
import '../../index.css';
import './r.css';
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import customFetch from "../../utils/customFetch";
import { toast } from "react-toastify";
export const Navbar = () => {
  const { openSidebar, nav } = useGlobalContext();
  const navigate = useNavigate();
  const { t } = useTranslation();
  const logoutUser = async () => {
    try {
      await customFetch.get('/auth/logout')
    //   clearUser()
      toast.success('logout successfully');
      return navigate('/login')
    } catch (error) {
      toast.error(error?.response?.data?.msg)
      return error
    }
  }

  return (
    <header className={nav ? 'navbarAll scrolled' : 'navbarAll first-header-nav'}>
      <div className="navbarHome">
        <div className="logo-nav">
          <img src={google} alt='logo'/>
        </div>
        <ul className={nav ? 'links color' : 'links firstN'}>
          <li><NavLink to={'/'}>{t("accueil")}</NavLink></li>
          <li><NavLink to={'/presentation'}>presentation</NavLink></li>
          <li className="dropdown">
            <NavLink
              to={'/formations'}
              className="navlink-with-icon"
            >
                {t("formation")}
              <IoIosArrowDown className="iconT"/>
            </NavLink>
            <div className="dropdown-content">
              <NavLink to={'/formations/course1'}>Course 1</NavLink>
              <NavLink to={'/formations/course2'}>Course 2</NavLink>
              <NavLink to={'/formations/course3'}>Course 3</NavLink>
              <NavLink to={'/formations/course4'}>Course 4</NavLink>
            </div>
          </li>
          <li><NavLink to={'/contact'}>{t("contact")}</NavLink></li>
          <li><NavLink to={'/galeries'}>Galeries</NavLink></li>
        </ul>
        <div>
          <motion.button className='contact-nav'
            whileHover={{ scale: 0.9 }}
            whileTap={{ scale: 1.1 }}
          >
            <span className='button-content'><NavLink to={'/login'}>{t("inscription")}</NavLink></span>
          </motion.button>

          <motion.button className='contact-nav'

            whileHover={{ scale: 0.9 }}
            whileTap={{ scale: 1.1 }}
          >
            <span className='button-content'><Link   onClick={logoutUser} >{t("logout")}</Link></span>
          </motion.button>
        </div>
      </div>
      <div>
        <button onClick={openSidebar} className='sidebar-toggle'>
          <FaBars/>
        </button>
      </div>
    </header>
  );
}

export default Navbar;
