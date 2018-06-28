// @flow

import React, { Component, Fragment} from 'react';

import AnimatedWrapper from '../../routes/AnimatedWrapper';
import Header from '../../components/Header';

type Props = {}
class GalleryComponent extends Component<Props> {

    render() {
        
        return (
            <Fragment>
                <Header header={'Gallery'} />
                <div className='pageContainer'>
                   
                </div>
            </Fragment>
        );

    };

};

const Gallery = AnimatedWrapper(GalleryComponent);
export default Gallery;