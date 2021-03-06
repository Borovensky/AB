// @flow

import React, { Component, Fragment } from 'react';

import AnimatedWrapper from '../../routes/AnimatedWrapper';
import Header from '../../components/Header';

type Props = {}
class AboutComponent extends Component<Props> {

    render() {
        
        return (
            <Fragment>
                <Header header={'About'} />
                <div className='pageContainer'>
                   
                </div>
            </Fragment>
        );

    };

};

const About = AnimatedWrapper(AboutComponent);
export default About;