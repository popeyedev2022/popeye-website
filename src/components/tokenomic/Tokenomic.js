import React, { Component } from 'react';
import './Tokenomic.css'
import DonutChart from 'react-donut-chart';
const graph = [{
    label: 'Buy',
    value: 8
},
{
    label: 'Sell',
    value: 15,
},
{
    label: '',
    value: 77,
}];

 class Tokenomic extends Component {
  render() {
    return (
      <div className='section linear-bg'>
          <h1 className='sec-head' id='tokenomic'>Tokenomic</h1>
          <div className='sec-content'>
            <div className='row'>
                <div className='values'>
                    <ul>
                        <li><span className='label'>Total Supply</span> : <span className='value'>100.000.000</span></li>
                        <li><h3><i>-Buy</i></h3></li>
                        <li><span className='label'>Liquditiy</span> : <span className='value'>%5</span></li>
                        <li><span className='label'>PancakeSwap Liquditiy</span> : <span className='value'>%3</span></li>
                        <li><h3><i>-Sell</i></h3></li>
                        <li><span className='label'>Liquditiy</span> : <span className='value'>%5</span></li>
                        <li><span className='label'>PancakeSwap Liquditiy</span> : <span className='value'>%10</span></li>
                    </ul>
                </div>
                <div className='chart-area'>
                    <div className='chart-main'>
                          <DonutChart
                            data={graph}
                            colors={[
                                '#81AFDD',//marketing
                                '#9c27b0',//team
                                '#084d92' //pancake swap
                            ]}
                            className='donutchart'
                            onMouseEnter={(item) => console.log(`mousing entering: ${item.label}`)}
                            onMouseLeave={(item) => console.log(`mouse leaving: ${item.label}`)}
                            onClick={(item, toggled) =>
                              toggled
                                ? console.log(`selecting: ${item.label}`)
                                : console.log(`unselecting: ${item.label}`)
                            }
                        />
                  </div>
                </div>
            </div>
          </div>
      </div>
    )
  }
}
export default Tokenomic;