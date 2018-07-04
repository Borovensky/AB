import types from './types';

export default Object.freeze({

    sendFeedback: (values) => ({
        type: types.SEND_FEEDBACK,
        payload: values
    })

});