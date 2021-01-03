import { createSlice } from '@reduxjs/toolkit'

export const initialState = {
    people: [],
    conversationTime: 0,
    activeConversation: false
};

const conversationSlice = createSlice({
    name: 'conversationState',
    initialState,
    reducers: {
        addPerson: (state, { payload }) => {
            state.people.push(payload);
        },
        startConversation: (state) => {
            state.activeConversation = true;
        },
        stopConversation: (state) => {
            state.activeConversation = false;
        },
        updateSpeakingTime: (state) => {
            state.conversationTime += 500;
            console.log("Conversation Time: " + state.conversationTime)
        }
    }
});

export const {
    addPerson,
    startConversation,
    updateSpeakingTime,
    stopConversation
} = conversationSlice.actions;

export default conversationSlice.reducer;