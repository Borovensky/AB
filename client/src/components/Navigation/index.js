// @flow

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Icon } from 'react-icons-kit'
import {arrows_left} from 'react-icons-kit/linea/arrows_left'


type Props = {}
class Navigation extends Component<Props> {

    render() {

        return (
            <div className='navBarContainer'>
                <div className='linesContainer'>
                    <div className='lineTop'></div>
                    <div className='iconContainer'>
                        <Icon icon={arrows_left} className='iconStyle' size={40}/>
                    </div>
                    <div className='lineBottom'></div>
                </div>
                <ul className='navBarElements'>
                    <li className='navElement1'>
                        <Link to='/'>Home</Link>
                    </li>
                    <li className='navElement2'>
                        <Link to='/gallery'>Gallery</Link>
                    </li>
                    <li className='navElement3'>
                        <Link to='/thoughts'>Thoughts</Link>
                    </li>
                    <li className='navElement4'> 
                        <Link to='/about'>About</Link>
                    </li>
                    <li className='navElement5'> 
                        <Link to='/contacts'>Contacts</Link>
                    </li>
                </ul>
            </div>
        );

    }

}

export default Navigation; 