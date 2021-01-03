import { put, all, takeEvery } from 'redux-saga/effects'
import { select } from 'redux-saga/effects';

import { startConversation, updateSpeakingTime } from '@Slices/conversation';
import { getConversation } from '@Selectors/index';

const UPDATE_TIME = 500;
const delay = (ms) => new Promise(res => setTimeout(res, ms))

function* timeTick() {
    yield delay(UPDATE_TIME);
    yield put(updateSpeakingTime())

    const { activeConversation } = yield select(getConversation);
    if(activeConversation)
        yield timeTick();
}


function* rootSaga() {
    yield all([
        takeEvery(startConversation, timeTick)
    ])
}

export default rootSaga;