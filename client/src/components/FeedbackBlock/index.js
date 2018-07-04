// @flow

import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import feedbackActions from '../../actions/feedback';

import FeedbackForm from './FeedbackForm';
import FeedbackDescription from './FeedbackDescription';

type Props = {
    sendFeedback: Function
}
class FeedbackBlock extends Component<Props> {
    
    render() {

        const { sendFeedback } = this.props;

        return (
            <Fragment>
                <div className='contentContainer'>
                    <div className='innerContentContainer'>
                        <div className='contactContent'>

                            <FeedbackForm 
                                sendFeedback = {sendFeedback}
                            />
                            
                            <FeedbackDescription />
        
                        </div>
                    </div>
                </div>
            </Fragment>
        );
    };

};

const mapDispatchToProps = (dispatch) => ({
    sendFeedback: bindActionCreators(feedbackActions.sendFeedback, dispatch)
});

export default connect(null, mapDispatchToProps)(FeedbackBlock);