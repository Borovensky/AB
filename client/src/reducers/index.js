import { combineReducers } from 'redux';
import { routerReducer as router } from 'react-router-redux';
import { reducer as formReducer } from 'redux-form';

import feedback from './feedback';

export default combineReducers({
    router,
    form: formReducer,
    feedback
});