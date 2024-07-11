import React from 'react'
import './Header.scss'
import { Link } from 'react-router-dom'
const logo = require('../../assets/imgs/logo.png')

const Header = () => {
    return (
        <div className='header'>
            <div className='header-logoinfo'>
                <div className='header-logoinfo__logo'>
                    <img src={logo} alt='logo' />
                </div>
                <h3 className='header-logoinfo__title'>
                    Love Pet
                </h3>
            </div>
            <div className='header-nav'>
                <ul className='header-nav__items'>
                    <li><h5>Home</h5></li>
                    <li><h5>Services</h5></li>
                    <li><h5>Shop</h5></li>
                    <li><h5>About</h5></li>
                    <li><h5>Blog</h5></li>
                </ul>
            </div>
            <div className='header-user'>
                <div className='header-user__login'>
                    <Link to='/sign-in'>Login </Link>
                </div>
                <div className='header-user__signup'>
                    <Link to='/sign-up'>Signup </Link>
                </div>
            </div>
        </div>
    )
}

export default Header