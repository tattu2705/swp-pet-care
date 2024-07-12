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
                    <li><h3>Home</h3></li>
                    <li><h3>Services</h3></li>
                    <li><h3>Shop</h3></li>
                    <li><h3>About</h3></li>
                    <li><h3>Blog</h3></li>
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