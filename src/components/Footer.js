import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../img/logo.png'


const Footer = () => {
    return (
        <footer>
            <nav>
                <ul>
                    <li>
                        <Link to='/' exact={'true'}>Home</Link>
                    </li>
                    <li>
                        <Link to='menu'>Menu</Link>
                    </li>
                    <li>
                        <img src={logo} alt="logotype" />
                    </li>
                    <li>
                        <Link to='gallery'>gallery</Link>
                    </li>
                    <li>
                        <Link to='contact'>contact</Link>
                    </li>
                </ul>
            </nav>
        </footer>
    );
}

export default Footer;