import './Nav.css';
import logo from "../img/logo.png"
import logoMobile from "../img/logoMobile.png"
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

import { useState, useEffect } from 'react';

export default function Nav() {
 const [scrollPosition, setScrollPosition] = useState(0);

  function openMenu(){
    setMenuOpen(!menuOpen)
    if(openSocial){
         setOpenSocial(false)
    } 
  }  


  const handleScroll = () => {
    setScrollPosition(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); 

  const [menuOpen, setMenuOpen] = useState(false)
  const [openSocial, setOpenSocial] = useState(false)
  
  return (
    <nav className='navbar'>
        <div className={`navbar-block ${scrollPosition > 5 ? "position-fixed" : ""}`}>
            <div className='nav'>
                <div className='navbar-logo'>
                    <a href="##">
                        <img src={logo} alt="" />
                    </a>
                </div>
                <div className='navbar-info'>
                    <div className={`nabar-info-top ${scrollPosition > 5 ? "nav-top-none" : ""}`}>
                        <ul>
                            <li><span>24/7 Support: </span><a href="tel">1-800-700-6200</a></li>
                            <li><span>E-mail: </span><a href="tel">mail@demolink.org</a></li>
                        </ul>
                        <div className='nav-social'>
                                <a href=""><FaFacebook /></a>
                                <a href=""><FaInstagram /></a>
                                <a href=""><FaLinkedin /></a>
                        </div>                   
                    </div>
                    <div className='navbar-info-bottom'> 
                        <ul>
                            <li className='navbar-info-bottom-item-first'><a href="">About</a></li>
                            <li><a href="">Services</a></li>
                            <li><a href="">Pricing</a></li>
                            <li><a href="">Promos</a></li>
                            <li className='navbar-info-bottom-item-last'><a href="">Contact us</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <div className='mobile-nav'>
            <div className='mobile-nav-block'>
                <div className='mobile-nav-left-side'>
                    <div>
                        <button className={`open-btn-mobile ${menuOpen ? "activ" : ""}`} onClick={openMenu}><span></span></button>
                        <ul className={`mobile-nav-list ${menuOpen ? "open" : "close"}`}> 
                            <li><a href="##">About</a></li>
                            <li><a href='##'>Services</a></li>
                            <li><a href='##'>Pricing</a></li>
                            <li><a href='##'>Promos</a></li>
                            <li><a href='##'>Contact us</a></li>
                        </ul>
                    </div>
                    <a href="" className='mobile-logo-block'>
                        <img src={logoMobile} alt="" />
                    </a>
                </div>
                <div className='mobile-nav-right-side'>
                   <div className='navbar-mobile-social' onClick={() => {
                         setOpenSocial(!openSocial)
                         if(menuOpen){
                            setMenuOpen(false)
                         }
                   }}>
                        <span></span>
                   </div>
                   <div className={`mobile-nav-right-side-hide-block ${openSocial ? "open-social" : "close-social"}`}>
                   <    div className="mobile-nav-right-side-block">
                            <ul>
                                <li><span>24/7 Support: </span><a href="tel">1-800-700-6200</a></li>
                                <li className='m-top'><span>E-mail: </span><a href="tel">mail@demolink.org</a></li>
                            </ul>
                            <div className='nav-social m-top'>
                                <a href=""><FaFacebook /></a>
                                <a href=""><FaInstagram /></a>
                                <a href=""><FaLinkedin /></a>
                            </div>                   
                        </div>
                   </div>
                </div>
            </div>  
        </div>
    </nav>
  );
}
