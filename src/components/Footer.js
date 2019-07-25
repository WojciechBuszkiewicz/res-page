import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../img/logo.png'


const Footer = () => {
    return (
        <footer>
            <nav>
                <ul>
                    <li>
                        <Link to='/res-page/' >Home</Link>
                    </li>
                    <li>
                        <Link to='/res-page/menu'>Menu</Link>
                    </li>
                    <li>
                        <img src={logo} alt="logotype" />
                    </li>
                    <li>
                        <Link to='/res-page/gallery'>gallery</Link>
                    </li>
                    <li>
                        <Link to='/res-page/contact'>contact</Link>
                    </li>
                </ul>
            </nav>
        </footer>
    );
}

export default Footer;