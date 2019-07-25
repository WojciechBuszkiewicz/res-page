import React from 'react'
import logo from '../img/logo.png'

import { NavLink, Link } from 'react-router-dom'

const handleClick = () => {
    const nav = document.querySelector('.navi-wrapper');
    // const socialMediaBox = document.querySelector('header nav div.social-media-box');
    nav.classList.toggle('active');
    // socialMediaBox.classList.toggle('active');
}


const Header = () => {

    return (
        <header>
            <div className="nav-wrapper">
                <nav>
                    <div className="hamb-box">
                        <img src={logo} alt='logotype' />
                        <button onClick={handleClick}>
                            <i className="fas fa-bars"></i>
                        </button>
                    </div>
                    <div className='navi-wrapper'>
                        <div className="navi">
                            <ul>
                                <li>
                                    <NavLink to="/res-page/" exact>Home</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/res-page/menu">Menu</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/res-page/gallery">Gallery</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/res-page/contact">Contact</NavLink>
                                </li>
                            </ul>
                            <div className="social-media-box">
                                <i className="fab fa-twitter"></i>
                                <i className="fab fa-facebook-f"></i>
                                <i className="fab fa-instagram"></i>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
            <div className="banner-wrapper">
                <h1>Made with love</h1>
                <div></div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod minus commodi numquam asperiores amet itaque odio dolore temporibus excepturi odit ad, deleniti ut quos praesentium reiciendis facilis, voluptatibus soluta animi.</p>
                <button><Link to='/res-page/menu'>our menu</Link></button>
            </div>
        </header >
    );
}

export default Header;