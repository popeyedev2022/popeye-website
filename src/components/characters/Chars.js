import React, { Component } from 'react';
import './Chars.css';
import char from '../../assets/img/soon.GIF';

 class Chars extends Component {
  render() {
    return (
        <div className='section chars-main'>
        <h1 className='sec-head'>NFT's <br/><span className='soon'>(soon)</span></h1>
          <div className='sec-content'>
            <div className='char-wrap'>
                <div className='row'>
                    <div className='char-img'>
                        <img src={char} alt='boodogy characters'/>
                    </div>
                    <div className='char-img'>
                        <img src={char} alt='boodogy characters'/>
                    </div>
                    <div className='char-img'>
                        <img src={char} alt='boodogy characters'/>
                    </div>
                </div>
            </div>
          </div>
    </div>
    )
  }
}
export default Chars;