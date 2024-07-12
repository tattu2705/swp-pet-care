import './Footer.scss'
const logo = require('../../assets/imgs/logo.png')

const Footer = () => {
    return (
        <footer className='footer'>
            <div className='footer-info'>
                <div className='footer-logoinfo'>
                    <div className='footer-logoinfo__logo'>
                        <img src={logo} alt='logo' />
                    </div>
                    <h3 className='footer-logoinfo__title'>
                        Love Pet
                    </h3>
                </div>

                <div className='footer-text'>
                    Get email to update our latest shop and special offers
                </div>

                <div className='footer-email'>
                    <input className='footer-email__input' type='email' placeholder='Enter your email' />
                    <button className='footer-email__btn'>Subscribe</button>
                </div>

                <div className='footer-text'>
                    <div>Address: 123 Bug Street, New York</div>
                    <div>Phone: 84673546578</div>
                    <div>Email: lovepet234@gmail.com</div>
                    <div>Open: 7:00AM - 22:00PM</div>
                </div>
            </div>
            <div className='footer-nav'>
                <h2 className='footer-nav__header'>About us</h2>
                <div className='footer-nav__info'>
                    <ul className='footer-nav__left'>
                        <li>
                            Homepage
                        </li>
                        <li>
                            Product
                        </li>
                        <li>
                            Introduction
                        </li>
                        <li>New</li>
                    </ul>
                    <ul className='footer-nav__right'>
                        <li>
                            Agency
                        </li>
                        <li>
                            Contact
                        </li>
                        <li>
                            Our sitemap
                        </li>
                    </ul>
                </div>

            </div>
        </footer>
    )
}

export default Footer