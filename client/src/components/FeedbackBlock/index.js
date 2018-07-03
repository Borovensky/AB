// @flow

import React, { Component, Fragment } from 'react';

import FeedbackForm from './FeedbackForm';
import FeedbackDescription from './FeedbackDescription';

type Props = {}
class FeedbackBlock extends Component<Props> {
    
    render() {
        return (
            <Fragment>
                <div className='contentContainer'>
                    <div className='innerContentContainer'>
                        <div className='contactContent'>

                            <FeedbackForm />
                            
                            <FeedbackDescription />
        
                        </div>
                    </div>
                </div>
            </Fragment>
        );
    };

};

export default FeedbackBlock;