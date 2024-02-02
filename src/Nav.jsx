import './Nav.css';
import logo from "./img/logo.png"
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

export default function Nav() {
  return (
    <nav className='navbar'>
        <div className='navbar-block'>
            <div className='navbar-logo'>
                <a href="##">
                    <img src={logo} alt="" />
                </a>
            </div>
            <div className='navbar-info'>
                <div className='nabar-info-top'>
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
    </nav>
  );
}
