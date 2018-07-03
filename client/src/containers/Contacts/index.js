// @flow

import React, { Component, Fragment } from 'react';

import AnimatedWrapper from '../../routes/AnimatedWrapper';
import Header from '../../components/Header';
import FeedbackBlock from '../../components/FeedbackBlock';

type Props = {}
class ContactsComponent extends Component<Props> {

    render() {
        
        return (
            <Fragment>
                <Header header={'Contacts'} />
                <FeedbackBlock />
            </Fragment>
        );
        
    };

};

const Contacts = AnimatedWrapper(ContactsComponent);
export default Contacts;