import React, { Component, Fragment } from 'react';
import { Route } from 'react-router-dom';
import { TransitionGroup } from 'react-transition-group';

import Navigation from '../../components/Navigation';
import Home from '../../containers/Home';
import Gallery from '../../containers/Gallery';
import Thoughts from '../../containers/Thoughts';
import About from '../../containers/About';
import Contacts from '../../containers/Contacts';

const firstChild = props => {
    const childrenArray = React.Children.toArray(props.children);
    return childrenArray[0] || null;
};

export default class Public extends Component {

    render() {
        return(

            <Fragment>

                <Navigation />

                <Route
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
                    path='/gallery'
                    children={({ match, ...rest }) => (
                        <TransitionGroup component={firstChild}>
                          {match && <Gallery {...rest} />}
                        </TransitionGroup>
                    )}
                />
                <Route 
                    exact  
                    path='/thoughts'
                    children={({ match, ...rest }) => (
                        <TransitionGroup component={firstChild}>
                          {match && <Thoughts {...rest} />}
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
                />
                <Route 
                    exact 
                    path='/contacts'
                    children={({ match, ...rest }) => (
                        <TransitionGroup component={firstChild}>
                          {match && <Contacts {...rest} />}
                        </TransitionGroup>
                    )}
                />
            </Fragment>

        );
    };

};