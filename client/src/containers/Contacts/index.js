// @flow

import React, { Component, Fragment } from 'react';

import AnimatedWrapper from '../../routes/AnimatedWrapper';
import Header from '../../components/Header';

type Props = {}
class ContactsComponent extends Component<Props> {

    render() {
        
        return (
            <Fragment>
                <Header header={'Contacts'} />
                <div className='pageContainer'>
                   
                </div>
            </Fragment>
        );
        
    };

};

const Contacts = AnimatedWrapper(ContactsComponent);
export default Contacts;