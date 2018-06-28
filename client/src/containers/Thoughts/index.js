// @flow

import React, { Component, Fragment } from 'react';

import AnimatedWrapper from '../../routes/AnimatedWrapper';
import Header from '../../components/Header';

type Props = {}
class ThoughtsComponent extends Component<Props> {

    render() {
        
        return (
            <Fragment>
                <Header header={'Thoughts'} />
                <div className='pageContainer'>
                   
                </div>
            </Fragment>
        );

    };

};

const Thoughts = AnimatedWrapper(ThoughtsComponent);
export default Thoughts;