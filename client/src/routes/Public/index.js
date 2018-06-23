import React, { Component, Fragment } from 'react';
import { Route } from 'react-router-dom';
import { TransitionGroup } from 'react-transition-group';

import Home from '../../containers/Home';
import About from '../../containers/About';



const firstChild = props => {
    const childrenArray = React.Children.toArray(props.children);
    return childrenArray[0] || null;
};

export default class Public extends Component {

    render() {
        return(

            <Fragment>
                <Home />
                {/* <Route
                    exact
                    path='/'
                    children={({ match, ...rest }) => (
                        <TransitionGroup component={firstChild}>
                          {match && <Home {...rest} />}
                        </TransitionGroup>
                    )} 
                />
                <Route
                    exact
                    path='/about'
                    children={({ match, ...rest }) => (
                        <TransitionGroup component={firstChild}>
                          {match && <About {...rest} />}
                        </TransitionGroup>
                    )} 
                /> */}
            </Fragment>

        );
    };

};