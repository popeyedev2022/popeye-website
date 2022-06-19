import React, { Component } from 'react'
import './Brand.css'
import logo from '../../assets/img/logo.png'

 class Brand extends Component {
  render() {
    return (
    <section className='brand-main'>
        <div className='brand-head'>
            <img src={logo} className='brand-logo' alt='boodogy'/>
            <h1>POPEYE TOKEN IS A BEST!</h1>
        </div>
        <div className='brand-content'>
            <p className='brand-text'>
            We will release it as a new community token. But of course, it will have a team and manager. We will work to have Popeye, a very popular cartoon, with us again.
            </p>
            <div className='brand-buttons'>
                <button className='brand-btn'>BUY</button>
            </div>
        </div>
    </section>
    )
  }
}

export default Brand;