// @flow

import React from 'react';

type Props = {
    header: string
}

const Header = (props: Props) => (
    
    <div className='headerContainer'>
        <h1 className='header'>{props.header}</h1>
    </div>
);

export default Header;