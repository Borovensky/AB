// @flow

import React, { Component } from 'react';
import { Field, reduxForm, values } from 'redux-form';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

// import feedbackActions from '../actions/feedback';

type Props = {
    handleSubmit: Function,
    sendFeedback: Function
}

class FeedbackForm extends Component<Props> {

    renderField(field: {input: { name: string, values: string }, label: string, meta: Object}) {

        const { meta: { touched, error } } = field;

        if(field.input.name === 'email') {
            return(
                <div className='fieldContainer'>
                    <div className='inputContainer'>
                        <input
                            required
                            type="text"
                            autoсomplete="off"
                            {...field.input}
                        />
                        <label htmlFor='text' className='label'>{field.label}</label>
                        <h4 className='fieldTextError'>
                            {touched ? error : ''}
                        </h4>
                    </div>
                </div>
            );
        } else {
            return(
                <div className='fieldContainer'>
                    <div className='textareaContainer'>
                        <textarea
                            required
                            type="text"
                            {...field.input}
                        />
                        <label>{field.label}</label>
                        <h4 className='fieldTextError'>
                            {touched ? error : ''}
                        </h4>
                    </div>
                </div>
            );
        }

    };

    onSubmit(values) {
        
        console.log(this.props);
        this.props.sendFeedback(values);

    };

    renderButton() {
        
        return(
            <button type='submit' className='submitButton'>
                <span className='buttonText'>send enquiry</span>
            </button>
        );

    };

    render() {

        const { handleSubmit } = this.props;

        return(
            <div className='formContainer'>
                <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                    <Field 
                        label='your email'
                        name="email" 
                        component={this.renderField}
                    />
                    <Field
                        label='your message'
                        name="message" 
                        component={this.renderField}
                    />
                    {this.renderButton()}
                </form>
            </div>
        );

    };

};

function validate (values){

    const errors = {};

	if(!values.email) {
		errors.email = 'Required';
	} else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
		errors.email = 'Invalid email address';
    };
    
    if(!values.message) {
        errors.message = 'Required';
    } else if(values.message.length < 4) {
        errors.message = 'Minimum 4 character'
    };
    
    return errors;

};

const mapStateToProps = (state) => ({
    // sendingFeedback: state.ui.sendingFeedback
});

const mapDispatchToProps = (dispatch) => ({
    // sendFeedback: bindActionCreators(feedbackActions.sendFeedback, dispatch)
});

export default reduxForm({
    validate,
    form: 'feedbackForm'
})(connect(null, {})(FeedbackForm));