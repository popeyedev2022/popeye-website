import React from 'react';
import Logo from '../../assets/img/logo.png';
import './Footer.css';

const Footer = () => (
  <footer  id='footer'>
        <div className='footer-wrap row'>
                <div className='col'>
                    <ul className='footer-links'>
                        <li><a href='#home'>Home</a></li>
                        <li><a href='#about'>About</a></li>
                        <li><a href='#tokenomic'>Tokenomic</a></li>
                        <li><a href='#roadmap'>Roadmap</a></li>
                    </ul>
                </div>
                <div className='col'>
                    <img src={Logo} className='footer-logo' alt='boodogy'/>
                </div>
                <div className='col'>
                        <ul className='footer-links'>
                            <li><a href='https://t.me/Popeyeofficiall'>Telegram</a></li>
                            <li><a href='#about'>Twitter</a></li>
                            <li><a href='#tokenomic'>PancakewSwap</a></li>
                            <li><a href='#roadmap'>CoinMarketCap</a></li>
                        </ul>
                </div>
        </div>
        <div className='footer-copyright'>
            <p>© 2022 Popeye. All rights reserved.</p>
        </div>
  </footer>
);

export default Footer;
