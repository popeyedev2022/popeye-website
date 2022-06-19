import React, { Component } from 'react'
import './Partners.css'
import partnerImg1 from '../../assets/img/coinmarket.png'
import partnerImg2 from '../../assets/img/binance.png'
import partnerImg3 from '../../assets/img/pancakeswap.png'

 class Partners extends Component {
  render() {
    return (
      <div className='section'>
        <div className='container'>
            <div className='partners row'>
                <div className='partner'>
                    <img src={partnerImg1} alt='boodogy'/>
                </div>
                <div className='partner'>
                    <img src={partnerImg2} alt='boodogy'/>
                </div>
                <div className='partner'>
                    <img src={partnerImg3} alt='boodogy'/>
                </div>
            </div>
        </div>
      </div>
    )
  }
}
export default Partners;