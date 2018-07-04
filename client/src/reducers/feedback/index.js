import types from '../../actions/feedback/types';
import { Map } from 'immutable';

const INITIAL_STATE = Map({});

export default ( state = INITIAL_STATE, action ) => {
    
    switch ( action.type ) {
        case types.SEND_FEEDBACK:
            console.log(action);
            return state.merge(action.payload)
        default:
            return state;
    }

}