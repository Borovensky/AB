import { all } from 'redux-saga/effects';

import feedback from './feedback';

export function* saga() {

    yield all([
        feedback.sendFeedbackWatcher()
    ]);

}