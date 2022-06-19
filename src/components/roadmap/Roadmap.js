import React, { Component } from 'react';
import './Roadmap.css';
export default class Roadmap extends Component {
  render() {
    return (
      <div className='section'>
            <h1 className='sec-head' id='roadmap'>Roadmap</h1>
            <div className='sec-content'> 
                <div className='roadmap-wrap row'>
                    <div className='phase linear-bg'>
                            <h2>Phase 1</h2>
                            <ul>
                                <li>- PancakeSwap Listing</li>
                                <li>- Social media accounts will be opened.</li>
                                <li>- Voting on promotional sites</li>
                                <li>- 500 holders.</li>
                                <li>- There will be AMAs.</li>
                                <li>- An application for CMC-CG will be made.</li>
                                <li>- </li>
                            </ul>
                    </div>
                    <div className='phase linear-bg'>
                            <h2>Phase 2</h2>
                            <ul>
                                <li>- Game trailer/Demo will be published.</li>
                                <li>- CMC-CG will be released.</li>
                                <li>- It will be published on the stock exchanges.</li>
                                <li>- There will be partnerships.</li>
                                <li>- NFTs will be published.</li>
                            </ul>
                    </div>
                    <div className='phase linear-bg'>
                            <h2>Phase 3</h2>
                            <ul>
                                <li>- Animation will be released for the re-release of the cartoon.</li>
                                <li>- Interviews will be made with TV channels. Or internet sites.</li>
                                <li>- The latest cartoon will be on the market.</li>
                            </ul>
                    </div>
                </div>
            </div>
      </div>
    )
  }
}
