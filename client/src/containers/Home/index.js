// @flow

import React, { Component, Fragment } from 'react';
import axios from 'axios';

import Quote from '../../components/Quote'

import AnimatedWrapper from '../../routes/AnimatedWrapper';

type Props = {}
class HomeComponent extends Component<Props> {

    componentDidMount() {
        axios.get('/api/test').then((result) => {
            console.log(result.data);
        });
    };

    render() {

        return(
            <Fragment>
                <Quote />
            </Fragment>
        );

    };
    
};

const Home = AnimatedWrapper(HomeComponent);
export default Home;    