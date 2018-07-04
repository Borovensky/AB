import { takeEvery } from 'redux-saga/effects';

import types from '../../actions/feedback/types';
import { sendFeedbackWorker } from './workers/sendFeedback';

export default Object.freeze({

    * sendFeedbackWatcher() {
        yield takeEvery(types.SEND_FEEDBACK, sendFeedbackWorker);
    }

})