import React from 'react'
import './Header.scss'
import { Link } from 'react-router-dom'
const logo = require('../../assets/imgs/logo.png')

interface UserData {
    firstName: string;
    lastName: string;
    email: string;
}

const Header = () => {
    const [userData, setUserData] = React.useState<UserData | null>(() => {
        const storedData = localStorage.getItem('data');
        return storedData ? JSON.parse(storedData) : null;
    });

    const handleLogout = () => {
        localStorage.removeItem('data');
        setUserData(null);
    }

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
                    <li><Link to={"/service-booking"}><h3>Services</h3></Link></li>
                    <li><h3>Shop</h3></li>
                    <li><h3>About</h3></li>
                    <li><h3>Blog</h3></li>
                </ul>
            </div>
            {
                userData ? (
                    <div className='header-user'>
                        <div className='header-user__login'>
                            <h3> Hi {userData.firstName} {userData.lastName}!</h3>
                        </div>
                        <div className='header-user__signup'>
                            <h3 style={{cursor: 'pointer'}} onClick={handleLogout}>Logout </h3>
                        </div>

                    </div>
                ) : (
                    <div className='header-user'>
                        <div className='header-user__login'>
                            <Link to='/sign-in'><h3>Login</h3> </Link>
                        </div>
                        <div className='header-user__signup'>
                            <Link to='/sign-up'><h3>SignUp</h3> </Link>
                        </div>
                    </div>
                )
            }
            {/* <div className='header-user'>
                <div className='header-user__login'>
                    <Link to='/sign-in'>Login </Link>
                </div>
                <div className='header-user__signup'>
                    <Link to='/sign-up'>Signup </Link>
                </div>
            </div> */}
        </div>
    )
}

export default Header