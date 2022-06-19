import React, { Component } from 'react'
import './Navbar.css'
import { RiMenuLine } from 'react-icons/ri';
import logo from '../../assets/img/logo.png';

 class Navbar extends Component {
    state = {
        mobileMenuVisibility: false
    }
    onClickToggle = () => {
        this.setState({
            mobileMenuVisibility: !this.state.mobileMenuVisibility
        })
    }
  render() {
    return (
        <section id="home">
            <header className='desktop-header'>
                <div className="container">
                <div className="left">
                    <a href="#home" className="logo">
                        <img src={logo} alt="logo" className='nav-logo'/>
                    </a>
                </div>
                <div className="right">
                    <nav>
                    <ul>
                        <li><a href="#home">Home</a></li>
                        <li><a href="#about">About</a></li>
                        <li><a href="#tokenomic">Tokenomic</a></li>
                        <li><a href="#roadmap">Roadmap</a></li>
                        <li><a href="#buy" className='buy-link'>BUY Popeye</a></li>
                    </ul>
                    </nav>
                </div>
                </div>
            </header>
            <header className='mobile-header'>
                <div className="container">
                       <div className='logo-wrap'>
                            <a href="#home" className="logo">
                                <img src={logo} alt="logo" className='nav-logo'/>
                            </a>
                       </div>
                        <div className="toggle-wrap">
                            <a href='#home'>
                                <RiMenuLine className='toggle-icon' onClick={this.onClickToggle} />
                            </a>
                        </div>
                        
                </div>
            </header>
            {this.state.mobileMenuVisibility ?
                 <div className='container'>
                 <div className='hamburger-menu'>
                     <ul>
                         <li><a href="#home">Home</a></li>
                         <li><a href="#about">About</a></li>
                         <li><a href="#tokenomic">Tokenomic</a></li>
                         <li><a href="#roadmap">Roadmap</a></li>
                         <li><a href="#buy" className='buy-link'>BUY Popeye</a></li>
                     </ul>
                 </div>
             </div>
             : null}
           
        </section>
    )
  }
}
export default Navbar;