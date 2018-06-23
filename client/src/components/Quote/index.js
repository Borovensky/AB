import React, { PureComponent } from 'react';

import './styles.sass'

export default class Quote extends PureComponent {

    render() {

        return(
            <div className='pageContainer'>
                {/* <div className='mainQuote'>neve<span className='glitch' data-text='R'>r</span> settle</div> */}
                <div className='quoteContainer'>
                    <div className='mainQuote'>the tim<span className='glitch' data-text='e'>e</span> is now</div>
                </div>
                
                <div className='homeContent'>
                    <h1>personal website</h1>
                </div>

            </div>
        );

    };

}