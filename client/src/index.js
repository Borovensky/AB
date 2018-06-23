import React from 'react';
import {render} from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter as Router } from 'react-router-redux';

import './main.sass';

import store, { history } from './store';

import Routes from './routes';

render(
    <Provider store={ store }>
        <Router history={ history }>
            <Routes/>
        </Router>
    </Provider>, 
    document.getElementById('root')
);
