import React, { Component, Fragment } from 'react';
import axios from 'axios';

import Quote from '../../components/Quote'

class Home extends Component {

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

export default Home;    