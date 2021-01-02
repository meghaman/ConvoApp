import { combineReducers } from 'redux'

import conversationReducer from './conversation'

const rootReducer = combineReducers({
    conversationState: conversationReducer
});

export default rootReducer;